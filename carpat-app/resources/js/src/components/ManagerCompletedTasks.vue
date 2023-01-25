<template>
    <div class="d-xxl-flex justify-content-xxl-center">
        <div class="table-responsive">
            <table class="table">
                <thead>
                <tr style="border-width: 2px;">
                    <th>Completed Tasks of Clown 1</th>
                </tr>
                </thead>
                <TaskToReview />
            </table>
        </div>
    </div>
</template>

<script>
import TaskToReview from "./TaskToReview.vue";

export default {
    name: "ManagerCompletedTask",
    components: {
        TaskToReview
    }
}
</script>

<style>

</style>
