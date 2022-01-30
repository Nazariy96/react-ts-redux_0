
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { DeletePost, GetAllPosts } from "../../../redux/_posts/_actions/postsAction";
import Error from "../../error/Error";
import Loader from "../../loader/Loader";
import ButtonLink from "./details/buttons/ButtonLink";
import ButtonSubmit from "./details/buttons/ButtonSubmit";
import Card from "./details/Card";

const Posts = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.postReducer.posts)
    const loading = useAppSelector(state => state.postReducer.loading)
    const error = useAppSelector(state => state.postReducer.error)
    const deleted = useAppSelector(state => state.postReducer.deleted)


    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault()
        const newData = posts!.filter(post => {
            return post.id !== id
        })
        dispatch(DeletePost(id,newData))
    }

    useEffect(() => {
        dispatch(GetAllPosts())
    }, [dispatch])

    return (
        <>
            {error ? <Error /* err={error} */ />
            : loading ? <Loader />
            : posts?.map(card => {
                return (
                    <React.Fragment key={card.id}>
                        <Card userId={card.userId} title={card.title} body={card.body} />
                        <ButtonSubmit type="submit" onClick={(e) => handleDelete(e, card.id)}>Delete</ButtonSubmit>
                        <ButtonLink dir={`/post/edit/${card.id}`}>
                            Edit
                        </ButtonLink>
                    </React.Fragment>)
                })
            }
        </>
    );
};

export default Posts;
