<template>
    <div class="container">
        <Header />
        <NavBar />
        <div class="profile_content">
            <div class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-evenly" style="padding-top: 16px;">
                <ActiveTask />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import {mapActions} from "vuex";
import Header from "./Header.vue";
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import ActiveTask from "./ActiveTask.vue";

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
        Footer,
        ActiveTask,
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
