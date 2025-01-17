import React from 'react'
import "./Farmers.css"
import { farmers } from '../../source'
const Farmers = () => {
  return (
    <div className='farmers'>
        <h1>Deliveries and POCs</h1>
        <table>
            <thead>
                <tr>
                    <th className="m-hide">Profile</th>
                    <th className="m-hide">Address</th>
                    <th>Ingredients</th>
                    <th className="m-hide">Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                </tr>
            </thead>

            <tbody>
                {
                    farmers.map((farmers, index) => (
                        <tr key={index}>
                            <td className="user__container m-hide">
                                <div className="profile">
                                <img src={farmers.customerProfile} alt="" />
                                </div>
                                <small className="name">{farmers.customerName}</small>
                                </td>
                                <td className="m-hide">{farmers.customerAddress}</td>
                                <td>{farmers.productName}</td>
                                <td className="m-hide">{farmers.purchaseDate.toLocaleDateString()}</td>
                                <td className="status">
                                    <div 
                                    className="dot"
                                    style={{
                                        backgroundColor: farmers.status === 0 ? "var(--color-danger)" :
                                        farmers.status === 1 ? "var(--color-success)": "var(--color-warning)"
                                    }}
                                    />
                                    <small>
                                    {
                                        farmers.status === 0 ? "Cancelled" :
                                        farmers.status === 1 ? "Delivered" : "Processing"
                                    }
                                    </small>
                                </td>
                                <td>{farmers.productPrice}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Farmers