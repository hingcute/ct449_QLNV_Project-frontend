<template>
    <Form class="mt-3"
        @submit="submitUser"
        :validation-schema="userFormSchema"
    >
    <div class="form-group">
        <label for="email">Email đăng nhập</label>
        <Field
            name="email"
            type="text"
            class="form-control border-success"
            v-model="userLocal.email"
    />
    <ErrorMessage name="email" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="pass">Mật khẩu</label>  
        <Field
            name="pass"
            type="password"
            class="form-control border-success"
            v-model="userLocal.pass"
    />
    <ErrorMessage name="pass" class="error-feedback" />
    </div>
    <div class="form-group text-center">
        <button class="btn btn-primary">Đăng Nhập</button>
        <button
            type="button"
            class="ml-2 btn btn-danger"
            @click="SignUpForm"
        >
            Đăng Ký
        </button>
    </div>
</Form>
</template>
    <script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";

    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
    emits: ["submit:user"],
    props: {
        user: { type: Object, required: true }
    },
    data() {
        const userFormSchema = yup.object().shape({
            email: yup
                .string()
                .required("Email đăng nhập phải có giá trị.")
                .min(5, "Email đăng nhập phải ít nhất 2 ký tự.")
                .max(50, "Email đăng nhập có nhiều nhất 50 ký tự."),
            pass: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(5, "Mật khẩu phải ít nhất 5 ký tự.")
                .max(20, "Mật khẩu có nhiều nhất 20 ký tự."),
        });
    return {
        // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
        // userLocal để liên kết với các input trên form
        userLocal: this.user,
        userFormSchema,
    };
},
    methods: {
        submitUser() {
            console.log(this.userLocal);
            this.$emit("submit:user", this.userLocal);
        },
        SignUpForm() {
            this.$router.push({name: "user.add"});
        },
    },
};
    </script>
    
    <style scoped>
    @import "@/assets/form.css";
    </style>