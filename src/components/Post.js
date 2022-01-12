import React from 'react'
import './components.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Post = ({id,name,text,image})=> {
    return (
        <>
            <div className="card mb-3 ms-5">
                <div className="row g-0">
                    <div className="d-flex  col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;