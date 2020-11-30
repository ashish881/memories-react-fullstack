import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Posts from './component/Posts';
import Form from './component/Form';
import { getPost } from './action/getAction';
import { useDispatch } from 'react-redux';

export default function App() {
    const [currentId, setcurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost())
        console.log('get post')
    }, [currentId, dispatch])

    return (
        <div>
            <Header />
            <div className="main-container">
                <div className="posts-container">
                    <Posts setcurrentId={setcurrentId} />
                </div>
                <div className="formp-container">
                    <Form currentId={currentId} setcurrentId={setcurrentId} />
                </div>
            </div>
        </div>
    )
}
