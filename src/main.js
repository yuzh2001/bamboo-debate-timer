/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import VueTour from 'vue-tour';
import qs from 'qs';
import vcolorpicker from 'vcolorpicker';
import MetaInfo from 'vue-meta-info';
import AV from 'leancloud-storage';
import VueI18n from 'vue-i18n';

import Cloudbase from '@cloudbase/vue-provider';
import zh from '@/assets/lang/zh.json';
// eslint-disable-next-line camelcase
import zh_TW from '@/assets/lang/zh_TW.json';
import en from '@/assets/lang/en.json';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import { genDb } from './libs/db-const';

require('vue-tour/dist/vue-tour.css');

Vue.config.productionTip = false;
Vue.prototype.$qs = qs;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (window._hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', `/#${to.fullPath}`]);
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

AV.init({
  appId: process.env.VUE_APP_LEANCLOUD_ID,
  appKey: process.env.VUE_APP_LEANCLOUD_KEY,
  serverURL: `https://${process.env.VUE_APP_LEANCLOUD_HOST}`,
});

Vue.use(VueI18n);
Vue.use(vcolorpicker);
Vue.use(VueTour, router);
Vue.use(MetaInfo);
Vue.use(Cloudbase, {
  env: 'bamboo-club-e0985c',
});
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh,
    zh_TW,
    en,
  },
});

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit('updateDb', genDb(this.$i18n));
    // console.log(this.$store.state.debate_db);
  },
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
}).$mount('#app');
