import axios from 'axios'
import { config } from './config'

export async function register(customerFname, customerLname, customerEmail, password,address, gender, customerPhone, age) {
  try {
    debugger;
    // post body
    const body = { customerFname, customerEmail, customerLname, password,address, gender ,customerPhone, age}

    // send the post request
    console.log("Inside Axios")
    const response = await axios.post(`${config.serverUrl}/customers/register`, body )

    // return the json body from response object
    console.log("Response:"+response)
    console.log("Response Data:"+response.data);
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  //return null
}

export async function getCustomers() {
  try {
    debugger;
   // const token = sessionStorage['token']
    const response = await axios.get(`${config.serverUrl}/Admin/GetAllCustomers`, {
      
    })
    console.log(response)
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}
//Admin side
//View All Buses Admin side
export async function getBusList() {
  try {
    debugger;
   // const token = sessionStorage['token']
    const response = await axios.get(`${config.serverUrl}/customers/GetAllBuses`, {
      
    })
    console.log(response)
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}

export async function getBusById() {
  try {
    debugger;
   // const token = sessionStorage['token']
    const response = await axios.get(`${config.serverUrl}/Admin/GetRouteById`, {
      
    })
    console.log(response)
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}





//get all Routes  

export async function getRouteList() {
  try {
    debugger;
   // const token = sessionStorage['token']
    const response = await axios.get(`${config.serverUrl}/Admin/GetAllRoutes`, {
      
    })
    console.log(response)
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}
export async function getBusDetails(busId) {
  try {
    debugger;
   // const token = sessionStorage['token']
    const response = await axios.get(`${config.serverUrl}/Admin/GetBusById/${busId}`, {
      
    })
    console.log(response)
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}



//Soft Delete deleteBus

export async function deleteBus(busId) {
  try {
    debugger;
   // const token = sessionStorage['token']
    const response = await axios.put(`${config.serverUrl}/Admin/deleteBus/${busId}`, {
      
    })
    console.log(response)
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}

//addRoute
export async function registerRoute(origin, destination, distance) {
  try {
    
    const body = { origin, destination, distance };

    const response = await axios.post(`${config.serverUrl}/Admin/AddRoute`, body);

    console.log("Response:", response);
    console.log("Response Data:", response.data);
    return response.data;  // Return only the response data for easier use

  } catch (error) {
  
    console.error("An error occurred while adding the route:", error);
    throw error;  // Propagate the error to be handled by the caller
  }
}


//AddBus
export async function registerBus(busNumber,busCapacity,busType,source,routeId,destination,driverName,journeyDate,departureTime,arrivalTime,availabeSeats,fare) {
  try {
   
    const body = { busNumber,busCapacity,busType,source,destination,routeId,driverName,journeyDate,departureTime,arrivalTime,availabeSeats,fare}
    const response = await axios.post(`${config.serverUrl}/Admin/AddBus`, body )
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  //return null
}

            

