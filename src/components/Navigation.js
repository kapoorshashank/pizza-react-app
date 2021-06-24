import { Link } from 'react-router-dom'

const Navigation = () => {
    const cartStyle = {
        background:'orange',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px'
    }
    return (
        // <>
        //     {/* to make the SPA and not refresh/reload the page use LINK instead of anchor tag <a></a> */}
        //     <Link to="/">Home</Link>
        //     <Link to="/about">About</Link>
        //     {/* <a href ="/">Home</a>
        //         <a href ="/about">About</a> */}
        // </>
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">

                <Link to="/">
                    <img  src="/images/logo.png" alt="Pizza logo" />
                </Link>
                <ul className="flex items-center">
                    <li>
                        <Link to="/home">Home
                        </Link>
                    </li>
                    <li className="ml-6">
                        <Link to="/products">Products
                        </Link>
                    </li>
                    <li className="ml-6">
                        <Link to="/cart">
                            <div style={cartStyle}>
                                <span className="text-black">10</span>
                                <img className="ml-2" style={{ height: "50" }} src="/images/cart.png" alt="Cart Icon" />
                            </div>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navigation
