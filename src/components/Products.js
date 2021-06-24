import Product from '../components/Product'
import { useState, useEffect } from 'react'

const Products = () => {

    // useState hook inititalisation
    // const [state ka name, reference of method to chng/modify the  state] = useState([initial array])
    //array destructuring assignment
    // useState will return an array and the array consists of two elements - data and reference of method to chng or modify state
    // to extract data from the array
    //if state of products is changed, then new data will be rendered
    //when comp is mount then we need to fetch the data
    // Lifecycle hooks - to do things at a particular time before or after mount, destroy, after state change
    // here we need to call the api after comp is mounted for that we use useEffect
    const [products, setProducts] = useState([]);
    //anonymous function
    // second parameter of useEffect is dependency array
    // if the dependency array changes here [products], then it will execute its fucntion
    // if the dependecy array is initialised as empty, then  after the comp is mount then it will run ONCE!
    useEffect(() => {
        console.log("Comp mounted")
        //Perfect place to call the api since the comp is mounted only once over here since the dependency array is blank
        //fetch will return promise, the response is actually stream and needs to be converted into json and even response.json will return so we're onna use two then to get he products data
        fetch('/api/products')
            .then(response => response.json())
            .then(products => {
                console.log(products);
                // Products are passed to the setProducts
                setProducts(products);
            })
    }, []);
    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {/* components are reusable that's why card is being put in a components since there are multiple cards */}
{/* use map to iterate thru the array */}
{
    products.map(product => <Product key={product._id} productPassed ={product}
    
    />)
    // Warning: Each child in a list should have a unique "key" prop
    // Add a key prop to have the uniqueness -> use id as key
    // to pass the data inside the component we will use prop
    // the prop will be recieved by function of the target component
    // productPassed ={product} : this means that product will be looped and passed as prop, in order to recieve it, we will get it in product component by using props.productPassed
}
            </div>
        </div>
    )
}

export default Products