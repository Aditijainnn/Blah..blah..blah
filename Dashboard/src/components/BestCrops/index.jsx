import React from 'react'
import "./BestCrops.css"
import { trendingProducts } from '../../source'
import chroma from 'chroma-js'

const BestCrops = () => {
  return (
    <div className='best__crops'>
        <h1>Trending Products</h1>
        <div className="products">
            {
                trendingProducts.map((list,index)=>(
                    <div className="product__card" key={index}>
                        <div className="product__image">
                            <img src={list.image} alt={list.name} />
                        </div>
                        <div className="detail">
                            <h3 className="clamp">{list.name}</h3>
                            <small className="discount"
                                style={{
                                    background:chroma.random().alpha(0.1).css(),
                                    color: chroma.random(),
                                }}
                                >
                                    {list.discount}
                            </small>
                        </div>
                        <div className="price__container">
                            <small>{list.price}</small>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BestCrops