import Vue from"vue"
import Vuex from "vuex"
import axios from "axios"
import {router} from "./router"

Vue.use(Vuex)

const store = new Vuex.Store({
	state : {  
		addedFloor : "",
		addedTable : "",
		addedChair : "",
		addedPeople : "",
	},


	mutations : {
		AddedFloor(state,data){
			state.addedFloor=data;
		},
		AddedTable(state,data){
			state.addedTable=data;
		},
		AddedChair(state,data){
			state.addedChair=data;
		},
		AddedPeople(state,data){
			state.addedPeople=data;
		}
	},
		
	
	actions : {
		setFloor(vuexContext,data){
			vuexContext.commit("AddedFloor",data)
		},
		setTable(vuexContext,data){
			vuexContext.commit("AddedTable",data)
		},
		setChair(vuexContext,data){
			vuexContext.commit("AddedChair",data)
		},
		setPeople(vuexContext,data){
			vuexContext.commit("AddedPeople",data)
		}
	},
	
        
	getters : {
		getAddedFloor(state){
            return state.addedFloor
		},
		getAddedTable(state){
            return state.addedTable
		},
		getAddedChair(state){
            return state.addedChair
		},
		getAddedPeople(state){
            return state.addedPeople
		},
		
       
	}

})

export default store