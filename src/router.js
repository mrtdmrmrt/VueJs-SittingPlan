import Vue from "vue"
import VueRouter from "vue-router"


import Kat from "./pages/Kat"
import Masa from "./pages/Masa"
import Sandalye from "./pages/Sandalye"
import Kisi from "./pages/Kisi"



Vue.use(VueRouter)
export const router = new VueRouter({
	routes : [
		{
			path : "/", 
			component : Kat,
			name:'/',
		},
		{
			path : "/kat/:katId", 
			component : Masa, 
			name:'masa',
		},
		{
			path : "/kat/:katId/masa/:masaId", 
			component : Sandalye, 
			name:'sandalye',
		},
		{
			path : "/kat/:katId/masa/:masaId/sandalye/:sandalyeId", 
			component : Kisi, 
			name: 'kisi' 
		}
	],
	mode : "history"
})

/*
/ //katlar
/kat/1 //masalar
/kat/1/masa/2 //sandalyeler
/kat/1/masa/3/sandalye/4 //kişileri
*/


/*
	routes : [
		{
			path : "/", 
			component : Kat,
			name:'/',
			children:[
				{
					path : "kat/:katId", 
					component : Masa, 
					name:'masa',
					children:[
						{
							path : "/masa/:masaId", 
							component : Sandalye, 
							name:'sandalye',
							children:[
								{
									path : "/sandalye/:sandalyeId", 
									component : Kisi, 
									name: 'kisi' 
								}
							]
						},
					]
				}
			]

		},
		
		
		
	],
*/