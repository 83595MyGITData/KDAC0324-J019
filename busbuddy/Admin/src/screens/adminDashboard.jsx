// src/pages/AdminDashboard.js
import { useNavigate } from "react-router-dom";
import bg from "../Images/BusHome.jpeg";  // Import the background image

function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            padding: "20px"
        }}>
        
            <h1 className="page-header" style={{ color: "white", textAlign: "center" }}>Admin Dashboard</h1>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <button onClick={() => navigate('/customer')} className="btn btn-primary mx-2">Manage Users</button>
                    <button onClick={() => navigate('/buslist')} className="btn btn-primary mx-2">Manage Buses</button>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
