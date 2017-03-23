import * as axios from 'axios';

const helper = () => {
    postEmployer: (postData) => {
        return axios.post('/employer', postData).then((data) => {
            console.log('success', data);

        })
        .catch((error) => {
            console.log('error', error);
        });
        console.log('employer profile submitted', postData);
    }
};