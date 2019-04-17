<template>
    <div class="personal-page">
        <s-navigation></s-navigation>
        <div class="personal">
            <div class="bg">
                <h1 class="display-2">Personal</h1>
            </div>
            <div class="personal-content container">
                <div class="personal-grid">
                    <div
                        v-for="item in personal" 
                        :key="item.id"
                        class="personal-card mt-4 elevation-3">
                        <v-img
                            :src="item.avatar"
                            aspect-ratio="1.5"
                            class="ma-0 pa-0">
                        </v-img>
                        <div class="pa-2">
                            <h3 class="headline">{{item.name}}</h3>
                            <p class="mt-2">{{item.position}}</p>
                            <v-btn 
                                @click="showPersonal(item)"
                                class="text-none ma-0" 
                                color="primary">
                                about
                            </v-btn>
                        </div>
                    </div>
                </div>
                <v-dialog max-width="500" v-model="dialog">
                    <v-card>
                        <v-img
                            :src="currentPersonal.avatar"
                            aspect-ratio="1.5"
                            class="ma-0 pa-0">
                        </v-img>
                        <v-card-title
                            class="headline grey lighten-2"
                            primary-title>
                            {{currentPersonal.name}} | {{currentPersonal.position}}
                        </v-card-title>
                        <v-card-text>
                            {{currentPersonal.about}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="closePersonal">
                                close
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            personal: [],
            dialog: false,
            currentPersonal: ''
        }
    },
    created(){
        this.getPersonal();
    },
    methods: {
        getPersonal(){
            axios.post('/api/personal.php')
            .then(res => {
                this.personal = res.data;
            }).catch(err => {
                console.log(err);
            });
        },
        showPersonal(personal){
            this.currentPersonal = personal;
            this.dialog = true;
        },
        closePersonal(){
            this.currentPersonal = '';
            this.dialog = false;
        }
    }
}
</script>

<style scoped>
.personal-page{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.personal{
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
.personal-card{
    border: 1px solid #000;
    padding: 5px;
    font-size: 1.3rem;
    font-weight: 500;
    width: 100%;
}
.personal-grid{
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
    height: 100%;
}
</style>
