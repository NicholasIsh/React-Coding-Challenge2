// Importing necessary modules and components for routing and state management
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouteProvider } from './context/RouteContext';
import Navbar from './components/Navbar';
import RoutesList from './components/RoutesList';
import RouteDetail from './components/RouteDetail';
import TicketPurchase from './components/TicketPurchase';
import ConfirmationPage from './components/ConfirmationPage';

/**
 * App Component
 * Purpose: To set up the main router and provide a context for the entire application.
 * Description:
 * - Router: Manages and navigates between different components based on the URL path.
 * - RouteProvider: Provides a global state context so that route and ticket data are accessible throughout the application.
 * - Routes and Route: Define the path and corresponding component that should render. 
 * - This structure supports deep linking and ensures that users can bookmark and return to specific resources directly.
 */
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
