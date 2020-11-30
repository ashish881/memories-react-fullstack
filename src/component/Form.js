import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../action/getAction';

export default function Form({ currentId, setcurrentId }) {
    console.log(currentId);
    const post = useSelector((state) => (currentId ? state.post.find((message) => message._id === currentId) : null));
    console.log(post);

    const dispatch = useDispatch();
    const [postData, setpostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedfile: ''
    })
    useEffect(() => {
        if (post) {
            setpostData(post)
        }
    }, [post])

    const submitHandler = (e) => {
        e.preventDefault();
        if (currentId === 0) {
            dispatch(createPost(postData))
        } else {
            dispatch(updatePost(currentId, postData))
        }
        clearHandler()
    }

    const clearHandler = () => {
        setcurrentId(0);
        setpostData({ creator: '', title: '', message: '', tags: '', selectedfile: '' })
    }

    return (
        <>
            <div className="form-container">
                <h4>{currentId ? 'Update a Memory' : 'Creating a Memory'}</h4>
                <form onSubmit={submitHandler}>
                    <div><input type="text" placeholder="Creator" value={postData.creator} onChange={(e) => setpostData({ ...postData, creator: e.target.value })} required></input></div>
                    <div><input type="text" placeholder="Title" value={postData.title} onChange={(e) => setpostData({ ...postData, title: e.target.value })} required></input></div>
                    <div><textarea name="Message" placeholder="Message" rows="4" cols="25" value={postData.message} onChange={(e) => setpostData({ ...postData, message: e.target.value })} required></textarea></div>
                    <div><input type="text" placeholder="Tags" value={postData.tags} onChange={(e) => setpostData({ ...postData, tags: e.target.value.split(',') })} required></input></div>
                    <FileBase type="file" multiple={false} value={postData.selectedfile} onDone={({ base64 }) => setpostData({ ...postData, selectedfile: base64 })} required></FileBase>
                    <div><button>Submit</button></div>
                    <div><button className="clear" onClick={clearHandler}>Clear</button></div>
                </form>
            </div>
        </>
    )
}
