const initialState = {
    addedCart: []
}

const cardReduser =(state=initialState, action)=>{
    // console.log(action.data);
    switch(action.type){
        case "CARD_DATA":
            return {
                addedCart: [...state.addedCart, action.data]
            }
            default:
                return state
     }
}
export default cardReduser