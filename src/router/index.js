import Vue from 'vue';
import VueRouter from 'vue-router';
import Show from '@/views/Show.vue';
import Enter from '@/views/Enter.vue';

Vue.use(VueRouter);

const routes = {
  web: [
    {
      path: '/show',
      name: 'Show',
      component: Show,
    },
    {
      path: '/gen',
      name: 'Gen',
      component: () => import('@/views/Gen.vue'),
      meta: {
        title: '生成计时码|Online·辩之竹-辩论计时器',
      },
    },
    {
      path: '/',
      name: 'enter',
      component: Enter,
      meta: {
        title: '进入计时器|Online·辩之竹-辩论计时器',
      },
    }],
  electron: [
    {
      path: '/show',
      name: 'Show',
      component: Show,
    },
    {
      path: '/',
      name: 'enter',
      component: Enter,
      meta: {
        title: '进入计时器|Online·辩之竹-辩论计时器',
      },
    }],
};

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes: routes[process.env.IS_ELECTRON ? 'electron' : 'web'],
});
router.beforeEach((to, from, next) => {
  next();
});

export default router;
