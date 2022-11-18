<template>
    <div class="auth">
        <form class="auth__form shadow" @submit.prevent="login" method="post">
            <div class="errors-container" v-if="Object.keys(validationErrors).length > 0">
                <ul class="errors-container__list">
                    <li class="errors-container__error" v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                </ul>
            </div>
            <div class="input-field">
                <label class="input-field__label" for="email">Email:</label>
                <input class="input-field__input" type="text" v-model="authData.email" name="email" id="email">
            </div>
            <div class="input-field">
                <label class="input-field__label" for="password">Password:</label>
                <input class="input-field__input" type="password" v-model="authData.password" name="password" id="password">
            </div>
            <div>
                <button class="button" type="submit" :disabled="isLoading">
                    {{ isLoading ? "Please wait" : "Login" }}
                </button>
            </div>
            <div class="redirects">
                <router-link class="redirects__url" :to="{name: 'ForgotPassword'}">Forgot your password?</router-link>
                <router-link class="redirects__url" :to="{name: 'Register'}">Create an account?</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import AuthService from "@/services/AuthService";

export default {
    name: "Login",
    data() {
        return {
            authData: {
                email: "",
                password: "",
            },
            validationErrors: {},
            isLoading: false,
        }
    },
    methods: {
        ...mapActions({
            signIn: "auth/login",
        }),
        login() {
            this.isLoading = true;

            AuthService.login(this.authData)
                .then( async () => {
                    const user = await this.$store.dispatch("auth/loadUser");
                    if (user) {
                        this.signIn();
                    }
                })
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
