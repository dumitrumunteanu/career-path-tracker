<template>
    <div class="table-responsive" style="width: 47%;">
        <table class="table">
            <thead>
            <tr style="border-width: 2px;">
                <th>Active Tasks</th>
            </tr>
            </thead>
            <ActiveTaskComp />
        </table>
    </div>

</template>

<script>
import ActiveTaskComp from "./ActiveTaskComp.vue";

export default {
    name: "ActiveTasks",
    components: {
        ActiveTaskComp,
    }
}

</script>

<style scoped>

</style>
