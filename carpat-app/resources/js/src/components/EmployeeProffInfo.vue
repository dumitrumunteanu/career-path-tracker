<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
      <tr>
        <th colspan="2">Professional Information</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-users" /></div>
            <div><strong>Department</strong>
              <p> {{ user.department || "Not set" }} </p>
            </div>
          </div>
        </td>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-users" /></div>
            <div><strong>Team</strong>
              <p> {{ user.team  || "Not set" }} </p>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-users" /></div>
            <div><strong>Role</strong>
              <p> {{ user.role }} </p>
            </div>
          </div>
        </td>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-users" /></div>
            <div><strong>Reg. Date</strong>
              <p> {{ userRegistrationDate }} </p>
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
  name: "EmployeeProffInfo",
    computed: {
        user() {
            return this.$store.getters["auth/user"];
        },
        userRegistrationDate() {
            return (new Date(this.user.registrationDate)).toDateString();
        },
    },
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

.some_table_row {
  border-width: 2px;
  width: 50%;
}

p {
  font-size: 16px;
}

</style>
