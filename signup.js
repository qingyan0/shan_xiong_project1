import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import "./login.css";

export default function App() {
    const App =()=>{
        const [form] =Form.useForm();
    }
  
  return (
    <div className="formContainer">
      <div className="signup-title">Signup System</div>
      <Form name="register" className="register-form" >
         
        <Form.Item
          name="firstname"
          rules={[{ required: true, message: "Please input you first" }]}
        >
            <label>First Name</label>
          <Input
            placeholder="First Name"
          />
        </Form.Item>

        <Form.Item
          name="lastname"
          rules={[{ required: true, message: "Please input you lastname" }]}
        >
            <label>Last Name</label>
          <Input
            placeholder="Last Name"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ type:'email', message:'The input is not valid'}, 
          {required: true, message: 'Please input you email' ,pattern: /^[A-Za-z]+$/i }]}
        >
            <label>Email</label>
          <Input
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
