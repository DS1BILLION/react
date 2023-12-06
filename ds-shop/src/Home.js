import React from 'react';
import Product from './Product';
import './Home.css'



function Home(){
    return(
        <div>
            <div className="home">
                <div className="home-container">
                    <img src="https://th.bing.com/th/id/OIP.LeMqzZuWOrdwez-uwbfzTgHaE4?rs=1&pid=ImgDetMain" alt="" className="home-image" />
                
                <div className="home-row">
                    <Product/>
                    <Product/>
                </div>
                <div className="home-row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home-row">
                    <Product/>
                </div>
                </div>

            </div>
        </div>
    )
}
export default Home;
