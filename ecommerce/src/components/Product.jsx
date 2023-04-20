


export default function Product({item,onDelete,OnUpdate,onSelect}){
   const handleRemoveProduct = (id) =>{
      onDelete(id)
   }

   const handleUpdateProduct = (item) =>{
      OnUpdate(item)
   }

   const handleShowProduct = (id) =>{
      onSelect(id)
   }

   return(
      <div className="product-item">
         <img src={item?.thumbnail} alt={item.title} onClick={() => handleShowProduct(item.id)}/>
         <div className="info">
            <div className="title" title={item.description} onClick={() => handleShowProduct(item.id)}>{item.title}</div>
            <div className="prices">
               <del className="price-root">
                  {new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(item?.price)}
               </del>
               <span className="price-pro">
               {new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' })
                  .format(Math.floor(item?.price*100/item?.discountPercentage))
                  }
               </span>
            </div>
            <div className="options">
               <button className="btn delete" onClick={() => handleRemoveProduct(item.id)}>
                  Remove Product
               </button>
               <button className="btn delete" onClick={() => handleUpdateProduct(item)}>
                  Update Product
               </button>
            </div>
         </div>
      </div>
   )
}