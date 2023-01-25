import TaskService from "../services/TaskService";

export default {
    namespaced: true,
    state: {
        tasks: [],
    },
    getters: {
        list(state) {
            return state.tasks;
        },
    },
    mutations: {
        SET_TASKS(state, value) {
            state.tasks = value;
        }
    },
    actions: {
        async loadTasks({ commit }, user) {
            try {
                const response = await TaskService.loadUserTasks(user);
                commit("SET_TASKS", response.data.data);
            } catch (error) {
                commit("SET_TASKS", {});
            }
        }
    },
}
