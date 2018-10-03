import Vue from 'vue';
import Router from 'vue-router';
import Card from '@/components/Card';
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
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/new-game',
      name: 'NewGame',
      component: NewGame
    }
  ]
});
