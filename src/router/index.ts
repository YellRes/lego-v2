export default [
  {
    path: '/index',
    component: () => import('@/page/homeland/index.vue')
  },
  {
    path: '/editPage',
    component: () => import('@/page/editor/index.vue')
  }
]
