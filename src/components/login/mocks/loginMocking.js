import axios from"axios";

export default async (id,password)=>{
    const response=await axios.get("https://bpitconnect.herokuapp.com/auth/local",{
        identifier:id,
        password
    })
    return response;
}
