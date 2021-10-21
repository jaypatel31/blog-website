import React from 'react'

import Banner from "./Banner"
import Categories from "./Categories"
import Posts from './Posts'

const Home = () => {
    return (
        <>
            <Banner/>
            <div className="grid grid-cols-1 md:grid-cols-5">
                <Categories/>
                <Posts/>
            </div>
        </>
    )
}

export default Home
