import React, { useReducer } from 'react';
import axios from 'axios';
import JobContext from './jobContext';
import JobReducer from './jobReducer';
import {
    GET_JOBS,
    SEARCH_JOBS,
    CLEAR_JOBS,
    GET_JOB,
    SET_LOADING
} from '../types';

const JobState = props => {
    const initialState = {
        jobs: [],
        job: {},
        loading: false
    }

    const [state, dispatch] = useReducer(JobReducer, initialState);

    //Search jobs
    const searchJobs = async text => {
        setLoading();

        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jsonkeeper.com/b/9IXW?q=${text}`);
    
        // const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
        dispatch({
            type: SEARCH_JOBS,
            payload: res.data.items
        });
      };

    // Get jobs
    const getJobs = async () => {
        setLoading();
    
        const res = await axios.get('https://cors-anywhere.herokuapp.com/https://jsonkeeper.com/b/9IXW');
    
        dispatch({
            type: GET_JOBS,
            payload: res.data
        });
      }

    // Get user
    // const getUser = async username => {
    //     setLoading();
    
    //     const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    //     dispatch({
    //         type: GET_USER,
    //         payload: res.data
    //     });
    //   }

    // Clear users
    // const clearJobs = () => dispatch({ type: CLEAR_JOBS });

    // Set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <JobContext.Provider
        value={{
            jobs: state.jobs,
            job: state.job,
            loading: state.loading,
            getJobs,
            searchJobs,
            setLoading,
            // clearJobs,
            // getJob
        }}
    >
        {props.children}
    </JobContext.Provider>
}

export default JobState;