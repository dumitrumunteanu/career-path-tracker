<template>
    <div class="container">
        <Header />
        <ManagerNavBar />
        <div class="profile_content">
            <div class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-evenly" style="padding-top: 16px;">

            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import {mapActions} from "vuex";
import Header from "./Header.vue";
import ManagerNavBar from "./ManagerNavBar.vue";
import Footer from "./Footer.vue";

export default {
    name: "ManagerReviews",
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
    components: {
        Header,
        ManagerNavBar,
        Footer,
    }
}
</script>

<style>

</style>
