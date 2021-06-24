const Product = (props) => {
    console.log(props)
    const {productPassed} = props;
    // const {name, size, price} = {props.product}
    return (
      
            <div>
                <img src="/images/peproni.png" />
                <div className="items-center">
                    {/* <h2 className="text-lg font-bold py-2">{props.productPassed.name}</h2> props can be used directly as well */}
                    <h2 className="text-lg font-bold py-2">{productPassed.name}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4" >{productPassed.size}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>Rs. {productPassed.price}</span>
                    <button className="px-6 py-2 rounded-full text-white mt-4 font-bold bg-yellow-500 hover:bg-yellow-600">Add</button>
                </div>
            </div>


    )
}

export default Product
