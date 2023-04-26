<template>
    <!-- v-if="user" -->
        <div  class="page mt-4">
            <h4 class="text-center text-danger">ĐĂNG NHẬP</h4>
            <UserFormSignIn
                :user="user"
                @submit:user="SignInUser"
            />
            <p class="alert alert-success">{{ message }}</p>
        </div>
    </template>
    <script>
    import UserService from "@/services/user.service";
    import UserFormSignIn from "../components/UserFormSignIn.vue";
    export default {
        components: {
        UserFormSignIn,
    },
        data() {
            return {
                user: {},
                message: "",
            };
        },
        methods: {
            async SignInUser(data) {
                console.log(data);
                try {
                    this.user = await UserService.get(this.user.email);
                    if(data.email == this.user.email && data.pass == this.user.pass)
                        {
                            this.$router.push({ name: "StaffBook" });
                        }
                    this.message = "Email hoặc mật khẩu không đúng.";
                } catch (error) {
                    console.log(error);
                }
            },
        },
    };
    </script>