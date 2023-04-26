<template>
    <div v-if="staff" class="page mt-3">
        <h4 class="p-2 bg-success text-light rounded-pill text-center">Thêm Thông tin Nhân viên</h4>
        <StaffForm
            :staff="staff"
            @submit:staff="addStaff"
        />
        <div class="nav-item col">
                <router-link :to="{ name: 'StaffBook' }" class="navbar-brand">
                    <b>QUẢN LÝ THÔNG TIN NHÂN VIÊN </b>
                    <i class="fas fa-address-card"></i>
                </router-link>
        </div>
        <p class="alert alert-success">{{ message }}</p>
    </div>
</template>
<script>
import StaffForm from "@/components/StaffForm.vue";
import StaffService from "@/services/staff.service";

export default {
    components: {
        StaffForm,
    },
    data() {
        return {
            staff: {},
            message: "",
        };
    },
    methods: {
        async addStaff(data) {
            try {
                await StaffService.create(this.staff);
                this.message = "Thông tin đã được thêm thành công.";
            } catch (error) {
                console.log(error);
                console.log(data);
            }
        },
    },
};
</script>