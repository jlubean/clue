import Vue from 'vue';
import Router from 'vue-router';
import Accusation from '@/components/Accusation';
import Card from '@/components/Card';
import History from '@/components/History';
import NewGame from '@/components/NewGame';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Card',
      component: Card
    },
    {
      path: '/new-game',
      name: 'NewGame',
      component: NewGame
    },
    {
      path: '/accusation',
      name: 'Accusation',
      component: Accusation
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
});
