import React from "react";

const DetailProduct = ({item, onSelect}) => {

    const handleShowProduct = () => {
        onSelect();
    };
 return (
    <div className="container" onClick={handleShowProduct}>
        <div className="imgProduct">
            <img src={item?.thumbnail} alt={item.title}/>
        </div>
        <div className="content">
            <h2 className="title">{item.title}</h2>
            <p className="description">{item.description}</p>
            <del className="price-root">
                {new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(item?.price)}
            </del>
            <span className="price-pro">
                {new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' })
                .format(Math.floor(item?.price*100/item?.discountPercentage))
                }
            </span>
        </div>
    </div>
 )
}

export default DetailProduct;