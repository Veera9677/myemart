import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div>
            <div className="hero">
                <div className="card bg-dark text-white border-0">
                    <img src="/assets/bg.jpg" className="card-img" alt="Background"
                        height="950px" />
                    <div className="card-img-overlay d-flex flex-column">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mg-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
                <Products />
            </div>
        </div>
    )
}
