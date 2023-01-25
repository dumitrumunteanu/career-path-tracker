<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Task Until New Milestone</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="d-flex">
                        <div style="padding-right: 10px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chart-line" style="font-size: 50px;">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="4" y1="19" x2="20" y2="19"></line>
                            <polyline points="4 15 8 9 12 11 16 6 20 10"></polyline>
                        </svg></div>
                        <div style="width: 100%;"><strong>Milestone Name</strong>
                            <div class="progress" style="margin-bottom: 10px;margin-top: 10px;">
                                <div class="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"><span class="visually-hidden">50%</span></div>
                            </div>
                            <strong style="padding-bottom: 10px;">6 tasks till next career milestone.</strong>
                            <a class="d-inline-flex" href="#" style="padding-bottom: 10px;margin-top: 10px;">Learn More.</a>
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
    name: "ProfileMilestone",
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
