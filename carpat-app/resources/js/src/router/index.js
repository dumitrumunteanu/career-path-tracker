import { createWebHistory, createRouter } from 'vue-router';
import store from '@/store';

import ForgotPassword from "@/components/ForgotPassword.vue";
import ResetPassword from "@/components/ResetPassword.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Profile from "@/components/Profile.vue";
import Tasks from "@/components/Tasks.vue";
import Reviews from "@/components/Reviews.vue";
import ManagerProfile from "@/components/ManagerProfile.vue";
import ManagerTasks from "@/components/ManagerTasks.vue";
import ManagerReviews from "@/components/ManagerReviews.vue";
import ManagerMilestones from "@/components/ManagerMilestones.vue";
import Settings from "@/components/Settings.vue";

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
    },
    {
        path: "/tasks",
        component: () => import('@/views/Tasks.vue'),
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "Tasks",
                path: '/tasks',
                component: Tasks,
                meta: {
                    title: `Tasks Info`
                }
            }
        ]
    },
    {
        path: "/reviews",
        component: () => import('@/views/Reviews.vue'),
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "Reviews",
                path: '/reviews',
                component: Reviews,
                meta: {
                    title: `Reviews Info`
                }
            }
        ]
    },
    {
        path: "/manager",
        component: () => import('@/views/ManagerProfile.vue'),
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "ManagerProfile",
                path: '/manager',
                component: ManagerProfile,
                meta: {
                    title: `Manager Info`
                }
            }
        ]
    },
    {
        path: "/managerTasks",
        component: () => import('@/views/ManagerTasks.vue'),
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "ManagerTasks",
                path: '/managerTasks',
                component: ManagerTasks,
                meta: {
                    title: `Manager Tasks Info`
                }
            }
        ]
    },
    {
        path: "/managerReviews",
        component: () => import('@/views/ManagerReviews.vue'),
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "ManagerReviews",
                path: '/managerReviews',
                component: ManagerReviews,
                meta: {
                    title: `Manager Reviews Info`
                }
            }
        ]
    },
    {
        path: "/managerMilestones",
        component: () => import('@/views/ManagerMilestones.vue'),
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "ManagerMilestones",
                path: '/managerMilestones',
                component: ManagerMilestones,
                meta: {
                    title: `Manager Milestones Info`
                }
            }
        ]
    },
    {
        path: "/settings",
        component: () => import('@/views/Settings.vue'),
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "Settings",
                path: '/settings',
                component: Settings,
                meta: {
                    title: `Settings`
                }
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/*router.beforeEach((to, from, next) => {
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
});*/

export default router
