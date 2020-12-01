import React from 'react'
import { deletePost, likePost } from '../action/getAction';
import { useDispatch } from 'react-redux';

export default function Post({ post, setcurrentId }) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="card-container">
                <img src={post.selectedfile} alt="js" />
                <p className="creator">{post.creator}</p>
                <i onClick={() => setcurrentId(post._id)} className="fas fa-ellipsis-h"></i>
                <span>{post.tags.map((tag) => <p className="tag-class">#{tag}</p>)}</span>
                <h3>{post.title}</h3>
                <h6>{post.message}</h6>
                <div className="icon-container">
                    <i className="fas fa-thumbs-up" onClick={() => dispatch(likePost(post._id))}>{" "}LIKE{" "}{post.likeCount}</i>
                    <i className="fas fa-trash" onClick={() => dispatch(deletePost(post._id))}>DELETE</i>
                </div>
            </div>
        </>
    )
}
