<template>
    <div class="container">
        <Header />
        <NavBar />
        <div class="profile_content">
            <div class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-evenly" style="padding-top: 16px;">
                <EmployeeProffInfo />
                <EmployeePersonalInfo />
                <ProfileMilestone />
            </div>
            <div class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-start" style="padding-top: 16px;">
                <UpcomingTask />
                <EmployeeReview />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import {mapActions} from "vuex";
import Header from "./Header.vue";
import NavBar from "./NavBar.vue";
import EmployeeProffInfo from "./EmployeeProffInfo.vue";
import EmployeePersonalInfo from "./EmployeePersonalInfo.vue";
import EmployeeReview from "./EmployeeReview.vue";
import Footer from "./Footer.vue";
import UpcomingTask from "./UpcomingTask.vue";
import ProfileMilestone from "./ProfileMilestone.vue";

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
    components: {
        Header,
        NavBar,
        EmployeeProffInfo,
        EmployeePersonalInfo,
        EmployeeReview,
        Footer,
        UpcomingTask,
        ProfileMilestone
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
