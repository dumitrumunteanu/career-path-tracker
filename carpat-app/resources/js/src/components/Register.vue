<template>
    <div class="auth">
        <form class="auth__form shadow" @submit.prevent="registerUser" method="post">
            <div class="errors-container" v-if="Object.keys(validationErrors).length > 0">
                <ul class="errors-container__list">
                    <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                </ul>
            </div>
            <div class="input-field">
                <label class="input-field__label" for="name">Name</label>
                <input class="input-field__input" type="text" name="name" v-model="name" id="name" placeholder="Enter name">
            </div>
            <div class="input-field">
                <label class="input-field__label" for="email">Email</label>
                <input class="input-field__input" type="text" name="email" v-model="email" id="email" placeholder="Enter Email">
            </div>
            <div class="input-field">
                <label class="input-field__label" for="password">Password</label>
                <input class="input-field__input" type="password" name="password" v-model="password" id="password" placeholder="Enter Password">
            </div>
            <div class="input-field">
                <label class="input-field__label" for="password-confirmation">Confirm Password</label>
                <input class="input-field__input" type="password" name="password-confirmation" v-model="password_confirmation" id="password-confirmation" placeholder="Enter Password">
            </div>
            <div>
                <button class="button" type="submit" :disabled="isLoading">
                    {{ isLoading ? "Please wait" : "Register" }}
                </button>
            </div>
            <div class="redirects">
                <router-link class="redirects__url" :to="{ name: 'ForgotPassword' }">Forgot your password?</router-link>
                <router-link class="redirects__url" :to="{ name: 'Login' }">Have an account?</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import AuthService from "@/services/AuthService";

export default {
    name: "Register",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            validationErrors: {},
            isLoading: false,
        }
    },
    methods: {
        ...mapActions({
            signIn: "auth/login",
        }),
        registerUser() {
            this.validationErrors = {};
            const payload = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            };

            AuthService.registerUser(payload)
                .then(() => this.signIn())
                .catch(({ response }) => {
                    if (response.status === 422) {
                        this.validationErrors = response.data.errors;
                    } else {
                        this.validationErrors = {};
                    }
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
    }
}
</script>
