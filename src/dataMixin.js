window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import axios from "axios"

export const dataMixin = {
    methods : {
        getSittingPlanData (){
            return axios.get("/src/api/sittingPlanData.json");
        }
    }
    
    /*data(){
        return {
            componentsLists :[]
        }
        
    },
    */
   /*
    created() {
			this.getComponentConfig()
			.then(response => {
			
				this.componentsLists = response.data;
			})
		} */
    
}