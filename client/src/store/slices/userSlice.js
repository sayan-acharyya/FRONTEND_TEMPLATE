import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { toggleAddNewAdminPopup } from "./popUpSlice";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        loading: false,
    },
    reducers: {
        fetchAllUserRequest(state) {
            state.loading = true;
        },
        fetchAllUserSuccess(state, action) {
            state.loading = false;
            state.users = action.payload;
        },
        fetchAllUserFailed(state) {
            state.loading = false;
        },
        addNewAdminRequest(state) {
            state.loading = true;
        },
        addNewAdminSuccess(state) {
            state.loading = false;
        },
        addNewAdminFailed(state) {
            state.loading = false;
        },
    }
});

export const fetchAllUsers = () => async (dispatch) => {
    dispatch(userSlice.actions.fetchAllUserRequest());
    try {
        const res = await axios.get("http://localhost:4000/api/v1/user/all", { withCredentials: true });
        dispatch(userSlice.actions.fetchAllUserSuccess(res.data.users));
    } catch (err) {
        dispatch(userSlice.actions.fetchAllUserFailed());
        toast.error(err.response?.data?.message || err.message);
    }
};

export const addNewAdmin = (data) => async (dispatch) => {
    dispatch(userSlice.actions.addNewAdminRequest());
    try {
        const res = await axios.post("http://localhost:4000/api/v1/user/add/new-admin", data, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        dispatch(userSlice.actions.addNewAdminSuccess());
        toast.success(res.data.message);
        dispatch(toggleAddNewAdminPopup());
    } catch (err) {
        dispatch(userSlice.actions.addNewAdminFailed());
        toast.error(err.response?.data?.message || err.message);
    }
};

export default userSlice.reducer;
