<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<br>
				
				<component :is="selectedComponent">
					
				</component> 
				<div class="bullet">
					<button @click="selectedComponent='appImage1'" class="btn btn-primary">1</button>
					<button @click="selectedComponent='appImage2'" class="btn btn-primary">2</button>
					<button @click="selectedComponent='appImage3'" class="btn btn-primary">3</button>
					<button @click="selectedComponent='appImage4'" class="btn btn-primary">4</button>
				</div>
				
				<!--
				<div v-for="componentList in componentsLists">
					<component :is="componentList.type">

					</component> 
				</div>
			-->


			</div>
		</div>
	</div>
</template>

<script>

	import image1 from './components/image1.vue';
	import image2 from './components/image2.vue';
	import image3 from './components/image3.vue';
	import image4 from './components/image4.vue';



	export default {
		data : function (){
			return {
				selectedComponent : "appImage1",
				//componentsLists:[]
			}
		},
		components : {
			appImage1 : image1,
			appImage2 : image2,
			appImage3 : image3,
			appImage4 : image4
		}
		/*
		methods : {
			getComponentConfig (){
				return axios.get("/src/api/components.json");
			}
		},
		created() {
			this.getComponentConfig()
			.then(response => {
			
				this.componentsLists = response.data;
			})
		}
		*/
	}
</script>
<style>
.col-md-6 .bullet {
	width: 100%;
	margin-top:10px;
	text-align: center;
}
#prev{
  left: 0px;
  top: 150px;
}
#next{
  left: 526px;
  top: 150px;
}
</style>

