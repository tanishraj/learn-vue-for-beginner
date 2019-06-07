import Vue from 'vue';
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import contact from '@/components/contact'
import course from '@/components/course/course'
import english from '@/components/course/courseList/english'
import hindi from '@/components/course/courseList/hindi'
import math from '@/components/course/courseList/math'
Vue.use(Router)
export default new Router({
	routes: [{
		path: '/',
		component: home,
		meta: {
			breadcrumb: 'Home'
		}
	}, {
		path: '/about',
		component: about,
		meta: {
			breadcrumb: 'About'
		}
	}, {
		path: '/contact',
		component: contact,
		meta: {
			breadcrumb: 'Contact'
		}
	}, {
		path: '/course',
		component: course,
		meta: {
			breadcrumb: 'Course'
		},
		children: [{
			path: 'english',
			component: english,
			meta: {
				breadcrumb: 'English'
			}
		}, {
			path: 'math',
			component: math,
			meta: {
				breadcrumb: 'Math'
			}
		}, {
			path: 'hindi',
			component: hindi,
			meta: {
				breadcrumb: 'Hindi'
			}
		}, ]
	}, {
		path: '*',
		redirect: '/'
	}]
})
