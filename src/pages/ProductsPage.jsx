import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Banner from "../components/Banner";
import SearchBox from "../components/SearchBox";
import Loader from "../components/Loader";
import Card from "../components/Card";
import SideBar from "../components/SideBar";
import { useProducts } from "../context/ProductContext";
import {
  searchProducts,
  filterProducts,
  getInitialQuery,
} from "../helpers/helper";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const products = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <Banner />
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
      <SideBar query={query} setQuery={setQuery} />
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        
      </div>
    </>
  );
}

export default ProductsPage;
