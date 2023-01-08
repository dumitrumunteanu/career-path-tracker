<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
      <tr>
        <th colspan="2">Personal Information</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-cake-candles" /></div>
            <div><strong>Date of Birth</strong>
              <p> birthDay </p>
            </div>
          </div>
        </td>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-user" /></div>
            <div><strong>Gender</strong>
              <p> gender </p>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-envelope" /></div>
            <div><strong>Email</strong>
              <p class="text-break"> email </p>
            </div>
          </div>
        </td>
        <td class="some_table_row">
          <div class="d-flex">
            <div style="padding-right: 5px;"><font-awesome-icon icon="fa-solid fa-house" /></div>
            <div><strong>Home Address</strong>
              <p> address </p>
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
  name: "EmployeePersonalInfo",
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