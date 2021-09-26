import React, { useEffect, useState } from 'react';
import Series from '../Series/Series';
import Cart from '../Cart/Cart'
import './Box.css'

const Box = () => {
    const [series , setSeries] = useState([]);
    // state for cart 
    const [cart , setCart] = useState([])

    // event handelar for add cost button 
    const handleAddCost = (cost) =>{
        const newCart = [...cart,cost]
        // console.log(newCart);
        setCart(newCart)
    }
    useEffect(()=>{
        fetch('./series.JSON')
        .then(res => res.json())
         .then(data => setSeries(data))
    },[]);
    return (
        // every series in ui 
        <div>
            <div className="row  ">
                    <div className="col-md-9">
                        <div className="row">
                        {
                        series.map(singleSeries =><Series
                        key = {singleSeries.key}
                        handleAddCost = {handleAddCost}
                        singleSeries={singleSeries}
                        ></Series>)
                    }
                        </div>
                    </div>
                    {/* card ui  */}
                    <div className="col-md-3 sizing-cart">
                        <Cart 
                        cart={cart}
                        ></Cart>
                    </div>
                </div>
            </div>
    );
};

export default Box;