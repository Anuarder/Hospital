<template>
    <div class="contact-page">
        <s-navigation></s-navigation>
        <div class="contact">
            <div class="form">
                <div class="title text-xs-center">
                    <h1 class="display-1  pa-4">Contact us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempore quia nisi a et perspiciatis eos provident voluptate sit 
                    </p>
                    <div class="address text-xs-left">
                        <p>
                            <v-icon>home</v-icon> 1 Dell Parkway, Nashville, TN 37217, USA
                        </p>
                        <p>
                            <v-icon>local_phone</v-icon> +1 615-344-9551
                        </p>
                    </div>
                </div>
                <v-form class="mt-5">
                    <v-text-field
                        outline
                        label="Your name"
                        v-model="name">
                    </v-text-field>
                    <v-text-field
                        outline
                        label="Email"
                        v-model="email">
                    </v-text-field>
                    <v-textarea
                        outline
                        label="Your Message"
                        v-model="message">
                    </v-textarea>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="sendMessage"> 
                        Send message
                    </v-btn>
                </v-form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data(){
        return{
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendMessage(){
            axios.post('/api/contact.php', {
                name: this.name,
                email: this.email,
                message: this.message
            }).then(res => {
                console.log(res);
                swal('Thanks for your message!', '', 'success');
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>
.contact-page{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.contact{
    flex: 1;
    background-image: url('/img/Contact.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #000;
    font-weight: 900;
    display: flex;  
    justify-content: center;
    align-items: center;
}
.form{
    max-width: 80%;
    background: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 2px 18px 2px rgba(0,0,0,0.53);
}
</style>
