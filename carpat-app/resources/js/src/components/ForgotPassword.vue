<template>
    <div class="auth">
        <form @submit.prevent="sendResetLink" class="auth__form shadow" method="post">
            <div class="errors-container" v-if="Object.keys(validationErrors).length > 0">
                <ul class="errors-container__list">
                    <li class="errors-container__error" v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                </ul>
            </div>
            <div class="input-field">
                <label for="email" class="input-field__label">Email:</label>
                <input type="text" class="input-field__input" v-model="email" name="email" id="email">
            </div>
            <div>
                <button class="button" type="submit">
                    {{ isLoading ? "Please wait" : "Send password reset link" }}
                </button>
            </div>
            <div class="redirects">
                <router-link class="redirects__url" :to="{name: 'Login'}">Have an account?</router-link>
                <router-link class="redirects__url" :to="{name: 'Register'}">Create an account?</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
    name: "ForgotPassword",
    data() {
        return {
            isLoading: false,
            validationErrors: {},
            email: "",
        };
    },
    methods: {
        async sendResetLink() {
            this.isLoading = true;
            this.validationErrors = {};

            AuthService.forgotPassword({ email: this.email })
                .then(() => {
                    this.$router.push({name: "Login"});
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
    },
}
</script>
