import { useState} from 'react'
import Navbar from '../components/navbar'
import customersData from '../dummy/users.json'

import { useEffect } from 'react'
import { getBusList } from '../services/admin'
import { Link } from "react-router-dom";
 
function BusList() {
    
    const [buslist, setBuslist] = useState([])
    const loadBusList = async () => {
        const result = await getBusList()
        if (result['status'] == 200) {
           setBuslist(result['data'])

        }
        console.log("bUS LIST:"+buslist)
      }
    
      useEffect(() => {
        debugger;
        
  
        // this function will be called immediately after component gets loaded
        loadBusList();
    }, [])
  return (
    <div >
      <Navbar />
      <h2 className='page-header'>Bus List</h2>
      <Link to='/addBus' className='btn btn-primary'>
        Add Bus
      </Link>
      {buslist.length == 0 && (
        <h3 className='mt-5' style={{ textAlign: 'center' }}>
          There are not properties at the moment. Please use Add Property button
          to add one.
        </h3>
      )}
      {buslist.length > 0 && (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Sr no.</th>
            <th>Bus Number</th>
            <th>Bus Type</th>
            <th>Source</th>
            <th>Destination</th>
            <th>JourneyDate</th>
            <th>Arrival Time</th>
            <th>Departure Time</th>
            <th>DriverName</th>
            <th>Bus Capacity</th>
            <th>Available Seats</th>
            <th>Fare</th>
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>
        {buslist.map((buslist, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{buslist['busNumber']}</td>
                <td>{buslist['busType']}</td>
                <td>{buslist['source']}</td>
                <td>{buslist['destination']}</td>
                <td>{buslist['journeyDate']}</td>
                <td>{buslist['arrivalTime']}</td>
                <td>{buslist['departureTime']}</td>
                <td>{buslist['driverName']}</td>
                <td>{buslist['busCapacity']}</td>
                <td>{buslist['availabeSeats']}</td>
                <td>{buslist['fare']}</td>
                
                
                <td>
                  <button className='btn btn-sm btn-danger me-2'>
                    Delete
                  </button>
                  <button className='btn btn-sm btn-primary'>Details</button>
                </td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
      )}
    </div>
  )
}

export default BusList
