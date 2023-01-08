<template>
    <div class="table-responsive" style="width: 47%;">
        <table class="table">
            <thead>
            <tr style="border-width: 2px;">
                <th>Completed Tasks</th>
            </tr>
            </thead>
            <tbody>
                <CompletedTaskComp />
            </tbody>
        </table>
    </div>

</template>

<script>
import CompletedTaskComp from "./CompletedTaskComp.vue";

export default {
    name: "CompletedTasks",
    components: {
        CompletedTaskComp,
    }
}

</script>

<style scoped>

</style>
