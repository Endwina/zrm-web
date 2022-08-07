import React from 'react';
import { Button, Form,Input } from 'antd';
import {Link} from 'react-router-dom'
import "./index.css"

export default class Login extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      showooff:'block',
      admin: '',
      password: '123',
      account: '',
      inputpassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.gotoRegister = this.gotoRegister.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(e) {
    if (this.state.password === this.state.inputpassword) {
      alert(this.state.admin + '用户登陆成功');
      e.preventDefault();
    } else {
      alert('用户名或密码错误');
      e.preventDefault();
    }
  }


  render() {
    return (
      <>
      <div className="container" >
      <h2>速 来 登 录</h2>
      <div>
        <Form
        name="form"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 6,
        }}
        
      >
          <Form.Item label="用户"
          name="user">
            <Input
              onChange={(e) => {
                this.handleChange(e, 'admin');
              }}
            />
          </Form.Item>
          <Form.Item label="密码"
          >
            <Input
              type="password"
              onChange={(e) => {
                this.handleChange(e, 'inputpassword');
              }}
            />
          </Form.Item>
          <br />
          <Button id="go" htmlType="submit" type="primary" onClick={this.handleSubmit}>登录</Button>
          <Link to="/register">注册</Link>
        </Form>
      </div>
      </div>
      </>
    );
  }
}