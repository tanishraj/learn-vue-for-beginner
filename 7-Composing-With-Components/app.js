Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
	el: '#app',
	data: {
		groceryList: [
			{id:0, text: 'Vegetables'},
			{id:2, text: 'Cheese'},
			{id:3, text: 'Whatever else humans are suppose to eat'},
		]
	}
})