import React, { useEffect, useState } from "react";
import Product from "./Product";
import DetailProduct from "./DetailProduct";
import '../assets/less/products.less'
import '../assets/less/product.less'

function Products({title,children}){
   const [products,setProducts] = useState([]); // Hook useState
   const [productSelected, setProductSelected] = useState();
   const [isSelected, setIsSelected] = useState(false);

   const onDeleteProduct = (id) => {
      console.log('onDelete:', id)
      setProducts(products.filter(product => product.id !== id));
   }

   const onSelectProduct = (id) => {
      console.log('onSelect:', id);
      setProductSelected(products.find(product => product.id === id));
      setIsSelected(true);
   };

   const onShowProducts = () => {
      setIsSelected(false);
   }

   useEffect(() => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((r) => {
         setProducts(r?.products)
      });
   },[])
   useEffect(() => {
      console.log('Products',products)
   },[products])

   return(
      <>
         <h2>Products</h2>
         <div className="products" style={{display: isSelected ? "none" : ""}}>
            {products && 
               products.map(product =>
                  <Product item={product} key={product?.id} onDelete={onDeleteProduct} onSelect={onSelectProduct}/>
                  )
            }
         </div>
         <div className="detail-product" style={{display: isSelected ? "block" : "none"}}>
            {productSelected &&
               <DetailProduct item={productSelected} key={productSelected?.id} onShowProducts={onShowProducts}/>
            }
         </div>
      </>
   )
}
export default Products