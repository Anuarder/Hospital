<template>
    <div class="faq-page">
        <s-navigation></s-navigation>
        <div class="faq">
            <div class="bg">
                <h1 class="display-2">FAQ</h1>
            </div>
            <div class="faq-content">
                <v-expansion-panel>
                    <v-expansion-panel-content
                        v-for="item in faq"
                        :key="item.id">
                    <template v-slot:header>
                        <div class="headline">{{item.question}} ?</div>
                    </template>
                    <v-card>
                        <v-card-text class="title">
                            {{item.answer}}
                        </v-card-text>
                    </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            faq: []
        }
    },
    created(){
        this.getFAQ();
    },
    methods: {
        getFAQ(){
            axios.post('/api/faq.php')
            .then(res => {
                this.faq = res.data;
                console.log(this.faq);
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>
.faq-page{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.faq{
    flex: 1;
    color: #000;
    font-weight: 900;
}
.bg{
    max-width: 100%;
    height: 400px;
    background-image: url('/img/Contact.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
</style>
