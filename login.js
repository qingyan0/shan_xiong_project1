import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";

export default function Login() {
  const [username, setusername] = useState("");
  const [password,setpassword] = useState("")


  const handleChange = (evt) =>{
    setusername(evt.target.value)
    setpassword(evt.target.value)
  }

  const handleAdd = ()=>{
    console.log(username,password)
    setusername(" ")
    setpassword(" ")
    
  }
  useEffect(()=>{
    const handleAdd = ()=>{
      console.log(username,password)
      setusername("")
      setpassword("")
}},[])
  
  
  return (
    <div className="formContainer">
      <div className="login-title">Login System</div>
      <Form name="normal_login" className="login-form" >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            onChange={handleChange} 
            value={username}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleAdd}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
