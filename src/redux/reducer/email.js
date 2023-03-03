const initialState = {email: ""}
const mainReduser =(state = initialState, action)=>{
//   get store
console.log(action.email);
 switch(action.type){
    case "ADDRESS_EMAIL":
        return {email: action.email}
        break
        default:
            return state
 }
}
export default mainReduser
