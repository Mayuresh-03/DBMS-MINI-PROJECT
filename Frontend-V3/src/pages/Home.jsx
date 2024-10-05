import React, { useState } from 'react'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import CompanyList from '../components/CompanyList'
import ImageContainer from '../components/ImageContainer'
import ProductList from '../components/ProductList'
import SideBar from '../components/SideBar'

const Home = () => {
    
    return (
        <div className="py-20 mt-2">
            
            <BannerProduct />
            <div className="my-10"> {/* Adds margin to space out components */}
                <HorizontalCardProduct category={"Laptop"} heading={"Latest Laptop"} />
            </div>
            <div className="my-10">
                <HorizontalCardProduct category={"Airbuds"} heading={"Best Airbuds"} />
            </div>
            <div className="my-0">
                <CompanyList/>
            </div>
            <div className="my-10">
                <HorizontalCardProduct category={"Shoes"} heading={"Trendy Shoes"}/>
                <ImageContainer></ImageContainer>
            </div>
            <div className="my-10">
                <HorizontalCardProduct category={"Phone"} heading={"Best Smart Phones"} />
            </div>
        </div>
    )
}

export default Home