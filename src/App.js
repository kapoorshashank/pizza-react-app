// Each function return JSX // Functional component
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import Product from './pages/product';
import Cart from './pages/cart';
const App = () => {
    const style = {
        color: 'red'
    }
    return (
        // Use react fragment <></> instead of a div to wrap multiline elements in a component
        // <> 
        // <h1 style ={style}>Hello from App.js</h1> 
        //  <p> Ni Hao! </p>
        //  </>
        <>
            <Router>

                <Navigation/>
                <Switch>
                    <Route  path="/" component={Home} exact></Route>
                    <Route  path="/home" component={Home} exact></Route>
                        {/* <Home /> */}
                    <Route path="/about" component={About}>
                        {/* <About /> */}
                    </Route>
                    <Route path="/products" component={Product}>
                        {/* <About /> */}
                    </Route>
                </Switch>
                    <Route path="/cart" component={Cart}>
                        {/* <About /> */}
                    </Route>
            </Router>
        </>
    )
}

export default App;