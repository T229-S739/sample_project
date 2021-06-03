<template>
  <v-container>
    <p>ホーム</p>
    <router-link to="about" >link to About</router-link>
    <hr>
    <v-btn @click="selectFile">
      SELECT A FILE !!
    </v-btn>
    <v-btn to='about' @click="getDetail">
      解析開始
    </v-btn>
    <input style="display: none" 
      ref="input" type="file" 
      @change="uploadSelectedFile()">
  </v-container>
</template>

<script>
import { Auth, Storage } from 'aws-amplify';

export default {
  name: 'Home',
  data: () => ({
    loginid: "sample_project_user", 
    loginpw: "sample_project_user", 
  }), 
  mounted: async function() {
    this.login();
  }, 
  methods:{
    login() {
      console.log("login.");
      Auth.signIn(this.loginid, this.loginpw)
        .then((data) => {
          if(data.challengeName == "NEW_PASSWORD_REQUIRED"){
            console.log("new password required.");
            data.completeNewPasswordChallenge(this.loginpw, {}, 
              {
                onSuccess(result) {
                    console.log("onSuccess");
                    console.log(result);
                },
                onFailure(err) {
                    console.log("onFailure");
                    console.log(err);
                }
              }
            );
          }
          console.log("login successfully.");
        }).catch((err) => {
          console.log("login failed.");
          console.log(err);
        });
    },

    selectFile() {
      if(this.$refs.input != undefined){
        this.$refs.input.click();
      }
    },
    getDetail() {
    }, 

    uploadSelectedFile() {
      let file = this.$refs.input.files[0];
      if(file == undefined){
        return;
      }
      console.log(file);

      let dt = new Date();
      let dirName = this.getDirString(dt);
      let filePath = dirName + "/" + file.name;
      Storage.put(filePath, file).then(result => {
        console.log(result);
      }).catch(err => console.log(err));
    }, 

    getDirString(date){
      let random = date.getTime() + Math.floor(100000 * Math.random());
      random = Math.random() * random;
      random = Math.floor(random).toString(16);
      return "" + 
        ("00" + date.getUTCFullYear()).slice(-2) + 
        ("00" + (date.getMonth() + 1)).slice(-2) + 
        ("00" + date.getUTCDate()).slice(-2) + 
        ("00" + date.getUTCHours()).slice(-2) + 
        ("00" + date.getUTCMinutes()).slice(-2) + 
        ("00" + date.getUTCSeconds()).slice(-2) + 
        "-" + random;
    }, 
  }
}
</script>