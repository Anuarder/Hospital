<template>
    <div class="navigation">
        <v-toolbar
            class="navigation-toolbar">
            <v-toolbar-title class="white--text headline">
                <router-link to="/">
                    Hospital
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon 
                color="white" 
                flat
                @click="sidebar = !sidebar">
            </v-toolbar-side-icon>
        </v-toolbar>
        <v-navigation-drawer 
            v-model="sidebar"
            app
            temporary
            right>
            <div class="sidebar">
                <div class="sidebar-title">
                   <v-list>
                       <v-list-tile avatar>
                           <v-list-tile-avatar>
                                <v-icon color="red">
                                    local_hospital
                                </v-icon>
                            </v-list-tile-avatar>
                           <v-list-tile-content class="headline">
                               Modern Hospital
                           </v-list-tile-content>
                       </v-list-tile>
                   </v-list>
                </div>
                <div class="menu">
                    <v-list>
                        <v-list-tile 
                            :to="item.path"
                            avatar 
                            v-for="item in menu" 
                            :key="item.path">
                            <v-list-tile-avatar>
                                <v-icon color="primary">
                                    {{item.icon}}
                                </v-icon>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title class="title">
                                    {{item.name}}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </div>
            </div>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: 's-navigation',
    data(){
        return {
            sidebar: false,
            menu: [
                { icon: 'assignment_turned_in', name: 'Sing Up online', path: 'singUp' },
                { icon: 'description', name: 'About', path: 'about' },
                { icon: 'account_box', name: 'Personal', path: 'personal' },
                { icon: 'mail', name: 'Contacts', path: 'contacts' },
                { icon: 'comment', name: 'Reviews', path: 'reviews' },
                { icon: 'question_answer', name: 'FAQ', path: 'faq' },
            ]
        }
    }
}
</script>
<style scoped>
.navigation-toolbar{
    background-color: #40a2cf;
}
a{
    color: #fff;
    text-decoration: none;
}
.sidebar{
    padding: 1rem;
}
.sidebar-title h1{
    display: flex;
}
.sidebar-title i{
    padding-right: .4rem;
}
.menu a{
    text-decoration: none;
}
.menu{
    margin-top: 1rem;
    font-size: 2rem !important;
}
.menu-item{
    margin-top: 1rem;
}
</style>
