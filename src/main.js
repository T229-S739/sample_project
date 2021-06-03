import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

//git連携テスト_v2


Vue.config.productionTip = false
Amplify.configure(aws_exports)

new Vue({
  vuetify,
  //ルーティングのために追加
  //vueインスタンス内にrouter.jsのインスタンスをセット
  router, 
  render: h => h(App)
}).$mount('#app')