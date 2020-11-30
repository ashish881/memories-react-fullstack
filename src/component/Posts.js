import React from 'react'
import {useSelector} from 'react-redux';
import Post from './Post';

export default function Posts({setcurrentId}) {
              const posts = useSelector(state => state.post)
    return (
       <>
       {posts.map(post=>(
        <Post key={post._id} post={post} setcurrentId={setcurrentId}></Post>
       ))}
     
       </>
    )
}
