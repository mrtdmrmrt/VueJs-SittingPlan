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
		{path : "/:id/masa" , component : Masa },
		{path : "/:id/masa/:id/sandalye" , component : Sandalye },
		{path : "/:id/masa/:id/sandalye/:id/Kisi" , component : Kisi }
	],
	mode : "history"
})
