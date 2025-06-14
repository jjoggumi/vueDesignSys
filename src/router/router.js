// src/router/router.js

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/design',
    name: 'Design System',
    component: () => import('@/designSystem/page/DesignSystem.vue')
  },
  {
    path: '/foundation',
    name: 'Foundation',
    component: () => import('@/designSystem/page/foundation/Foundation.vue'),
    children: [
      {
        path: 'color',
        name: 'Color',
        component: () => import('@/designSystem/page/foundation/Color.vue'),
      },
      {
        path: 'typography',
        name: 'Typography',
        component: () => import('@/designSystem/page/foundation/Typography.vue'),
      },
      {
        path: 'icon',
        name: 'Icon',
        component: () => import('@/designSystem/page/foundation/Icon.vue'),
      }
    ]
  },

  // 주석 처리된 부분도 필요하면 주석 풀어서 쓰면 돼!
  /*
  {
    path: '/form',
    name: 'Forms',
    component: () => import('@/designSystem/page/form/Forms.vue'),
    children: [
      {
        path: 'checks',
        name: 'Check & Radio & Switch',
        component: () => import('@/designSystem/page/form/Checks.vue'),
      },
      {
        path: 'selectbox',
        name: 'Selectbox',
        component: () => import('@/designSystem/page/form/Selectbox.vue'),
      }
    ]
  },  
  */
  {
    path: '/components',
    name: 'Components',
    component: () => import('@/designSystem/page/components/Components.vue'),
    children: [
      {
        path: 'button',
        name: 'Button',
        component: () => import('@/designSystem/page/components/Button.vue'),
      },
      {
        path: 'modal',
        name: 'Modal',
        component: () => import('@/designSystem/page/components/Modal.vue'),
      },
      {
        path: 'tab',
        name: 'Tab',
        component: () => import('@/designSystem/page/components/Tab.vue'),
      },
      {
        path: 'notification',
        name: 'Notification',
        component: () => import('@/designSystem/page/components/Notification.vue'),
      },
      {
        path: 'tooltip',
        name: 'Tooltip',
        component: () => import('@/designSystem/page/components/Tooltip.vue'),
      },
      {
        path: 'kebab',
        name: 'Kebab',
        component: () => import('@/designSystem/page/components/Kebab.vue'),
      }
    ]
  },
  {
    path: '/paragraph',
    name: 'Paragraph',
    component: () => import('@/designSystem/page/paragraph/Paragraph.vue'),
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/designSystem/page/paragraph/Table.vue'),
      },
      {
        path: 'avatar',
        name: 'Avatar',
        component: () => import('@/designSystem/page/paragraph/Avatar.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
