<template>
    <div class="about-page">
        <s-navigation></s-navigation>
        <div class="about pa-5">
            <div class="about-text">
                <v-layout row wrap>
                    <h1 class="headline mb-2">
                        We are Super Duper hospital ever
                    </h1>
                    <v-flex xs12>
                        <div class="image pa-3">
                            <img src="/img/About.jpg">
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <div class="text text-xs-left pa-2">
                            
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Facilis, molestiae? Optio vero voluptas fugiat cum officiis, 
                                explicabo quod suscipit provident assumenda tenetur mollitia, enim laborum!</p>
                            <div class="hidden-xs-only">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odit minus sit 
                                    culpa doloremque nam, repudiandae illum voluptatem commodi earum harum aut accusamus 
                                    saepe natus, quam hic perspiciatis expedita iste molestias. 
                                    Tempora, facere nostrum architecto nesciunt consequuntur asperiores odit fugiat omnis. 
                                    Quisquam nisi fugiat expedita.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odit minus sit 
                                    culpa doloremque nam, repudiandae illum voluptatem commodi earum harum aut accusamus 
                                    saepe natus, quam hic perspiciatis expedita iste molestias. 
                                    Tempora, facere nostrum architecto nesciunt consequuntur asperiores odit fugiat omnis. 
                                    Quisquam nisi fugiat expedita.</p>
                            </div>
                        </div>
                    </v-flex>
                    
                </v-layout>
                
                
            </div>
        </div>
    </div>
</template>
<style scoped>
img{
    max-width: 100%;
}
.about-page{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.about{
    flex: 1;
    background-image: url('/img/AboutBG.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.about-text{
    color: #000;
    max-width: 80%;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 2px 18px 2px rgba(0,0,0,0.53);
}
.image{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
