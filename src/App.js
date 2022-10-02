import LoveCalculator from "./LoveCalculator/LoveCalculator";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./index.css";
import Home from "./Home/Home";
import LoveQuotes from "./LoveQuotes/LoveQuotes";
import Login from "./LovePrank/Login";
import Register from "./LovePrank/Register";
import Store from "./store";
import rootReducer from "./rootReducer";
import PrivateRoute from "./routing/privateRoute";
import LoveCalculatorPrankDashBoard from "./LovePrank/PrankDashboard";
import LoveCalculatorPrank from "./LovePrank/Prank";

function App() {
  return (
    <Store rootReducer={rootReducer}>
      <Router>
        <Header />
        <>
          <Container>
            <Route path="/" component={LoveCalculator} exact/>
            <Route path="/lovequotes" component={LoveQuotes} />
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/lovecalci" exact component={LoveCalculatorPrank}/>
            <PrivateRoute exact path="/funwithfriends" component={LoveCalculatorPrankDashBoard} />
          </Container>
        </>
        <Footer />
      </Router>
    </Store>
  );
}

export default App;
