import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
      // console.warn("dsata",data)

      data.json().then((result) => {
        console.warn("data", result)
        setUser(result.data)
      })
    })
  }, [])
  return (
    <div>
      <h1>Users List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
           
         
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.employee_name}</td>
              <td>{item.employee_age}</td>
              <td>{item.employee_salary}</td>
           
              <td>Pune</td>
              <td>
                <Button variant="danger">Delete</Button>&nbsp;
                <Button variant="warning">Cancel</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* {
                user.map((item,i)=>
                <div key={i}>
            
                        <li>{item.name}</li>
                        <li>{item.age}</li>
             
                    </div>
                )
            } */}
    </div>
  );
}

export default Users;
