import Vue from "vue"
import VueRouter from "vue-router"


import Floor from "./pages/Floor"
import Table from "./pages/Table"
import Chair from "./pages/Chair"
import Person from "./pages/Person"



Vue.use(VueRouter)
export const router = new VueRouter({
	routes : [
		{
			path : "/", 
			component : Floor,
			name:'/',
		},
		{
			path : "/floor/:floorId", 
			component : Table, 
			name:'table',
		},
		{
			path : "/floor/:floorId/table/:tableId", 
			component : Chair, 
			name:'chair',
		},
		{
			path : "/floor/:floorId/table/:tableId/chair/:chairId", 
			component : Person, 
			name: 'person' 
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
