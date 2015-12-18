(function(){
	
	new Vue({
		
		el: "#app",
		
		data: {
			count: 0
		},
				
		methods:{
			
			handleIt: function(){
				alert("handledet!")
			},
			
			formSubmit: function(){
				console.log("Butoon pressed!");
			}
		}
		
	})
	
})()