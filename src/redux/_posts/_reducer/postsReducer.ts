import {
    PostsDispatchTypes,
    POSTS_FAIL,
    POSTS_SUCCESS,
    POSTS_LOADING,
    POST_SUCCESS,
    DELETE_SUCCESS,
    Posts,
} from "./../_actions/postActionTypes";

interface InitialStateInterface {
    loading: boolean;
    posts?: Posts[];
    post?:Posts
    error?:string
    deleted?:string
}

const initialState: InitialStateInterface = {
    loading: false
};

const postsReducer = (
    state: InitialStateInterface = initialState,
    actions: PostsDispatchTypes
): InitialStateInterface => {
    switch (actions.type) {
        
        case POSTS_FAIL:
            return {
                loading: false,
                error:actions.payload
            };

        case POSTS_LOADING:
            return {
                loading: true,
            };

        case POSTS_SUCCESS:
            return {
                loading: false,
                posts: actions.payload,
            };

        case POST_SUCCESS:
            return {
                loading: false,
                post: actions.payload,
            };
        case DELETE_SUCCESS:
            return {
                loading: false,
                deleted: actions.payload,
                posts:actions.notDeleted
            };

        default:
            return state;
    }
};

export default postsReducer;
