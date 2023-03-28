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
            <strong>Tên tác phẩm:</strong>
            {{ staff.name }}
        </div>
        <div class="p-1">
            <strong>Tác giả:</strong>
            {{ staff.author }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ staff.address }}
        </div>
        <div class="p-1">
            <strong>Năm sinh:</strong>
            {{ staff.year }}
        </div>
        <div class="p-1">
            <strong>Mô tả:</strong>
            {{ staff.describe }}
        </div>
        <div class="p-1">
            <strong>Sơ lược tác phẩm:</strong>
            {{ staff.brief }}
        </div>
        <div class="p-1">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <i v-if="staff.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>