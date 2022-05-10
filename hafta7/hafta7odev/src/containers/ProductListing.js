import React,{useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'
const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const  dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error)=>{console.log(error)})
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    }
    ,[])
  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing