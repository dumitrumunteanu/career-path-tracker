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
              <p> departmentName </p>
            </div>
          </div>
        </td>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-users" /></div>
            <div><strong>Team</strong>
              <p> teamName </p>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-users" /></div>
            <div><strong>Role</strong>
              <p> role </p>
            </div>
          </div>
        </td>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-users" /></div>
            <div><strong>Reg. Date</strong>
              <p> regDate </p>
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
