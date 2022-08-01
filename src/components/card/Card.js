import React from 'react';
import "./Card.css";
import {Link} from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

import { useSelector } from 'react-redux';
 const Ishere = true;
export default function Card() {
    const products = useSelector((state)=>state.products.products)
    console.log("cardData",products)
    
    
  return (
    <>
    {products.map((val)=>(
          <MDBCard key={val.id}   className='w-25 m-3 card-wrapper' >
          <MDBCardImage className='image' src={val.image} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle className='title'>{val.title}</MDBCardTitle>
            <MDBCardText className='description'>
            {val.description }
            </MDBCardText>
           
            <Link to={`/product/${val.id}`}>
            <MDBBtn>Button</MDBBtn>
            </Link>

          </MDBCardBody>
        </MDBCard>
    )
        
    )}
   
    </>
  );
}