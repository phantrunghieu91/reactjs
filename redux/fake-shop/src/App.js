import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductDetail from './components/shop/ProductDetail';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/:productId'
            element={<ProductDetail />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
