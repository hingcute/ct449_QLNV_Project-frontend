<template>
    <div v-if="user" class="page mt-4">
        <h4 class="text-center text-danger">TẠO TÀI KHOẢN</h4>
        <UserFormSignUp
            :user="user"
            @submit:user="addUser"
        />
        <p class="alert alert-success">{{ message }}</p>
    </div>
</template>
<script>
import UserService from "@/services/user.service";
import UserFormSignUp from "../components/UserFormSignUp.vue";

export default {
    components: {
    UserFormSignUp
},
    data() {
        return {
            user: {},
            message: "",
        };
    },
    methods: {
        async addUser(data) {
            try {
                await UserService.createUser(this.user);
                this.message = "Tài khoản đã được tạo thành công.";
            } catch (error) {
                console.log(error);
                console.log(data);
            }
        },
    },
};
</script>