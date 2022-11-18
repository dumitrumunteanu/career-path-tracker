<template>
    <div class="auth">
        <form @submit.prevent="resetPassword" class="auth__form shadow" method="post">
            <div class="errors-container" v-if="Object.keys(validationErrors).length > 0">
                <ul class="errors-container__list">
                    <li class="errors-container__error" v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}</li>
                </ul>
            </div>

            <div class="input-field">
                <label for="email" class="input-field__label">Email:</label>
                <input class="input-field__input" type="text" v-model="email" name="email" id="email">
            </div>
            <div class="input-field">
                <label for="password" class="input-field__label">New password:</label>
                <input class="input-field__input" type="password" v-model="password.new" name="password" id="password">
            </div>
            <div class="input-field">
                <label for="password-confirm" class="input-field__label">Confirm password:</label>
                <input class="input-field__input" type="password" v-model="password.confirm" name="password-confirm" id="password-confirm">
            </div>

            <div>
                <button class="button" type="submit">Reset Password</button>
            </div>
        </form>
    </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
    name: "ResetPassword",
    computed: {
        token() {
            return this.$route.query.token;
        },
    },
    data() {
        return {
            email: this.$route.query.email,
            password: {
                new: "",
                confirm: "",
            },
            validationErrors: {},
            isLoading: false,
        };
    },
    methods: {
        resetPassword() {
            this.isLoading = true;

            AuthService.resetPassword({
                token: this.token,
                email: this.email,
                password: this.password.new,
                'password_confirmation': this.password.confirm,
            })
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
};
</script>
