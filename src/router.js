import Vue from "vue"
import VueRouter from "vue-router"


import Kat from "./pages/Kat"
import Masa from "./pages/Masa"
import Sandalye from "./pages/Sandalye"
import Kisi from "./pages/Kisi"



Vue.use(VueRouter)
export const router = new VueRouter({
	routes : [
		{path : "/" , component : Kat },
		{path : "/masa" , component : Masa },
		{path : "/sandalye" , component : Sandalye },
		{path : "/Kisi" , component : Kisi }
	],
	mode : "history"
})
