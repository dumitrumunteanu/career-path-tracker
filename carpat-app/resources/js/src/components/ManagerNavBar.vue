<template>
    <div class="nav_bar">
        <nav class="container navbar navbar-expand-lg navbar-light bg-light">
            <div class="navbar-nav mr-auto">
                <router-link to="/manager" class="nav-item nav-link" style="margin-right: 10px; margin-left:10px">Profile</router-link>
                <router-link to="/managerTasks" class="nav-item nav-link" style="margin-right: 10px;">Assign Tasks</router-link>
                <router-link to="/managerReviews" class="nav-item nav-link" style="margin-right: 10px;">Review Tasks</router-link>
                <router-link to="/managerMilestones" class="nav-item nav-link" style="margin-right: 10px;">Assign Milestones</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "ManagerNavBar"
}
</script>

<style scoped>

nav {
    padding: 10px;
    text-align: center;
}

nav a{
    color: #2c3e50;
    font-weight: 500;
}

.router-link-exact-active {
    color: whitesmoke;
    background: #00a9af;
    border-radius: .5rem;
}

</style>
