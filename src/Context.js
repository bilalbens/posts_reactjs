import React, { useState, useContext, useReducer, useEffect } from 'react'
import data from "./data";
import reducer from "./reducer"


const AppContext =React.createContext();

var today = new Date(),
time =today.getSeconds();



const initialState = {
    loading:false,
    posts:data,
    numberOfPosts:5,
    posted: time

}


const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const sharePost=(post)=>{
        dispatch({type: 'SHARE_POST',payload:post})
    }


    const loadmoreposts = (NofPosts)=>{
        dispatch({type: 'LOADMORE_POST',payload:NofPosts})

    }



    return(
        <AppContext.Provider
            value={{
                ...state,
                sharePost,
                loadmoreposts,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}