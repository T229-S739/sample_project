import Vue from 'vue'; 
//vue-routerのインポート。これがないと画面遷移しない
import Router from 'vue-router'; 
import Home from './views/Home.vue'; 
import About from './views/About.vue'; 

//vue-routerを使うことを宣言
Vue.use(Router)

//vue-routerのエクスポート。
//Vue.use(Router); 各コンポーネントでjsファイルをインポートしなくてもthis.$routerで参照できる。
export default new Router({ 
  routes: [ 
    { 
      //URLのパス
      path: '/', 
      //<router-link>やrouter.pushで指定する名前
      name: 'home', 
      //呼び出されるコンポーネント
      component: Home,
    }, 
    { 
      path: '/about', 
      name: 'about', 
      component: About, 
    }, 
  ] 
});