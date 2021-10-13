import React from 'react'

const Categories = () => {

    let ct = ["Music","Sports","Drama","Movies","Tech"]

    return (
        <div>
            <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 m-5 w-10/12">
                Create Blog
            </button>
            <table className="border-collapse border border-green-800 w-full">
                <thead>
                    <tr className="p-4">
                        <th className="border border-green-600 text-left p-4 font-normal">All Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ct.map((item,index)=>{
                            return(
                                <tr className="p-4" key={index}>
                                    <td className="border border-green-600 p-4">{item}</td>
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
