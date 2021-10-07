import axios from "axios";

const endpoint = `${process.env.REACT_APP_PUBLIC_API_URL}/example/`

export const getData = async ()=>
  await axios.get(endpoint)



