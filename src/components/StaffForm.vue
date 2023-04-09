<template>
    <Form
        @submit="submitStaff"
        :validation-schema="staffFormSchema"
    >
    <div class="form-group ">
        <label for="name">Họ tên nhân viên</label>
        <Field
            name="name"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.name"
    />
    <ErrorMessage name="name" class="error-feedback" />
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
        <label for="address">Địa chỉ hiện tại</label>
        <Field
            name="address"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.address"
    />
    <ErrorMessage name="address" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="phone">Số điện thoại</label>
        <Field
          name="phone"
          type="tel"
          class="form-control border-success"
          v-model="staffLocal.phone"
        />
        <ErrorMessage name="phone" class="error-feedback" />
      </div>
   
    <div class="form-group">
        <label for="describe">Vị trí công việc</label>
        <Field
            name="describe"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.describe"
    />
    <ErrorMessage name="describe" class="error-feedback" />
    </div>
    <div class="form-group">
        <label for="brief">Sơ lược kinh nghiệm</label>
        <Field
            name="brief"
            type="text"
            class="form-control border-success"
            v-model="staffLocal.brief"
    />
    <ErrorMessage name="brief" class="error-feedback" />
    </div>
    
    <div class="form-group">
        <button class="btn btn-success">Lưu thông tin</button>
        <button
            v-if="staffLocal._id"
            type="button"
            class="ml-2 btn btn-danger"
            @click="deleteStaff"
        >
            Xóa thông tin
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
                .required("Họ tên nhân viên không được để trống.")
                .min(5, "Họ tên nhân viên phải có từ 5-50 ký tự.")
                .max(50, "Họ tên nhân viên phải có từ 5-50 ký tự."),
           
                year: yup
                .string()
                .required("Vui lòng nhập Năm sinh.")
                .min(4, "Năm sinh không đúng định dạng.")
                .max(8, "Năm sinh không đúng định dạng."),
            address: yup
                    .string()
                    .required("Địa chỉ không được để trống.")
                    .max(100, "Địa chỉ tối đa 100 ký tự."),

            phone: yup
                    .string()
                    .required("Số điện thoại không được để trống.")
                    .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                    ),
            describe: yup
                .string()
                .required("Vị trí công việc không được để trống.")
                .min(5, "Vị trí công việc phải có từ 5-50 ký tự.")
                .max(50, "Vị trí công việc phải có từ 5-50 ký tự."),
            brief: yup
                .string()
                .required("Sơ lược kinh nghiệm phải có giá trị.")
                .min(30, "Sơ lược kinh nghiệm phải từ 30-1000 ký tự.")
                .max(1000, "Sơ lược kinh nghiệm phải từ 30-1000 ký tự."),
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