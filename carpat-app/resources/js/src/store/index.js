import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '@/store/auth'
import tasks from '@/store/tasks'

const store = createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        tasks,
    },
})

export default store
