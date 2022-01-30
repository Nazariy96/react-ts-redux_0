import {
    PostsDispatchTypes,
    POSTS_LOADING,
    POSTS_FAIL,
    POSTS_SUCCESS,
    POST_SUCCESS,
    DELETE_SUCCESS,
    Posts,
} from "./postActionTypes";
import { Dispatch } from "redux";
import axios from "axios";

export const GetAllPosts =
    () => async (dispatch: Dispatch<PostsDispatchTypes>) => {
        try {
            dispatch({
                type: POSTS_LOADING,
            });

            const res = await axios.get("http://jsonplaceholder.typicode.com/posts");

            dispatch({
                type: POSTS_SUCCESS,
                payload: res.data,
            });
        } catch (e: unknown) {
            const message = (e as Error).message
            dispatch({
                type: POSTS_FAIL,
                payload: message
            });
        }
    };

export const GetPost =
    (id: string) => async (dispatch: Dispatch<PostsDispatchTypes>) => {
        try {
            dispatch({
                type: POSTS_LOADING,
            });

            const res = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);

            dispatch({
                type: POST_SUCCESS,
                payload: res.data,
            });
        } catch (e: unknown) {
            const message = (e as Error).message
            dispatch({
                type: POSTS_FAIL,
                payload: message
            });
        }
    };

export const DeletePost =
    (id: number, obj: Posts[]) => async (dispatch: Dispatch<PostsDispatchTypes>) => {
        try {
            dispatch({
                type: POSTS_LOADING,
            });

            const res = await axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`);
            dispatch({
                type: DELETE_SUCCESS,
                payload: res.statusText,
                notDeleted: obj
            });
        } catch (e: unknown) {
            const message = (e as Error).message
            dispatch({
                type: POSTS_FAIL,
                payload: message
            });
        }
    };

export const PatchPost =
    (id: string, obj: object) => async (dispatch: Dispatch<PostsDispatchTypes>) => {
        try {
            dispatch({
                type: POSTS_LOADING,
            });

            const res = await axios.patch(`http://jsonplaceholder.typicode.com/posts/${id}`, obj);

            dispatch({
                type: POST_SUCCESS,
                payload: res.data,
            });
        } catch (e: unknown) {
            const message = (e as Error).message
            dispatch({
                type: POSTS_FAIL,
                payload: message
            });
        }
    };
