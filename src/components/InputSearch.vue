<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
};
</script>
<template>
    <div class="p-3 mb-2 bg-info border border-dark rounded-lg text-white mt-3">
        <div class="input-group ">
            <input type="text" class="form-control" placeholder="Nhập tên nhân viên cần tìm" :value="modelValue"
                @input="updateModelValue" @keyup.enter="submit" />
            <div class="input-group-append bg-light">
                <button class="btn btn-outline-warning text-dark" type="button" @click="submit">
                    <i class="fas "></i>
                    Tìm kiếm
                </button>
            </div>
        </div>
    </div>
</template>