
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./routes/Home";
import EditOrder from "./routes/EditOrder";
import OrderDetail from "./routes/OrderDetail";
import {OrderContextProvider} from "./context/OrderContext";

function App() {
  return (
      <OrderContextProvider>
          <div>
              <Router>
                  <Routes>
                      <Route exact path="/" element = {<Home/>}/>
                      <Route path="/orders/:id/edit" element = {<EditOrder/>}/>
                      <Route path="/orders/:id" element = {<OrderDetail/>}/>
                  </Routes>
              </Router>
          </div>
      </OrderContextProvider>

  );
}

export default App;
