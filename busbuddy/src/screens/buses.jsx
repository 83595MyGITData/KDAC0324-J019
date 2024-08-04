import { useState } from 'react'
import Navbar from '../components/navbar'
import { GetAllBuses } from '../services/customer'
import { useEffect } from 'react'

function Buses() {
    
    debugger;
    const [Buses, setBuses] = useState([])
    const loadBuses = async () => {
        const result = await GetAllBuses()
        if (result['status'] == 200) {
          setBuses(result['data'])

        }
        console.log("Bus:"+Buses)
      }
    
      useEffect(() => {
        debugger;
        // this function will be called immediately after component gets loaded
        loadBuses()
    }, [])
  return (
    <div>
     <Navbar />
      <h2 className='page-header'>Buses</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Bus Type</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
            <th>Journey Date</th>
            <th>Arrival Time</th>
            <th>Departure Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {Buses.map((bus, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                
                <td>{bus['busNumber']}</td>
                <td>{bus['busType']}</td>
                <td>{bus['source']}</td>
                <td>{bus['destination']}</td>
                <td>{bus['fare']}</td>
                <td>{bus['journeyDate']}</td>
                <td>{bus['arrivalTime']}</td>
                <td>{bus['departureTime']}</td>
                
                
                <td>
                  <button className='btn btn-sm btn-success me-2'>
                    Reserve Seat
                  </button>
                  
                </td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default Buses
