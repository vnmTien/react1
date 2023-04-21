import React, { useEffect, useState } from "react";
import Product from "./Product";
import DetailProduct from "./DetailProduct";
import "../assets/less/products.less";
import "../assets/less/product.less";
import Search from "./Search";

function Products({ title, children }) {
  const [products, setProducts] = useState();
  const [productsSort, setProductsSort] = useState();
  const [productSelected, setProductSelected] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const onDeleteProduct = (id) => {
    const newData = products.filter((product) => product.id !== id);
    setProducts(newData);
    setProductsSort(newData);
  };

  const onSearchProduct = (value) => {
    if (value) setProductsSort(
      products.filter((product) => {
        return product.title.toLowerCase().includes(value.toLowerCase());
      })
    );
    else setProductsSort(products)
  };

  const onUpdateProduct = (item) => {
    console.log("onUpdate:", item);
  };

  const onSelectProduct = (id) => {
   console.log('onSelect:', id);
   setProductSelected(products.find(product => product.id === id));
   setIsSelected(true);
};

const onShowProducts = () => {
   setIsSelected(false);
}

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then(({ products }) => {
        console.log("productL:", products);
        if (products) {
          setProducts(products);
          setProductsSort(products);
        }
      });
  }, []);

  return (
    <>
      <div className="search-product">
         <h2>Tìm sản phẩm</h2>
         <Search onSearching={onSearchProduct} placeholder={'Nhập tên sản phẩm'}/>
      </div>
         <p>số lượng: {products?.length || 0}</p>
         <h2>Products</h2>
         <div className="products" style={{display: isSelected ? "none" : ""}}>
            {productsSort 
                  ? productsSort.map((product) => (
                     <Product
                        item={product}
                        key={product?.id}
                        onDelete={onDeleteProduct}
                        onUpdate={onUpdateProduct}
                        onSelect={onSelectProduct}
                     />
                  ))
               : "Loading...."}
         </div>
         <div className="detail-product" style={{display: isSelected ? "block" : "none"}}>
            {productSelected &&
               <DetailProduct item={productSelected} key={productSelected?.id} onShowProducts={onShowProducts}/>
            }
         </div>
      </>
   )
}
export default Products;
