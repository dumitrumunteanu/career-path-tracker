import router from '@/router'
import AuthService from "@/services/AuthService";

export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: {},
    },
    getters: {
        authenticated(state) {
            return state.authenticated;
        },
        user(state) {
            return state.user;
        }
    },
    mutations: {
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value;
        },
        SET_USER (state, value) {
            state.user = value;
        },
    },
    actions: {
        async loadUser({ commit }) {
            try {
                const response = await AuthService.getAuthUser();
                commit("SET_USER", response.data);
                commit("SET_AUTHENTICATED", true);

                return response.data;
            } catch (error) {
                commit("SET_USER", {});
                commit("SET_AUTHENTICATED", false);
            }
        },
        login({ dispatch }){
            dispatch("loadUser");
            router.push({ name: "ProfileInfo" });
        },
        logout({ commit }) {
            return AuthService.logout()
                .then(() => {
                    commit("SET_USER", {});
                    commit('SET_AUTHENTICATED', false);
                    if (router.currentRoute.name !== "Login")
                        router.push({ name: "Login" });
                });
        },
    }
}
