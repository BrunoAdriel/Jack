import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from './Spinner/Spinner';
import Cart from './Cart/Cart';


const LoaderComponents = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(()=>{
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    }, [])
    
    return loading ? <div><Spinner/></div> : <Cart/>;

}

export default LoaderComponents