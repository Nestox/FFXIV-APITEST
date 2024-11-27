import mainPage from '@/views/mainPage.vue'
import itemPage from '@/views/itemPage.vue'
import RecipesPage from '@/views/recipesPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MapPage from '@/views/mapPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: mainPage,
    },
    {
      path: '/items',
      name: 'item list',
      component: itemPage
    },
    {
      path: '/maps',
      name: 'maps list',
      component: MapPage
    },
    {
      path: '/recipes',
      name: 'recipes list',
      component: RecipesPage
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
