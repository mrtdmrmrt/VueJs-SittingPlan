import Vue from"vue"
import Vuex from "vuex"
import axios from "axios"
import {router} from "./router"

Vue.use(Vuex)

const store = new Vuex.Store({
	state : {  addFloor : ""},


	mutations : {addFloor(state,data){state.addFloor=data;}},
		
	
	actions : {setFloor(vuexContext,data){vuexContext.commit("addFloor",data)}},
	
        
	getters : {getAddedFloor(state){
                        return state.addFloor
                }
       
	}

})

export default store