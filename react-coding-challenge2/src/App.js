import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteProvider } from './context/RouteContext';
import Navbar from './components/Navbar';
import RoutesList from './components/RoutesList';
import RouteDetail from './components/RouteDetail';
import TicketPurchase from './components/TicketPurchase';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  return (
    <Router>
        <RouteProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<RoutesList />} />
                <Route path="/route/:id" element={<RouteDetail />} />
                <Route path="/purchase" element={<TicketPurchase />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
            </Routes>
        </RouteProvider>
    </Router>
  );
}

export default App;
