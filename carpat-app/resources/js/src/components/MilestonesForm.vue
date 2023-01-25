<template>
    <div class="d-xxl-flex justify-content-xxl-center">
        <div style="width: 100%;">
            <form class="d-grid">
                <h4 class="d-flex d-xxl-flex justify-content-center justify-content-xxl-center" style="font-weight: bold;">Assign Milestone to Employee</h4>
                <div class="form-group">
                    <label class="form-label" style="font-weight: bold;">Milestone Name</label>
                    <input class="form-control" type="text" placeholder="Write milestone name.">
                </div>
                <div class="form-group">
                    <label class="form-label" style="font-weight: bold;">Milestone Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder="Write milestone description."></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label" style="font-weight: bold;width: 40%;">Number of Tasks</label>
                    <input class="form-control d-xxl-flex justify-content-xxl-start" type="number" min="1" step="1" max="100" placeholder="Write the number of tasks required for completion." required="" style="width: 100%;">
                </div>
            </form>
            <div class="d-xxl-flex justify-content-xxl-end">
                <button class="btn btn-primary" type="button" style="background: rgb(0,169,175);border-width: 0px;margin: 15px 0px;">Assign</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MilestonesForm"
}
</script>

<style scoped>

</style>
