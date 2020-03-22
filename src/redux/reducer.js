let obj = {
    name:"joke",
    age: 18
}

export function reducer(state=obj.age, action){
    switch(action.type){
        case "plus":{
            return state+action.data;
            break;
        }

        case "minus":{
            return state-action.data;
            break;
        }

        default:{
            return state;
            break;
        }
            
        
    }
}