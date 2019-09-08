import Vue from"vue"
import Vuex from "vuex"
import axios from "axios"
import {router} from "./router"
Vue.use(Vuex)

const store = new Vuex.Store({
	state : {
        dataList : [],
        katEkle : "",
        KatTiklanan : null,
        MasaTiklanan : null,
        SandalyeTiklanan : null
      
	},
	mutations : {
        setData(state,data){
            state.dataList = data
            console.log(state.dataList)
        },
        setId(state,id){
            state.KatTiklanan = id   
            
        },
        setMasaId(state,id){
            state.MasaTiklanan = id
          
        },
        setSandalyeId(state,id){
            state.SandalyeTiklanan = id
          
        },
        addData(state,data){
            state.dataList = data;
            console.log("dataList eklendi")
            console.log("addData ya geldi")
            console.log(state.dataList)
        },
        addFloor(state,data){
            state.katEkle=data;
        }
        

		
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
        },
        setMasaId(vuexContext,id){
            vuexContext.commit("setMasaId",id)
        },
        setSandalyeId(vuexContext,id){
            vuexContext.commit("setSandalyeId",id)
        },
        setFloor(vuexContext,data){
            vuexContext.commit("addFloor",data)
        }
        

		
	},
	getters : {
        getData(state){
            console.log("gettersa geldi")
            return state.dataList
           
        },
        getKatTiklananId(state){
            return state.KatTiklanan
        },
        getMasaTiklananId(state){
            return state.MasaTiklanan
        },
        getSandalyeTiklananId(state){
            return state.SandalyeTiklanan
        },
        getEklenenKat(state){
            return state.katEkle
        }
       
        
		
		
	}

})

export default store