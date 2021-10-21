import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

    let ct = ["Music","Sports","Drama","Movies","Tech"]

    return (
        <div>
            <Link to={"/create"}>
                <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 m-5 w-10/12">
                    Create Blog
                </button>
            </Link>
            <table className="border-collapse w-full">
                <thead>
                    <tr className="p-4">
                        <Link to={`/`} className="w-full block">
                            <th className="border border-green-600 text-left p-4 font-normal w-full block hover:bg-green-500 hover:text-white transition">All Categories</th>
                        </Link>
                    </tr>
                </thead>
                <tbody>
                    {
                        ct.map((item,index)=>{
                            return(
                                
                                    <tr className="p-4" key={index}>
                                        <Link to={`/?category=${item}`} className="w-full block">
                                        <td className="border border-green-600 border-t-0 p-4 w-full block hover:bg-green-500 hover:text-white transition">{item}</td>
                                        </Link>
                                    </tr>
                               
                            )
                        })
                    }
                    
                    
                </tbody>
                </table>
        </div>
    )
}

export default Categories
