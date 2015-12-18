(function(){
	new Vue({
		
		el:"#app",
		
		data: {
			points: 200,
			firstname: "Ludovic",
			lastname:"Kuhn"
		},
		
		computed:{
			skill: function(){
				if(this.points <= 100){
					return "Beginner"
				}
				
				return "Advanced"
			},
			fullname: function(){
				return this.firstname + " " + this.lastname;
			}
		}
	})
})()