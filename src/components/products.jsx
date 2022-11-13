import React, { useEffect, useState } from 'react'

const Products = () => {
    const [data, setData] =useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true
    useEffect(()=>{
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json())
                console.log(filter)
            }
            return() => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])
    const Loading = () =>{
        return(
            <>
                Loading...
            </>
        )
    }
    const ShowProducts = () =>{
        return(
            <>
         
<div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark">All</button>
            <button className="btn bt-outline-dark">Men's Clothing</button>
            <button className="btn bt-outline-dark">Women's Clothing</button>
            <button className="btn bt-outline-dark">Jewelry</button>
            <button className="btn bt-outline-dark">Electronic</button>
            <button className="btn bt-outline-dark">Men's Clothing</button>



        </div>
        {filter.map((product) =>{
            return(
                <>
                    <div className='col-md-3'>
                        <div className='card'>
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">
                                    some quick example test to buildont he card title and make up the bu;k of the card's content.

                                </p>
                                <a href="#" classNAme="btn btn-primary">
                                    Go somewhere
                                </a>
                
                            </div>

                        </div>
                    </div>
                </>
            )
        })}
        </>
        )
        
    }
  return (
    <div>
    <div className='container my-5 py-5'>
        <div className="row">
            <div className="col-12 mb-5">
                <h1 className='display-6 fw-bolder text-center'>
                    Latest products
                </h1>
            </div>
        </div>
<div className='row justify-content-center'>
    {loading ? <Loading/> : <ShowProducts/> }
</div>
    </div>
    </div>
  )
}

export default Products