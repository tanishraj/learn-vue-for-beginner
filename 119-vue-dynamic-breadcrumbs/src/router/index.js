import Vue from 'vue'
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
		name: 'home',
		component: home,
		meta: {
			breadcrumb: [{
				name: 'home'
			}]
		}
	}, {
		path: '/about',
		name: 'about',
		component: about,
		meta: {
			breadcrumb: [{
				name: 'about'
			}]
		}
	}, {
		path: '/contact',
		name: 'contact',
		component: contact,
		meta: {
			breadcrumb: [{
				name: 'contact'
			}]
		}
	}, {
		path: '/course',
		name: 'course',
		component: course,
		meta: {
			breadcrumb: [{
				name: 'course'
			}]
		},
		children: [{
			path: '/english',
			name: 'english',
			component: english,
			meta: {
				breadcrumb: [{
					name: 'english'
				}]
			}
		}, {
			path: '/math',
			name: 'math',
			component: math,
			meta: {
				breadcrumb: [{
					name: 'math'
				}]
			}
		}, {
			path: '/hindi',
			name: 'hindi',
			component: hindi,
			meta: {
				breadcrumb: [{
					name: 'hindi'
				}]
			}
		}, ]
	}]
})
