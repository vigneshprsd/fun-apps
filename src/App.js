import LoveCalculator from "./LoveCalculator/LoveCalculator";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./index.css";
import Home from "./Home/Home";
import LoveQuotes from "./LoveQuotes/LoveQuotes";

function App() {
  return (
    <Router>
      <Header />
      <>
        <Container>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/lovequotes" exact>
            <LoveQuotes />
          </Route>
        </Container>
      </>

      {/* https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-dE9zgDUQ9huPbfHaPk3Qre7J1UOBuq-VRuoNz4GLNGrhuivEu_ZS1RW9uUAAqkySXF7LE396ktMF/pubhtml */}
      <Footer />
    </Router>
  );
}

export default App;
