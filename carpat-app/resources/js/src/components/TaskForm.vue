<template>
    <div class="d-xxl-flex justify-content-xxl-center">
        <div style="width: 100%;">
            <form class="d-grid">
                <h4 class="d-flex d-xxl-flex justify-content-center justify-content-xxl-center" style="font-weight: bold;">Assign Task to Clown 1</h4>
                <div class="form-group">
                    <label class="form-label" style="font-weight: bold;">Task Subject</label>
                    <input class="form-control" type="text" placeholder="Write the task subject.">
                </div>
                <div class="form-group">
                    <label class="form-label" style="font-weight: bold;">Task Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label" style="font-weight: bold;">Due Date</label>
                    <input class="form-control" type="date">
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
    name: "TaskForm"
}
</script>

<style>

</style>
