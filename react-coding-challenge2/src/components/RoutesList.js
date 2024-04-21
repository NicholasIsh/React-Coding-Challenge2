// Importing the useNavigate hook from react-router-dom for navigation
import { useNavigate } from 'react-router-dom';
import data from '../data/mockData.json'; // Importing mock data for route listings
import './RoutesList.css'; // Importing CSS for styling the RoutesList components

/**
 * RoutesList Component
 * Purpose: Displays a list of all available routes that users can select.
 * Description:
 * - This component maps over the imported data to generate a list of route cards.
 * - Each card is clickable and navigates to the detailed view of the selected route.
 */
function RoutesList() {
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Function to handle the click event on a route card
    const handleRouteClick = (id) => {
        navigate(`/route/${id}`); // Navigating to the RouteDetail page of the clicked route
    };

    // JSX markup for displaying the list of routes
    return (
        <div className="routeListContainer">
            <h1>Available Routes</h1>
            {data.map(route => (
                <div className="routeCard" key={route.id} onClick={() => handleRouteClick(route.id)}>
                    <h2 className="routeTitle">{route.title}</h2>
                    <p className="routeDescription">{route.description}</p>
                </div>
            ))}
        </div>
    );
}

// Exporting the RoutesList component for use in other parts of the application
export default RoutesList;
