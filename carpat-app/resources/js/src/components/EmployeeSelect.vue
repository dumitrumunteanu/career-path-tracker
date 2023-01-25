<template>
    <div style="padding-left: 15px;">
        <div class="employeeSelect">
            <label class="form-label d-xxl-flex justify-content-xxl-center" style="margin-top: 5px;">Select Employee:&nbsp;</label>
            <select autofocus="">
                <option value="38781" selected="">Employee 1</option>
                <option value="29190">Employee 2</option>
                <option value="28919">Employee 3</option>
            </select><button class="btn btn-primary" type="button">Select</button></div>
        <div style="display: grid;justify-content: center;justify-items: center;padding-top: 20px;">
            <p><strong>Selected Employee</strong><br></p>
            <img class="rounded-circle border profile_picture" src="">
            <p style="margin-bottom: initial;">Clown</p>
            <p>Clownovichi</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmployeeSelect"
}

</script>

<style scoped>
.employeeSelect {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

select {
    margin-top: 5px;
    margin-bottom: 15px;
    width: 100%;
    border-radius: 5px;
}

button {
    margin-top: 5px;
    margin-bottom: 5px;
    background: rgb(0,169,175);
    border-width: 0px;
}

img {
    height: 110px;
    width: 110px;
    margin-bottom: 5px;
}

</style>
