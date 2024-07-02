import Home from '@/pages/Home.vue';
import Introduction from '@/components/introduction/Introduction.vue';
import ComponentFeatures from '@/components/componentFeatures/componentFeatures.vue';

export const routes = [
  { path: '/', component: Home, title: 'Home', hidden: true },
  { path: '/introduction', component: Introduction, title: 'Introduction' },
  {
    path: '/componentFeatures',
    component: ComponentFeatures,
    title: 'Component Features'
  }
];
