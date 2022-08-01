import React, { useEffect } from "react";
import Card from "../card/Card";
import Carousel from "../carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ActionTypes } from "../../redux/constants/ActionTypes";
import { setProducts } from "../../redux/actions/ProductActions";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
      console.log("response",response.data)
      dispatch(setProducts(response.data))
  };

  useEffect(()=>{
    fetchProducts()
  },[])

  console.log("1", products);
  return (
    <div className="products-div">
    <h1>Products List</h1>
    <div className="d-flex align-items-center justify-content-between flex-wrap">
      {/* <Carousel/> */}
      <Card />
    </div>
    </div>
  );
};

export default Home;
