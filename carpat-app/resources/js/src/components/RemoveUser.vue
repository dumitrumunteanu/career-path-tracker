<template>
   <p>fjbkawf</p>
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
