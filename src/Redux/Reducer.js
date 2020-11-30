import * as ActionTypes from './ActionTypes';
const initialState={
    rows:[{
        name:'',
        value:''
    }],
    cards:[{
        name:'',
        value:'',
        id:''
    },{
        name:'',
        value:'',
        id:''
    },{
        name:'',
        value:'',
        id:''
    }]
}
export const Data = (state= initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ROW:
            return {...state, rows:[...state.rows,action.payload]};

        case ActionTypes.ADD_CARD:
            return {...state, cards:[...state.cards,action.payload]};

        case ActionTypes.REMOVE_ROW:
            return {...state, rows:state.rows.slice(1)};
        case ActionTypes.REMOVE_CARD:
            return {...state, cards:state.cards.slice(1)}

        default:
            return state;
    }
};