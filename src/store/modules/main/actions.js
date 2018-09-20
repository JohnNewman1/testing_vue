import * as api from '../../../api/index';

export default {
    CATCH_THEM_ALL: ({ commit, state }) => {
        api.getThemAll()
            .then(response => {
                commit('STORE_THEM_ALL', response);
            })
            .catch(err => {
                console.error(err);
            });
    },
};
