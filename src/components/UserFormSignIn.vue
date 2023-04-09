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
        <button class="btn btn-success">Đăng Nhập</button>
        <button
            type="button"
            class="ml-2 btn btn-success"
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
            .string(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
                .required("Vui lòng nhập Email.")
                .email("Email không đúng định dạng."),
            pass: yup
                .string()
                .required("Vui lòng nhập Mật khẩu")
                .min(5, "Mật khẩu phải từ 5-20 ký tự.")
                .max(20, "Mật khẩu phải từ 5-20 ký tự."),
         

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