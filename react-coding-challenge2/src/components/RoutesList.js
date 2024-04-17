import { useNavigate } from 'react-router-dom';
import data from '../data/mockData.json';
import './RoutesList.css'; 

function RoutesList() {
    const navigate = useNavigate();

    const handleRouteClick = (id) => {
        navigate(`/route/${id}`);
    };

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

export default RoutesList;
