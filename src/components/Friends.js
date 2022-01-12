import React from 'react'
import { useGlobalContext } from '../Context';
import Friend from './Friend';
import './components.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Friends() {
    const {posts}=useGlobalContext();


    return (
        <div>
            <h2 className="ms-5">Friends</h2>

            <div className="row m-0 d-flex flex-column align-items-center justify-content-start">
                {posts.map((item)=>{
                    return <Friend key={item.id} {...item}></Friend>
                })}

            </div>

        </div>
    )
}
