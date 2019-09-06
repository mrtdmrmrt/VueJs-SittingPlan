import Vue from"vue"
import Vuex from "vuex"
import axios from "axios"
import {router} from "./router"
Vue.use(Vuex)

const store = new Vuex.Store({
	state : {
        dataList : [],
        Tiklanan : null
	},
	mutations : {
        setData(state,data){
            state.dataList = data
            console.log(state.dataList)
        },
        setId(state,id){
            state.Tiklanan = id
        },
        addData(state,data){
            state.dataList = data;
            console.log("dataList eklendi")
            console.log("addData ya geldi")
            console.log(state.dataList)
        },
		
	},
	actions : {
        getComponentConfig (vuexContext){
            console.log("istek alındı")
            return axios.get("/src/api/components.json" )
            .then(response => {
                //console.log("setData ya gitti")
                vuexContext.commit("addData",response.data)

			})
        },
        setId(vuexContext,id){
            vuexContext.commit("setId",id)
        }
		
	},
	getters : {
        getData(state){
            console.log("gettersa geldi")
            return state.dataList
           
        },
        getTiklananId(state){
            return state.Tiklanan
        }
		
	}

})

export default store