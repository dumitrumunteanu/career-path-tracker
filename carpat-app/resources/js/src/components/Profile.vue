<template>
    <div>
        <div>Logged in as {{ user.email }}</div>
        <div>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
    name: "Profile",
    computed: {
        user() {
            return this.$store.getters["auth/user"];
        },
    },
    methods: {
        ...mapActions({
            logout: "auth/logout",
        }),
    },
}
</script>
