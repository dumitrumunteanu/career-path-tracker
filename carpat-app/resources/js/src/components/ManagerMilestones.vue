<template>
    <div class="container">
        <ManagerHeader />
        <ManagerNavBar />
        <div class="profile_content">
            <EmployeeSelect />
            <MilestonesForm />
        </div>
        <Footer />
    </div>
</template>

<script>
import {mapActions} from "vuex";
import ManagerHeader from "./ManagerHeader.vue";
import ManagerNavBar from "./ManagerNavBar.vue";
import Footer from "./Footer.vue";
import EmployeeSelect from "./EmployeeSelect.vue";
import MilestonesForm from "./MilestonesForm.vue";

export default {
    name: "ManagerMilestones",
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
        Footer,
        EmployeeSelect,
        MilestonesForm
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
