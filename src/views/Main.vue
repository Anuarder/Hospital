<template>
    <v-content>
        <v-toolbar 
            flat 
            fixed
            color="transparent">
            <v-toolbar-title class="white--text headline">
                Hospital
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
        <router-view></router-view>
    </v-content>
</template>
<script>
export default {
    data(){
        return {
            sidebar: false,
            menu: [
                { icon: 'assignment_turned_in', name: 'Sing Up online', path: 'teacherResults' },
                { icon: 'description', name: 'About', path: 'teacherResults' },
                { icon: 'account_box', name: 'Personal', path: 'teacherResults' },
                { icon: 'mail', name: 'Contacts', path: 'teacherResults' },
                { icon: 'comment', name: 'Reviews', path: 'teacherResults' },
                { icon: 'question_answer', name: 'FAQ', path: 'teacherResults' },
            ]
        }
    }
}
</script>
<style scoped>
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
