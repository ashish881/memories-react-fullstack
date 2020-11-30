
import Axios from 'axios';
import { DELETE_POST, GET_POST, LIKE_POST, POST_DATA, UPDATE_POST } from '../constant/constant';

export const getPost = () => async (dispatch) =>{
    try {
        const {data} = await Axios.get('https://memoryy-project.herokuapp.com/posts/');
         dispatch({
             type: GET_POST,
             payload: data,
         })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await Axios.post('https://memoryy-project.herokuapp.com/posts/',post);
         dispatch({
             type: POST_DATA,
             payload: data,
         })
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id,updatePost) => async (dispatch) =>{
    try {
        const {data} = await Axios.patch(`https://memoryy-project.herokuapp.com/posts/${id}`,updatePost);
         dispatch({
             type: UPDATE_POST,
             payload: data,
         })
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) =>{
    try {
        await Axios.delete(`https://memoryy-project.herokuapp.com/posts/${id}`);
        dispatch({
            type: DELETE_POST,
            payload:id,
        })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) =>{
    try {
      const {data} = await Axios.patch(`https://memoryy-project.herokuapp.com/posts/${id}/likePost`);
        dispatch({
            type: LIKE_POST,
            payload: data,
        })
    } catch (error) {
        console.log(error)
    }
}
