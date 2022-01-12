import React from 'react'
import { useGlobalContext } from '../Context';


export default function LoadMore() {
    const {numberOfPosts,posts,loadmoreposts}=useGlobalContext();

    return (
            <div>{
                (posts.length < numberOfPosts)? <p>No more posts</p>: <button onClick={()=> loadmoreposts(numberOfPosts)} className="btn btn-primary">Load More</button>
            }   
            </div>
                

    )
}
