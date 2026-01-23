import React, {useEffect, useState, useMemo} from 'react';
import {Link} from "react-router";
import { Card, SearchInput } from "../../components/index";
import LoadingGif from "../../assets/Gifs/Loading.gif";
import "./ProductList.css"


function ProductList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    const getProducts = async () => {
        try{
            const response = await fetch ("https://dummyjson.com/products ")
            const json = await response.json();
            setData(json.products);
        } catch (err) {
            setError (err);
        } finally {
            setLoading (false);
        }
    };

useEffect(() => {
    getProducts();
}, []);

const productFiltered = useMemo(() => {
    const query =searchItem.trim().toLowerCase();
    if (!data.length) return [];
    return data.filter((p) => p.title.toLowerCase().includes(query))
}, [data, searchItem]);

return (
<>
    <SearchInput searchTerm={searchItem} onSearchChange={
        setSearchItem
    }/>

    <div className="loading">{loading && <img src={LoadingGif} alt="Loading..."/>}</div>

    <div className="loading">{error && !loading && <h1>{error.message}</h1>}</div>

    <div className="container">{data.length >=1 && 
        productFiltered.map((prd) => (
            <Link key={prd.id} to="/product-detail" state={{prd: prd}}>
                <Card 
                    texto={prd.title}
                    price={prd.price}
                    key={prd.id}
                    imageUrl={prd.images[0]}
                />
            </Link>
            ))}</div>

    <div className="loading">{data.length === 0 && !loading && <h1>La data esta vacia</h1>}</div>
   </>
);
};

export default ProductList;