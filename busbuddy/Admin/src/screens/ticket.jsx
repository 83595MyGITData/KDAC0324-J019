import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
//import { getticket } from '../services/ticket';
import bg from "../Images/BusHome.jpeg";

function Ticket() {
    const { ticketId } = useParams(); 
    const navigate = useNavigate();
    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        const loadticket = async () => {
            try {
               // const result = await getticket(ticketId);
                // if (result['status'] === 200) {
                //     setTicket(result['data']);
                // } else {
                //     toast.error("Failed to load ticket details.");
                // }
            } catch (error) {
                toast.error("An error occurred while fetching ticket details.");
            }
        };

        loadticket();
    }, [ticketId]);

    const handleBack = () => {
        navigate('/tickets');
    };

    if (!ticket) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <h1 className="page-header" style={{ color: "white" }}>Ticket Details</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <div className="form row" style={styles.form}>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="customerName" className="">Customer Name</label>
                                <input
                                    id="customerName"
                                    value={ticket.customerName}
                                    readOnly
                                    type="text"
                                    className="form-control"
                                    style={styles.input}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="seatNumber" className="">Seat Number</label>
                                <input
                                    id="seatNumber"
                                    value={ticket.seatNumber}
                                    readOnly
                                    type="text"
                                    className="form-control"
                                    style={styles.input}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reservationDate" className="">Reservation Date</label>
                                <input
                                    id="reservationDate"
                                    value={ticket.reservationDate}
                                    readOnly
                                    type="date"
                                    className="form-control"
                                    style={styles.input}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="departureTime" className="">Departure Time</label>
                                <input
                                    id="departureTime"
                                    value={ticket.departureTime}
                                    readOnly
                                    type="time"
                                    className="form-control"
                                    style={styles.input}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="arrivalTime" className="">Arrival Time</label>
                                <input
                                    id="arrivalTime"
                                    value={ticket.arrivalTime}
                                    readOnly
                                    type="time"
                                    className="form-control"
                                    style={styles.input}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="source" className="">Source</label>
                                <input
                                    id="source"
                                    value={ticket.source}
                                    readOnly
                                    type="text"
                                    className="form-control"
                                    style={styles.input}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="destination" className="">Destination</label>
                                <input
                                    id="destination"
                                    value={ticket.destination}
                                    readOnly
                                    type="text"
                                    className="form-control"
                                    style={styles.input}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button onClick={handleBack} className="btn btn-primary mb-3" style={styles.button}>Back</button>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

const styles = {
    form: {
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(245, 245, 200, 0.8)',
        border: '1px solid #ddd'
    },
    input: {
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    button: {
        width: '100%'
    }
};

export default Ticket;
