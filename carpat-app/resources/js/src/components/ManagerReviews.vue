<template>
    <div class="container">
        <Header />
        <ManagerNavBar />
        <div class="profile_content">
                <EmployeeSelect />
                <ManagerCompletedTasks />
        </div>
        <Footer />
    </div>
</template>

<script>
import {mapActions} from "vuex";
import Header from "./Header.vue";
import ManagerNavBar from "./ManagerNavBar.vue";
import Footer from "./Footer.vue";
import EmployeeSelect from "./EmployeeSelect.vue";
import ManagerCompletedTasks from "./ManagerCompletedTasks.vue";

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
        EmployeeSelect,
        ManagerCompletedTasks
    }
}
</script>

<style scoped>
.profile_content {
    background-color: white;
    grid-template-columns: 15% 82%;
    display: grid;
    grid-gap: 20px;
    padding-top: 20px;
}

</style>
