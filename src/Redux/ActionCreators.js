import * as ActionTypes from './ActionTypes';
export const addRow = (data) => ({
    type: ActionTypes.ADD_ROW,
    payload:{
        name:'',
        value:''
       }
});

export const addCard = (data) => ({
    type: ActionTypes.ADD_CARD,
    payload: {
        name:'',
        value:'',
        id:''
       }
});

export const removeRow = () => ({
    type: ActionTypes.REMOVE_ROW,
});
export const removeCard=()=>({
    type:ActionTypes.REMOVE_CARD,
})