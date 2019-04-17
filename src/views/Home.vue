<template>
        <div class="header-page">
            <s-navigation></s-navigation>
            <div class="hero-header">
                <div class="hero-text">
                    <img
                        width="100" 
                        src="/img/hospital.png">
                    <h1 class="display-4 font-weight-bold">WELCOME TO MODERN HOSPITAL</h1>
                    <v-btn 
                        class="mt-5"
                        color="light-blue" 
                        large 
                        round
                        dark>Sign up online</v-btn>
                </div>
            </div>
        </div>
</template>
<style scoped>
.header-page{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.hero-header{
    flex: 1;
    background-image: url('/img/hero-header.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
