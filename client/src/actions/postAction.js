import * as api from '../api';

export const postAction = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'GET_ALL_POSTS', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}