export const POSTS_LOADING = "POSTS_LOADING"
export const POSTS_FAIL = "POSTS_FAIL"
export const POSTS_SUCCESS = "POSTS_SUCCESS"
export const POST_SUCCESS = "POST_SUCCESS"
export const DELETE_SUCCESS = "DELETE_SUCCESS"

export type Posts = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type CatchError = string | undefined

/* -------------Loading------------ */
export interface PostsLoading {
    type: typeof POSTS_LOADING
}

/* -------------Error-------------- */
export interface PostsFail {
    type: typeof POSTS_FAIL
    payload: CatchError
}

/* ---------Get All Data------------ */
export interface PostsSuccess {
    type: typeof POSTS_SUCCESS
    payload: Posts[]
}
/* ---------Get One Post------------ */
export interface PostSuccess {
    type: typeof POST_SUCCESS
    payload: Posts
}
/* ---------Delete One Post------------ */
export interface DeleteSuccess {
    type: typeof DELETE_SUCCESS
    payload: string
    notDeleted:Posts[] //update storage without triggering api request for all posts
}


export type PostsDispatchTypes = PostsLoading | PostsFail | PostsSuccess | PostSuccess | DeleteSuccess
