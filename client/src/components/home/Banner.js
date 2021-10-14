import React from 'react'

const Banner = () => {
    const url = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"

    return (
        <div className="banner w-full flex items-center flex-col justify-center" style={{height:"50vh"}}>
            <div className="text-5xl text-white leading-relaxed">BLOGS</div>
            <div className="text-xl bg-white">PDEU-CLUBS</div>
        </div>
    )
}

export default Banner
