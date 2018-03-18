import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Top';
import GroupDetail from '@/components/groups/detail';
import GroupingResult from '@/components/groupingResult/top';

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
    {
      path: '/groups/:id/result',
      name: 'GroupingResult',
      component: GroupingResult,
    },
  ],
});
