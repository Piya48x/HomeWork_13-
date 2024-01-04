import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Pagination from "./components/Paginaion";

function App() {
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(0)
  return (
    <>
      <h1>Search Products</h1>
      <SearchBar searchText = {searchText} setSearchText = {setSearchText} />
      <Pagination page={page} setPage={setPage}/>
      <ProductList searchText={searchText} page={page}/>
    </>
  )
};

export default App;