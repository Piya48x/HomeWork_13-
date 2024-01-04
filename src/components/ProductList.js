import React, { useEffect, useState } from "react";

export default function ProductList(props) {
  const { searchText, page } = props;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let apiUrl = "https://dummyjson.com/products";
        if (searchText !== "") {
          apiUrl = `https://dummyjson.com/products/search?q=${searchText.trim()}`;
        } else {
          apiUrl = `https://dummyjson.com/products?limit=10&skip=${page}`;
        }

        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchText, page]);

  return (
    <div className="product-list">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.products?.map((el) => (
            <li key={el.id}>
              {el.title} | {el.category} | $ {el.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
