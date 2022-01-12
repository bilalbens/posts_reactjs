import React, {useEffect,useState} from 'react'
// import posts from '../data';
import { useGlobalContext } from '../Context';
import Post from './Post';
import LoadMore from './LoadMore'

export default function Posts() {
    const {posts,numberOfPosts,posted}=useGlobalContext();

    const timer = ()=>{
        setTimeout(()=>{

        },60000)
    }

    

    
    return (
        <>
            {
                posts.map((post)=>{
                    
                        return <> 
                                    <Post key={post.id} {...post}></Post> 
                                    <br/> 
                                </>
                        
                }).filter((post,index)=>index <numberOfPosts)
            }
            <div className="d-flex justify-content-center" style={{width:"65%"}}>

                <LoadMore></LoadMore>
                <p>{}</p>
                
            </div>
        </>
    )
}
