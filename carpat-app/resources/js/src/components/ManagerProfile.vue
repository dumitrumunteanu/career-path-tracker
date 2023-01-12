<template>
    <div class="container">
        <ManagerHeader />
        <ManagerNavBar />
        <div class="profile_content">
            <div class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-start" style="padding-top: 16px;">
                <EmployeeProffInfo style="margin-left: 32px; margin-right: 35px;"/>
                <EmployeePersonalInfo />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import {mapActions} from "vuex";
import ManagerHeader from "./ManagerHeader.vue";
import ManagerNavBar from "./ManagerNavBar.vue";
import EmployeeProffInfo from "./EmployeeProffInfo.vue";
import EmployeePersonalInfo from "./EmployeePersonalInfo.vue";
import Footer from "./Footer.vue";

export default {
    name: "ManagerProfile",
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
        ManagerHeader,
        ManagerNavBar,
        EmployeeProffInfo,
        EmployeePersonalInfo,
        Footer,
    }
}
</script>

<style>
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
