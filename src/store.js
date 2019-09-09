import Vue from"vue"
import Vuex from "vuex"
import axios from "axios"
import {router} from "./router"

Vue.use(Vuex)

const store = new Vuex.Store({
	state : {  katEkle : ""},


	mutations : {addFloor(state,data){state.katEkle=data;}},
		
	
	actions : {setFloor(vuexContext,data){vuexContext.commit("addFloor",data)}},
	
        
	getters : {getEklenenKat(state){
                        return state.katEkle
                }
       
	}

})

export default store