
        import Button from 'react-bootstrap/Button';
        import Form from 'react-bootstrap/Form';
        import { useState } from 'react';

        import 'bootstrap/dist/css/bootstrap.css';
        import { addUser } from '../service/api';
import styled from '@emotion/styled';
        const For=styled('Form')`
        width:40px;`;

  

const defaultValue={
    name:'',
    email:'',
    password:''

}
const Adduser=()=>{
   

        const [user, setUser]=useState(defaultValue);
        const onValue=(e)=>{
            var x= e.target.value;
            var y=e.target.name;
        
        // console.log(y,x);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
        }    
        const addUserDetails= async ()=>{
            await addUser(user);

        }
        return(
<div>
   <div>
    <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginTop:'50px',display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginTop:'50px'}}>
        login

    </h1>
   </div>

<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginTop:'50px'}}>
  
<Form className="w-25">
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>onValue(e)} name="name" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>onValue(e)} name="email" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>onValue(e)} name="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>addUserDetails()}>
        Submit
      </Button>
    </Form>
</div>
</div>
   
  );
}


  


export default Adduser;