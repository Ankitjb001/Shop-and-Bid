import React, { useState } from 'react';
import { useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { viewUsers } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Viewusers() {

  const[users,setUsers]=useState([]);
  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers=async ()=>{
    let response=await viewUsers();
    setUsers(response.data);
    
  }
  const navigate=useNavigate();
  const update=(e)=>{
    navigate(`/edit/${e}`);
    
  }
  const deletefrom=(e)=>{
    navigate(`/edit/${e}`);
    
  }
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Email</th>
         
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
    {
      users.map(user=>(
        <tr>
          <td>{user._id}</td>
          <td>{user.fname}</td>
          <td>{user.lname}</td>
          <td>{user.email}</td>
          <td>        <button class="btn btn-link btn-sm btn-rounded" onClick={()=>update(user._id)}>
          Edit
        </button>
        <button type="button" class="btn btn-link btn-sm btn-rounded" onClick={()=>deletefrom(user._id)}>
          Delete
        </button>
</td>

        </tr>
      ))
    }

        
      </MDBTableBody>
    </MDBTable>
  );
}