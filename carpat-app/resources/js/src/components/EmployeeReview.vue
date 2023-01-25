<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
      <tr>
        <th>Recent Review</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <div class="d-flex">
            <div class="profilePic"><img src=""></div>
            <div><strong>Recent Report Review.</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut nisl magna. Suspendisse iaculis, justo quis dignissim facilisis, mauris metus luctus tortor, vel eleifend velit sapien eget magna. Orci varius natoque penatibus et magnis dis parturient moturpis. Curabitur luctus fringilla lectus, sit amet eleifend eros consectetur at.</p>
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
  name: "EmployeeReview",
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

img {
  width: 75px;
  height: 75px;
}

.profilePic {
  padding-right: 10px;
}

</style>
