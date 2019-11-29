import VueRouter from 'vue-router'
import * as chunk from './chunk'
// @ts-ignore
import RouterRoot from './RouterRoot.vue'
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: RouterRoot,
      children: [
        {
          path: '/page1',
          component: chunk.Page1,
          children: [
            {
              path: '/page1/child1',
              component: chunk.Page1Child1,
            },
            {
              path: '/page1/child2',
              component: chunk.Page1Child2,
            },
          ],
        },
        {
          path: '/page2',
          component: chunk.Page2,
          children: [
            {
              path: '/page2/child1',
              component: chunk.Page2Child1,
              children: [
                {
                  path: '/page2/child1/food',
                  component: chunk.Page2Child1Food,
                },
              ],
            },
            {
              path: '/page2/child2',
              component: chunk.Page2Child2,
            },
          ],
        },
      ],
    },
  ],
})
