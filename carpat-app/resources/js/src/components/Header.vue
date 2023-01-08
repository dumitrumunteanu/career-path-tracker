<template>
    <header>

      <div class="container d-inline-flex d-xl-flex justify-content-xl-start align-items-xl-center header_container">

        <div class="image_container">
          <img alt="Profile picture" class="rounded-circle border profile_picture" src="@/assets/images/venti.png" >
        </div>

        <section class="d-inline-flex">
          <div class="d-grid profile_details_left">
            <p class="profile_fullname"> {{ user.email }} </p>
            <span class="employee_id">Employee ID:
              <span class="employee_title"> employeeID </span>
            </span>
          </div>

          <hr>

          <div class="d-grid profile_details_middle">
            <span class="employee_id">Role:
              <span class="employee_title"> role </span>
            </span>
            <span class="profile_rating_text"> <font-awesome-icon icon="fa-solid fa-star" class="fas fa-star profile_rating_star"/>
              <span> 4.6  Rating</span>
            </span>
          </div>
        </section>

        <div class="profile_button_group">
          <div class="btn-group" role="group">
                <button class="btn btn-primary" type="button" style="margin-right: 26px;background: #00a9af;border-radius: 10px;border-style: none;">
                    <i class="fas fa-cog" style="margin-left: 10px;margin-right: 10px;margin-top: 5px;margin-bottom: 5px;"></i>
                    <span style="margin-right: 10px;">Settings</span>
                </button>
                <button @click="logout" class="btn btn-primary" type="button" style="background: #00a9af;border-radius: 10px;border-style: none;">
                    <i class="fas fa-sign-out-alt" style="margin-right: 10px;margin-left: 10px;margin-top: 5px;margin-bottom: 5px;"></i>
                    <span style="margin-right: 10px;">Log Out</span>
                </button>
            </div>
        </div>
      </div>
    </header>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "Header",
    computed: {
        user() {
            return this.$store.getters["auth/user"];
        },
    },
    methods: {
        ...mapActions({
            logout: "auth/logout",
        }),
    },
}
</script>

<style scoped>
hr {
  color: rgb(0,0,0);
  background: #000000;
  width: 2px;
}
.header_container {
  border-style: none;
  border-radius: 15px 15px 0px 0px;
  padding-top: 10px;
  background: #ffffff;
  padding-bottom: 10px;
}

.image_container {
  padding-left: 30px;
  padding-right: 30px;
}

.profile_picture {
  width: 110px;
  object-fit: cover;
}

.profile_fullname {
  font-weight: 700;
  margin-bottom: 16px;
}

.profile_details_left {
  padding-right: 20px;
}

.profile_details_middle {
  padding-left: 20px;
}

.employee_id {
  font-weight: 700;
}

.employee_title {
  padding-left: 7px;
  font-weight: initial;
}

.profile_rating_text {
  margin-top: 16px;
  font-weight: 700;
}

.fas.fa-star.profile_rating_star {
  color: #f2b900;
  font-size: 18px;
  padding-right: 5px;
}

.profile_button_group {
  margin-right: 0px;
  margin-left: auto;
}

.fas.fa-star.profile_rating_star {
  color: #f2b900;
  font-size: 18px;
  padding-right: 5px;
}

</style>