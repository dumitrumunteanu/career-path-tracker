<template>
    <div class="container" style="width: 60%;">
        <div style="background: #ffffff;border-radius: 15px;padding: 12px;">
            <h2 class="text-center mb-4">Review Task</h2>
            <div style="margin-left: 46px; margin-right: 46px;">
                <form class="d-grid">
                    <div class="form-group" style="margin-bottom: 7px;">
                        <label class="form-label">Review Title</label>
                        <input class="form-control" type="text" placeholder="Write Review Subject."/>
                    </div>
                    <div class="form-group" style="margin-bottom: 7px;">
                        <label class="form-label">Review Comments</label>
                        <textarea class="form-control" rows="10" placeholder="Write Review."></textarea>
                    </div>
                    <div>
                        <p class="text-start">Review Score</p>
                        <div class="d-flex justify-content-between" style="width: 50%;">
                            <input type="radio" id="rating1" name="rating" value="1">
                            <label for="rating1">1</label><br>
                            <input id="rating2" type="radio" name="rating" value="2">
                            <label for="rating2">2</label><br>
                            <input id="rating3" type="radio" name="rating" value="2">
                            <label for="rating3">3</label><br>
                            <input id="rating4" type="radio" name="rating" value="2">
                            <label for="rating4">4</label><br>
                            <input id="rating5" type="radio" name="rating" value="2">
                            <label for="rating5">5</label><br>
                        </div>
                    </div>
                </form>
            </div>
            <div class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-end justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end justify-content-xxl-end profile_button_group" style="margin-bottom: 18px;margin-right: 18px;">
                <div @click="$router.push('/manager')" class="btn-group" role="group"><a class="btn btn-primary" role="button" style="background: rgba(184,184,184,0.35);color: rgb(0,0,0);border-style: none;margin-right: 16px;padding-right: 26px;padding-left: 26px;border-radius: 6px;">Discard</a>
                    <button class="btn btn-primary d-block w-100" type="submit" style="background: #00a9af;border-style: none;padding-right: 26px;padding-left: 26px;border-radius: 6px;">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReviewForm",
}
</script>

<style scoped>
.form-control {
    background-color: #F1F0F0;
}

</style>
