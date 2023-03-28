<template>
    <nav class="navbar navbar-expand navbar-dark bg-success mt-3 container rounded-top">
        <!-- <a href="/" class="navbar-brand">QUẢN LÝ TÁC PHẨM VĂN HỌC</a> -->
        <div class="mr-auto navbar-nav row">
            <div class="nav-item col">
                <router-link :to="{ name: 'SignIn' }" class="navbar-brand">
                    TRANG CHỦ
                    <i class="fas fa-address-book"></i>
                </router-link>
            </div>
            <div class="nav-item col">
                <router-link :to="{ name: '' }" class="navbar-brand">
                    QUẢN LÝ TÁC PHẨM VĂN HỌC
                    <i class="fas fa-address-card"></i>
                </router-link>
            </div>
            <div class="nav-item col">
                <router-link :to="{ name: 'SignIn' }" class="navbar-brand">
                    ĐĂNG XUẤT
                    <i class="bi bi-box-arrow-up"></i>
                </router-link>
            </div>
        </div>
    </nav>
</template>