<template>
    <p>Remove User</p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "RemoveUser",
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

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 60px;
}

.profile_content {
    background-color: #ffffff;
}
</style>
