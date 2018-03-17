import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Top';
import GroupDetail from '@/components/groups/detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/groups/:id',
      name: 'GroupDetail',
      component: GroupDetail,
    },
  ],
});
