import LoveCalculator from "./LoveCalculator/LoveCalculator";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./index.css";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <>
        <Container>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/lovecalc" exact>
            <LoveCalculator />
          </Route>
        </Container>
      </>
      <Footer />
    </Router>
  );
}

export default App;
