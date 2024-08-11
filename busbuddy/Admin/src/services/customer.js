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

export async function getAvailableSeats(busId) {
  try {
    debugger;
    const response = await axios.get(`${config.serverUrl}/customers/availabilSet/${busId}`);
    console.log("Response Data:"+response.data);
    return response;
  } catch (ex) {
    console.error('Exception:', ex);
    return null;
  }
}

export async function reserveSeats(data) {
  debugger;
  try {
    console.log("InseatReservation",data)
    const response = await axios.post(`${config.serverUrl}/customers/seatReservation`, data);
    console.log("Response:"+response)
    return response;
  } catch (ex) {
    console.error('Exception:', ex);
    return null;
  }
}

export async function GetAllBuses() {
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

export async function login(customerEmail, password) {
  const body = { customerEmail, password }
  try {
    debugger;
    const response = await axios.post(`${config.serverUrl}/customers/login`, body)
    return response
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
  //   axios
  //     .post(`${config.serverUrl}/admin/login`, body)
  //     .then((response) => {
  //       console.log(response.data)
  //       return response.data
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
}
