<template>
    <v-content>
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
    </v-content>
</template>
<style scoped>
.hero-header{
    height: 100vh;
    background-image: url('/img/hero-header.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
}
.hero-text{
}
</style>
