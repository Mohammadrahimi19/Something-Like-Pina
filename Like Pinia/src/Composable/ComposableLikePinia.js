// export const useage ={
//     Name:ref(''),

//     SetName : function (Value){
//         this.Name.value = Value
//         console.log(this.Name.value);

//     },
//     GetName: function() {
//         return this.Name;
//     },

//     Clear : function (){
//         this.Name.value = ''
//     },    
// } 


// composable approach
import {  ref } from 'vue'

let state = ref('')
export function useGlobalStates() {
    // setter
    
    const getState = () => {
        console.log(state.value);
        return state.value
    }

    // getter
    const setState = (value) => {
        state.value = value
    }

    return { getState, setState } // states
}