<template>
    <div class="table-responsive" style="width: 47%;">
        <table class="table">
            <thead>
            <tr style="border-width: 2px;">
                <th>Monthly Reviews</th>
            </tr>
            </thead>
            <ReviewComp />
        </table>
    </div>
</template>

<script>
import ReviewComp from "./ReviewComp.vue";

export default {
    name: "MonthlyReview",
    components: {
        ReviewComp,
    }
}

</script>

<style>

</style>
