(function(){
	
	new Vue({
		el: "#app",
		
		data: {
				plans: [ 
					{type: "Enterprise", price:100},
					{type: "Professionnal", price:75},
					{type: "Startup", price:25},
					{type: "Free", price:0}
				],
				active : {}
				
		},
		
		components: {
			plan:{
				template: "#plan-template",
				
				props:['plan', 'active'],
				
				computed: {
					isUpgrade: function(){

						 if(typeof this.active.price === "undefined") return "Enroll"
						 
						 if(this.plan.price > this.active.price){
							 return "Upgrade"
						 }
						 
						 return "Downgrade"
						 
					}
				},
								
				methods: {
					setActivePlan: function(){
						this.active = this.plan;
					}
				}
			}
		}
	})
	
})()