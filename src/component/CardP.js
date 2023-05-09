import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/FetchSlice';
import '../Stylling/Card.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Spinner } from 'react-bootstrap';
function CardP(props) {
    const AllData = useSelector(state => state.FetchData.data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())

    }, [dispatch])

    return (
        <section className='Card-section'>
            <div className="container py-5">
                <div className="row d-flex justify-content-center "  >
                    <h1>products</h1>
                    <div className="row">
                        {
                            AllData.products == null ? <div style={{margin:'auto',marginTop:'20%'}}>
                                <Spinner /> </div>:
                                AllData.products.map((item) => {
                                    return (
                                        <div className=" col-md-3 col-lg-3">

                                            <div className='card Card'>
                                                <img src={item.images[0]} alt='product' className='Card-img' />
                                                <p className='Card-Title'>{item.title}</p>
                                                <div>
                                                    <p className='Card-price'>{item.price}$</p>
                                                    <button className='Card-btn'><AiOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardP;