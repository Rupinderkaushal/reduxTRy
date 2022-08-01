import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProduct,
  removeselectedProduct,
} from "../../redux/actions/ProductActions";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai';

const CardItem = () => {
  const product = useSelector((state) => state.product);
  const { image, id, title, description, category, price } = product;
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log("product", product);
  const fetchProductsDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log("ERRR", err));
    console.log("popo", response.data);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductsDetails(productId);
    return () => {
      dispatch(removeselectedProduct());
    };
  }, []);

  const colorChanger =(e)=>{
   const box = document.getElementById('btn');
   box.style.border ='2px solid green'
  }

  return (
    <div>
      <h1>Product List</h1>
      {Object.keys(product).length === 0 ? (
        <div>
          <p>......Loading</p>
        </div>
      ) : (
        <div>
          <MDBCard key={id} className="w-25 m-3 card-wrapper">
            <MDBCardImage
              className="image"
              src={image}
              position="top"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle className="title">{title}</MDBCardTitle>
              <MDBCardText className="description">{description}</MDBCardText>
            
                <MDBBtn>Add to cart <span><AiOutlineHeart   id="btn" onClick={colorChanger} size={24} /></span> </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      )}
    </div>
  );
};

export default CardItem;
