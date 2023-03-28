<template>
    <Form class="mt-3"
        @submit="submitUser"
        :validation-schema="userFormSchema"
    >
    <div class="form-group">
        <label for="name">Tên đăng nhập</label>
        <Field
            name="name"
            type="text"
            class="form-control border-success"
            v-model="userLocal.name"
    />
    <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <Field
            name="email"
            type="text"
            class="form-control border-success"
            v-model="userLocal.email"
    />
    <ErrorMessage name="email" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="address">Địa chỉ</label>
        <Field
            name="address"
            type="text"
            class="form-control border-success"
            v-model="userLocal.address"
    />
    <ErrorMessage name="address" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="year">Năm sinh</label>
        <Field
            name="year"
            type="text"
            class="form-control border-success"
            v-model="userLocal.year"
    />
    <ErrorMessage name="year" class="error-feedback" />
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
        <button class="btn btn-primary">Đăng Ký</button>
        <button
            type="button"
            class="ml-2 btn btn-danger"
            @click="SignInForm"
        >
            Đăng Nhập
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
            name: yup
                .string()
                .required("Tên đăng ký phải có giá trị.")
                .min(5, "Tên đăng ký phải ít nhất 2 ký tự.")
                .max(50, "Tên đăng ký có nhiều nhất 50 ký tự."),
            email: yup
                .string(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
                .email("E-mail không đúng."),
            year: yup
                .string()
                .required("Năm sinh phải có giá trị.")
                .min(4, "Năm sinh phải ít nhất 4 ký tự.")
                .max(8, "Tên tác giả có nhiều nhất 8 ký tự."),
            address: yup.string().required("Địa chỉ phải có giá trị.").max(100, "Địa chỉ tối đa 100 ký tự."),
            pass: yup
                .string()
                .required("Mô tả phải có giá trị.")
                .min(5, "Tên tác giả phải ít nhất 5 ký tự.")
                .max(20, "Tên tác giả có nhiều nhất 20 ký tự."),
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
            this.$emit("submit:user", this.userLocal);
        },
        SignInForm() {
            this.$router.push({name: "SignIn"});
        },
    },
};
    </script>
    
    <style scoped>
    @import "@/assets/form.css";
    </style>