import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MyWallet from './components/MyWallet';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Transaction from './components/Transaction';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path='/sign-in'
          element={<SignIn />}
        />
        <Route
          path='/sign-up'
          element={<SignUp />}
        />

        <Route
          path='/my-wallet'
          element={<MyWallet />}
        />
        <Route
          path='/transaction'
          element={<Transaction />}
        />
      </Routes>
    </Router>
  );
}

export default App;