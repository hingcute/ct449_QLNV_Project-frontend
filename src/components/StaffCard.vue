<script>
export default {
    props: {
        staff: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Họ tên nhân viên:</strong>
            {{ staff.name }}
        </div>
        <div class="p-1">
            <strong>Năm sinh:</strong>
            {{ staff.year }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ staff.address }}
        </div>
        <div class="p-1">
            <strong>Số điện thoại:</strong>
            {{ staff.phone }}
        </div>
        <div class="p-1">
            <strong>Mô tả:</strong>
            {{ staff.describe }}
        </div>
        <div class="p-1">
            <strong>Sơ lược kinh ngiệm:</strong>
            {{ staff.brief }}
        </div>
       
    </div>
</template>