<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Next Career Step</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="d-flex">
                        <div style="padding-right: 10px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-medal" style="font-size: 50px;">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 4v3m-4 -3v6m8 -6v6"></path>
                            <path d="M12 18.5l-3 1.5l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5z"></path>
                        </svg></div>
                        <div style="width: 100%;"><strong>Some career name?</strong>
                            <div class="progress" style="margin-bottom: 10px;margin-top: 10px;">
                                <div class="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"><span class="visually-hidden">50%</span></div>
                            </div>
                            <strong style="padding-bottom: 10px;">4 milestones till next career step.</strong>
                            <a class="d-inline-flex" href="#" style="padding-bottom: 10px;margin-bottom: 0px;margin-top: 10px;">Learn More.</a>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: "CareerStep",
}
</script>

<style scoped>
.table-responsive {
    width: 30%;
}

thead {
    border-width: 2px;
}

tr {
    border-width: 2px;
}

p {
    font-size: 16px;
}

</style>
