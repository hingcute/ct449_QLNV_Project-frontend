<script>
export default {
    props: {
        staffs: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<template>
    <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(staff, index) in staffs"
            :key="staff._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
        >
            {{ staff.name }}
        </li>
    </ul>
</template>
