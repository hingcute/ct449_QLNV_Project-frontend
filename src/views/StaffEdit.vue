<template>
    <div v-if="staff" class="page mt-3">
        <h4 class="p-2 bg-success text-light rounded-pill text-center">Hiệu chỉnh Tác phẩm</h4>
        <StaffForm :staff="staff" @submit:staff="updateStaff" @delete:staff="deleteStaff" />
        <div class="nav-item col">
                <router-link :to="{ name: 'StaffBook' }" class="navbar-brand">
                    <b>QUẢN LÝ TÁC PHẨM VĂN HỌC </b>
                    <i class="fas fa-address-card"></i>
                </router-link>
        </div>
        <p>{{ message }}</p>
    </div>
</template>
<script>
import StaffForm from "@/components/StaffForm.vue";
import StaffService from "@/services/staff.service";

export default {
    components: {
        StaffForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            staff: null,
            message: "",
        };
    },
    methods: {
        async getStaff(id) {
            try {
                this.staff = await StaffService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateStaff(data) {
            try {
                await StaffService.update(this.staff._id, data);
                this.message = "Tác phẩm được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        async deleteStaff() {
            if (confirm("Bạn muốn xóa Tác phẩm này?")) {
                try {
                    await StaffService.delete(this.staff._id);
                    this.$router.push({ name: "staffbook" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getStaff(this.id);
        this.message = "";
    },
};
</script>