import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { POST_SUCCESS } from "../../../../redux/_posts/_actions/postActionTypes";
import { GetPost, PatchPost } from "../../../../redux/_posts/_actions/postsAction";
import Loader from "../../../loader/Loader";
import ButtonLink from "../details/buttons/ButtonLink";
import ButtonSubmit from "../details/buttons/ButtonSubmit";
import Card from "../details/Card";

const PostEdit = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<string>()
  const post = useAppSelector(state => state.postReducer.post)
  const loading = useAppSelector(state => state.postReducer.loading)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.getAttribute('name')
    const value = e.target.value
    switch (input) {
      case 'title':
        return dispatch({
          type: POST_SUCCESS,
          payload: { ...post, title: value },
        })
      case 'body':
        return dispatch({
          type: POST_SUCCESS,
          payload: { ...post, body: value },
        })

      default:
        return dispatch({
          type: POST_SUCCESS,
          payload: { ...post }
        })
    }
  }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      dispatch(PatchPost(String(id),post!))
    }


    useEffect(() => {
      dispatch(GetPost(String(id)))
    }, [dispatch, id])

    return (
      <>
      {loading ? <Loader/> 
      :
        <form className="c__form">
          {post && <textarea placeholder="Title..." className="c__form--area textarea" defaultValue={post.title} name="title" onChange={handleChange} />}
          {post && <textarea placeholder="Body..." className="c__form--area textarea" defaultValue={post.body} name="body" onChange={handleChange} />}
          <ButtonSubmit className={"c__form--btn"} type="submit" onClick={handleSubmit} >Submit</ButtonSubmit>
          <ButtonLink className={"c__form--btn"} dir={'/posts'}>Back</ButtonLink>
        </form>
      }
        {post && <Card userId={post.userId} title={post.title} body={post.body}/>}
      </>
    );
  };

  export default PostEdit;
