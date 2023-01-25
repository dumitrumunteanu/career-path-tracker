import axios from "axios";

export const taskClient = axios.create({
    withCredentials: true,
});

export default {
    loadUserTasks(user) {
        return  taskClient.get(`/api/user/${user.id}/tasks`);
    }
}
