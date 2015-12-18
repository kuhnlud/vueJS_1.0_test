(function(){
	
	Vue.component('my-counter',{
		
		template: "#counter-template",
		
		props:['title'],
		
		data: function(){
			return {
				count: 0
			}
		}
	})
	
	new Vue({
		el:"#app"	
	})
})()