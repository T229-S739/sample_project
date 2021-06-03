<template>
  <!--vuetifyを使用する際はv-app内にすべてのコンポートネントを記載-->
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title @click="onHome">HOME</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="onAbout">ABOUT</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Sample_Project_TANABE
      </v-toolbar-title> 
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <v-card-title>
        <v-btn fab small class="mx-2" color="white" href="https://twitter.com/w2or3w" target="_blank">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn fab small class="mx-2" color="white" href="https://www.facebook.com/w2or3w" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn fab small class="mx-2" color="white" href="https://www.instagram.com/w2or3w" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <p>TANBE</p>
      </v-card-text>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: false,
  }),
  methods:{
    onHome() {
      if(this.$route.path != '/'){
        this.$router.push({ path: '/' });
      }
    }, 

    onAbout() {
      if(this.$route.path != '/about'){
        this.$router.push({ path: 'about' });
      }
    }, 
  }
};
</script>