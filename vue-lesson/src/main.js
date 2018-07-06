import Vue from 'vue'
import App from './App.vue'
import Announcement from "./Announcement.vue"
import Article from "./Article.vue"


// 注册组件   vue.component必须放在new Vue之前
Vue.component("app-announcement", Announcement)
Vue.component("app-article", Article)
new Vue({
  el: '#app',
  render: h => h(App)
})


