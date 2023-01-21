<template>
    <div class="container" style="width: 60%;">
        <div style="background: #ffffff;border-radius: 15px;padding: 12px;">
            <h2 class="text-center mb-4">Settings</h2>
            <div style="margin-left: 46px;">
                <div>
                    <h4>Profile Picture</h4>
                    <div class="d-flex" style="margin-left: 16px;margin-top: 12px;">
                        <img class="rounded-circle border profile_picture" src="">
                        <div class="d-flex d-xxl-flex flex-fill align-self-center align-items-xxl-center profile_button_group">
                            <div class="btn-group" role="group">
                                <button class="btn btn-primary" type="button" style="background: rgba(184,184,184,0.35);color: rgb(0,0,0);border-style: none;margin-right: 16px;padding-right: 30px;padding-left: 30px;border-radius: 6px;">Delete</button>
                                <button class="btn btn-primary d-block w-100" type="button" style="background: #00a9af;border-style: none;padding-right: 30px;padding-left: 30px;border-radius: 6px;">Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-grid justify-content-between" style="margin-top: 22px;">
                    <h4>Password</h4>
                    <div style="margin-left: 16px;">
                        <div class="form-group">
                            <label class="form-label d-grid" style="font-weight: bold;margin-top: 12px;">Current Password</label>
                            <input type="password" />
                        </div>
                        <div class="form-group">
                            <label class="form-label d-grid" style="font-weight: bold;margin-top: 12px;">New Password</label>
                            <input type="password" />
                        </div>
                        <div class="form-group">
                            <label class="form-label d-grid" style="font-weight: bold;margin-top: 12px;">Confirm Password</label>
                            <input type="password" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-end justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end justify-content-xxl-end profile_button_group" style="margin-bottom: 18px;margin-right: 18px;">
                <div @click="$router.push('/')" class="btn-group" role="group"><a class="btn btn-primary" role="button" style="background: rgba(184,184,184,0.35);color: rgb(0,0,0);border-style: none;margin-right: 16px;padding-right: 26px;padding-left: 26px;border-radius: 6px;">Cancel</a>
                    <button class="btn btn-primary d-block w-100" type="submit" style="background: #00a9af;border-style: none;padding-right: 26px;padding-left: 26px;border-radius: 6px;">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";


export default {
    name: "Settings",
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
    components: {

    }
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 60px;
}

.profile_content {
    background-color: #ffffff;
}

.profile_picture {
    width: 110px;
    height: 110px;
    margin-right: 15px;
    object-fit: cover;
}

input {
    width: 150%;
}
</style>
