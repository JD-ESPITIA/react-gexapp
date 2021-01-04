import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
// export const GifGridItem = (img) => {
    // console.log(img);


    // Usa index.css class
    return (
        <div className="card animate__animated animate__fadeInRightBig ">
            {/* {img.title} */}
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
