// import { useState } from 'react'
// import Navbar from '../components/navbar'
// import customersData from '../dummy/users.json'
// import { getCustomers } from "../services/admin"
// import { useEffect } from 'react'

// function Customers() {
  
//     const [customers, setCustomers] = useState([])
//     const loadCustomers = async () => {
//         const result = await getCustomers()
//         if (result['status'] == 200) {
//           setCustomers(result['data'])

//         }
//         console.log("Customer:"+customers)
//       }
    
//       useEffect(() => {
//         debugger;
//         // this function will be called immediately after component gets loaded
//         loadCustomers()
//     }, [])
//   return (
//     <div>
//      <Navbar />
//       <h2 className='page-header'>Customers</h2>
//       <table className='table table-striped'>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Gender</th>
//             <th>Address</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//         {customers.map((customer, index) => {
//             return (
//               <tr>
//                 <td>{index + 1}</td>
//                 <td>
//                   {customer['customerFname']} {customer['customerLname']}
//                 </td>
//                 <td>{customer['customerEmail']}</td>
//                 <td>{customer['customerPhone']}</td>
//                 <td>{customer['gender']}</td>
//                 <td>{customer['address']}</td>
                
//                 <td>
//                   <button className='btn btn-sm btn-success me-2'>
//                     Deactivate
//                   </button>
//                   <button className='btn btn-sm btn-primary'>Details</button>
//                 </td>
//               </tr>
//             )
//           })}
          
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Customers

import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { getCustomers } from "../services/admin";
import bg from "../Images/BusHome.jpeg";  // Import the background image

function Customers() {
    const [customers, setCustomers] = useState([]);

    const loadCustomers = async () => {
        try {
            const result = await getCustomers();
            if (result['status'] === 200) {
                setCustomers(result['data']);
            } else {
                console.error("Failed to fetch customers");
            }
        } catch (error) {
            console.error("An error occurred while fetching customers", error);
        }
    };

    useEffect(() => {
        loadCustomers();
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            padding: "20px"
        }}>
            <Navbar />
            <h2 className='page-header' style={{ color: "white", textAlign: "center" }}>Customers</h2>
            {customers.length == 0 &&(
            <h3 className='mt-5 text-center' style={{ color: "white" }}>
                    There are no customers at the moment .
                </h3>
            )}
            {customers.length > 0 &&(

            <div className='container'>
                <table className='table table-striped' style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f8f9fa", color: "#333" }}>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={customer.id}>
                                <td>{index + 1}</td>
                                <td>{customer['customerFname']} {customer['customerLname']}</td>
                                <td>{customer['customerEmail']}</td>
                                <td>{customer['customerPhone']}</td>
                                <td>{customer['gender']}</td>
                                <td>{customer['address']}</td>
                                <td>
                                    <div className='d-flex'>
                                        {/* <button className='btn btn-sm btn-success me-2'>
                                            Deactivate
                                        </button> */}
                                        <button className='btn btn-sm btn-primary'>
                                            Details
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}
        </div>
    );
}

export default Customers;
