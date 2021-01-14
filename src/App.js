import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopItem from './ShopItem';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/shop/:id" component={ShopItem} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>Home page</h1>;
};

export default App;
