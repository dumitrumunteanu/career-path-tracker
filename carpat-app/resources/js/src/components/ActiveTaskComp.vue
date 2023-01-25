<template>
    <tbody>
    <tr style="border-width: 2px;" v-for="task in tasks">
        <td>
            <div class="d-flex">
                <div style="padding-right: 10px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-file-text" style="font-size: 50px;">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <line x1="9" y1="9" x2="10" y2="9"></line>
                    <line x1="9" y1="13" x2="15" y2="13"></line>
                    <line x1="9" y1="17" x2="15" y2="17"></line>
                </svg></div>
                <div style="width: 100%;">
                    <strong>{{ task.subject }}</strong>
                    <input class="d-inline-flex float-end" type="checkbox" style="width: 15px;height: 15px;margin-top: 5px;">
                    <p style="font-size: 16px;">{{ task.description }}</p><span style="font-weight: bold;">Due:&nbsp;<span style="font-weight: initial;">{{ new Date(task.dueDate).toDateString() }}</span></span>
                </div>
            </div>
        </td>
    </tr>
    </tbody>
</template>

<script>
export default {
    name: "ActiveTaskComp",
    computed: {
        user() {
           return this.$store.getters["auth/user"];
        },
        tasks() {
            return this.$store.getters["tasks/list"];
        },
    },
    mounted() {
        this.$store.dispatch("tasks/loadTasks", this.user);
    },
}

</script>

<style scoped>

</style>
