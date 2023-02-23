import axios from 'axios';
const URL='http://localhost:8000';
export const addUser=async (data)=>{
    try{
        return await axios.post(`${URL}/add`,data);

    }
    catch(error) {
        console.log("Error while calling api",error);

    }
}

export const viewUsers=async () =>{

    try{
        return await axios.get(`${URL}/viewUsers`);
    }

    catch(error){
        console.log(`error`,error);
    }

}