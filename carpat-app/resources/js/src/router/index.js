import { createWebHistory, createRouter } from 'vue-router';
import store from '@/store';

import ForgotPassword from "@/components/ForgotPassword.vue";
import ResetPassword from "@/components/ResetPassword.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Profile from "@/components/Profile.vue";

const routes = [
    {
        name: "Login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: "Login",
        }
    },
    {
        name: "Register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        name: "ForgotPassword",
        path: "/password/forgot",
        component: ForgotPassword,
        meta: {
            middleware: "guest",
            title: "Forgot Password",
        },
    },
    {
        name: "ResetPassword",
        path: "/password/reset",
        component: ResetPassword,
        meta: {
            middleware: "guest",
            title: "Forgot Password",
        },
    },
    {
        path: "/",
        component: () => import('@/views/Profile.vue'),
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "ProfileInfo",
                path: '/',
                component: Profile,
                meta: {
                    title: `Profile Info`
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    const isAuthenticated = store.getters["auth/authenticated"];
    const requiresAuthentication = (to.meta.middleware === "auth");
    const loginQuery = { name: "Login", query: { redirect: to.fullPath } };

    if (requiresAuthentication && !isAuthenticated) {
        store.dispatch("auth/login").then(() => {
            if (!store.getters["auth/authenticated"]) {
                next(loginQuery);
            } else {
                next();
            }
        });
    } else if (!requiresAuthentication && isAuthenticated) {
        router.push({ name: "ProfileInfo" });
    } else {
        next();
    }
});

export default router
