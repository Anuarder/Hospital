<template>
    <div class="reviews-page">
        <s-navigation></s-navigation>
        <div class="reviews">
            <div class="bg">
                <h1 class="display-2">REVIEWS</h1>
            </div>
            <div class="reviews-content container">
                <div class="form">
                    <h1 class="headline pa-2">
                        Leave feedback
                    </h1>
                    <v-form>
                        <v-text-field
                            outline
                            label="Email"
                            v-model="email">
                        </v-text-field>
                        <v-textarea
                            outline
                            label="Feedback"
                            v-model="message">
                        </v-textarea>
                        <v-btn color="primary" @click="leaveFeedback">
                            Leave
                        </v-btn>
                    </v-form>
                </div>
                <div class="feedback-list mt-5">
                    <h1 class="headline mb-3">REVIEWS</h1>
                    <div
                        v-for="item in feedback" 
                        :key="item.id"
                        class="feedback-card mt-4 elevation-3">
                            <h3 class="headline pa-2">{{item.email}}</h3>
                            <p class="pa-2">{{item.message}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    data(){
        return{
            email: '',
            message: '',
            feedback: []
        }
    },
    created(){
        this.getFeedback();
    },
    methods: {
        leaveFeedback(){
            axios.post('/api/leaveFeedback.php', {
                email: this.email,
                message: this.message
            }).then(res => {
                console.log(res.data);
                this.getFeedback();
                swal('Thanks for your feedback!', '', 'success');
            }).catch(err => {
                console.log(err);
            });
        },
        getFeedback(){
            axios.post('/api/getFeedback.php')
                .then(res => {
                    let data = res.data;
                    this.feedback = data.reverse();
                }).catch(err => {
                    console.log(err);
                });
        }
    }
}
</script>

<style scoped>
.reviews-page{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.reviews{
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
.feedback-card{
    border: 1px solid #000;
    padding: 5px;
    font-size: 1.3rem;
    font-weight: 500;
    width: 100%;
}
</style>
