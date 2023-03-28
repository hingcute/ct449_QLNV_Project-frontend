<template>
    <nav class="navbar navbar-expand navbar-dark bg-info mt-3 container rounded-top">
        <!-- <a href="/" class="navbar-brand">QUẢN LÝ TÁC PHẨM VĂN HỌC</a> -->
        <div class="mr-auto navbar-nav row">
            <div class="nav-item col">
                <router-link :to="{ name: '' }" class="navbar-brand">
                    TRANG CHỦ
                    <i class="fas fa-sun"></i>
                </router-link>
            </div>
            <div class="nav-item col">
                <router-link :to="{ name: '' }" class="navbar-brand">
                    QUẢN LÝ THÔNG TIN NHÂN VIÊN
                    <i class="fas fa-address-card"></i>
                </router-link>
            </div>
            <div class="nav-item col">
                <router-link :to="{ name: '' }" class="navbar-brand">
                    CHẤM CÔNG
                    <i class="fas fa-check-square"></i>
                </router-link>
            </div>
            <div class="nav-item col">
                <router-link :to="{ name: 'SignIn' }" class="navbar-brand">
                    ĐĂNG XUẤT
                    <i class="fas fa-times-circle"></i>
                </router-link>
            </div>
        </div>
    </nav>
</template>