import { createWebHistory, createRouter } from "vue-router";
import StaffBook from "@/views/StaffBook.vue";
import SignIn from "@/views/signin.vue";
const routes = [
    {
        path: "/",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/manager",
        name: "StaffBook",
        component: StaffBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/Staffs/:id",
        name: "staff.edit",
        component: () => import("@/views/StaffEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/Staffs/add",
        name: "staff.add",
        component: () => import("@/views/StaffAdd.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/users/add",
        name: "user.add",
        component: () => import("@/views/signup.vue"),
        props: true
    },
    // {
    //     path: "/",
    //     name: "user.signIn",
    //     component: () => import("@/views/signin.vue"),
    // },   
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
    