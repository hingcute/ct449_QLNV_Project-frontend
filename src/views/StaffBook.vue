<template>
    <div class=" row ">
        <div class="col-md-10 mx-auto">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6 mx-auto text-center">
            <h4 class="text-danger">
                Danh Sách Nhân Viên
                <font-awesome-icon icon="fa-solid fa-books-medical" />
            </h4>
            <StaffList v-if="filteredStaffsCount > 0" :staffs="filteredStaffs"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có nhân viên nào.</p>

            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-success" @click="goToAddStaff">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>
                <button class="btn btn-sm btn-danger" @click="removeAllStaffs">
                    <i class="	fas fa-bell"></i> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeStaff">
                <h4 class="text-danger">
                Chi Tiết Thông Tin Nhân Viên
                <i class="fas fa-address-card"></i>
                </h4>
                <StaffCard :staff="activeStaff" />
                <router-link
                    :to="{
                        name: 'staff.edit',
                        params: { id: activeStaff._id },
                    }"
                >
                    <span class="mt-2  badge badge-secondary">
                        Chỉnh Sửa <i class="fas fa-edit"></i></span
                    >
                </router-link>
                
            </div>
        </div>
    </div>
</template>
<script>
import StaffCard from "@/components/StaffCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import StaffList from "@/components/StaffList.vue";
import StaffService from "@/services/staff.service";
export default {
    components: {
        StaffCard,
        InputSearch,
        StaffList,
    },
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    data() {
        return {
            staffs: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
        staffStrings() {
            return this.staffs.map((staff) => {
                const { name, year, address, phone, describe, brief } = staff;
                return [name, year, address, phone, describe, brief].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredStaffs() {
            if (!this.searchText) return this.staffs;
            return this.staffs.filter((_staff, index) =>
                this.staffStrings[index].includes(this.searchText)
            );
        },
        activeStaff() {
            if (this.activeIndex < 0) return null;
            return this.filteredStaffs[this.activeIndex];
        },
        filteredStaffsCount() {
            return this.filteredStaffs.length;
        },
    },
    methods: {
        async retrieveStaffs() {
            try {
                this.staffs = await StaffService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveStaffs();
            this.activeIndex = -1;
        },
        async removeAllStaffs() {
            if (confirm("Bạn muốn xóa tất cả Các Thông tin Nhân viên?")) {
                try {
                    await StaffService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddStaff() {
            this.$router.push({ name: "staff.add" });

        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style scoped>
.page {
    text-align: left;
    max-width: 100%;
}
</style>