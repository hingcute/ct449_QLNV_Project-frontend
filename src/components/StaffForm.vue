<template>
    <Form
        @submit="submitStaff"
        :validation-schema="staffFormSchema"
    >
    <div class="form-group ">
        <label for="name">Tên Tác Phẩm</label>
        <Field
            name="name"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.name"
    />
    <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="author">Tên Tác giả</label>
        <Field
            name="author"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.author"
    />
    <ErrorMessage name="author" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="address">Quê quán</label>
        <Field
            name="address"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.address"
    />
    <ErrorMessage name="address" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="year">Năm sinh</label>
        <Field
            name="year"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.year"
    />
    <ErrorMessage name="year" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="describe">Mô tả</label>
        <Field
            name="describe"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.describe"
    />
    <ErrorMessage name="describe" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="brief">Sơ lược tác phẩm</label>
        <Field
            name="brief"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.brief"
    />
    <ErrorMessage name="brief" class="error-feedback" />
    </div>
    <div class="form-group form-check">
        <input
            name="favorite"
            type="checkbox"
            class="form-check-input"
            v-model="staffLocal.favorite"
        />
    <label for="favorite" class="form-check-label">
        <strong>Tác phẩm yêu thích</strong>
    </label>
    </div>
    <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
        <button
            v-if="staffLocal._id"
            type="button"
            class="ml-2 btn btn-danger"
            @click="deleteStaff"
        >
            Xóa
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
    emits: ["submit:staff", "delete:staff"],
    props: {
        staff: { type: Object, required: true }
    },
    data() {
        const staffFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên tác phẩm phải có giá trị.")
                .min(5, "Tên tác phẩm phải ít nhất 2 ký tự.")
                .max(50, "Tên tác phẩm có nhiều nhất 50 ký tự."),
            author: yup
                .string()
                .required("Tên tác giả phải có giá trị.")
                .min(5, "Tên tác giả phải ít nhất 2 ký tự.")
                .max(50, "Tên tác giả có nhiều nhất 50 ký tự."),
            year: yup
                .string()
                .required("Năm sinh phải có giá trị.")
                .min(4, "Năm sinh phải ít nhất 2 ký tự.")
                .max(9, "Năm sinh có nhiều nhất 4 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            describe: yup
                .string()
                .required("Mô tả phải có giá trị.")
                .min(10, "Mô tả phải ít nhất 10 ký tự.")
                .max(1000, "Mổ tả có nhiều nhất 1000 ký tự."),
            brief: yup
                .string()
                .required("Sơ lược tác phẩm phải có giá trị.")
                .min(100, "Sơ lược tác phẩm phải ít nhất 10 ký tự.")
                .max(10000, "Sơ lược tác phẩm có nhiều nhất 10000 ký tự."),
        });
    return {
        // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
        // contactLocal để liên kết với các input trên form
        staffLocal: this.staff,
        staffFormSchema,
    };
},
    methods: {
        submitStaff() {
            this.$emit("submit:staff", this.staffLocal);
        },
        deleteStaff() {
            this.$emit("delete:staff", this.staffLocal.id);
        },
    },
};
    </script>
    
    <style scoped>
    @import "@/assets/form.css";
    </style>