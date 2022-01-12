
const reducer = (state,action)=>{

    switch(action.type){
        case 'SHARE_POST':{
            // console.log(action.payload)
            return {...state,posts: [action.payload, ...state.posts ] }
        };

        case 'LOADMORE_POST':{
            // console.log(action.payload)
            return {...state,numberOfPosts: action.payload*2 }
        };

        

    }
    return state
}

export default reducer