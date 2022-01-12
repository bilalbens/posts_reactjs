import React from 'react'

export default function friend({id,name,image}) {
    return (
        <div>
            <div className="friend d-flex justify-content-start align-items-center">
                <div className="friend_image">
                    <img src={image} alt={name} />
                </div>
                <h3 className="friend_name">{name}</h3>
            </div>
        </div>
    )
}
