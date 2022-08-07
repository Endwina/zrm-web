import React from 'react';
import { Button, Form,Input } from 'antd';
import {Link} from 'react-router-dom'
import "./index.css"
import { getUserQuery } from '../../query/queries';
import { graphql } from 'react-apollo';


class Login extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      admin: '',
      password: '123',
      account: '',
      inputpassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(e) {
    var data = this.props.getUserQuery;
    data.users.map(user =>{
      if(user.account === this.state.admin){
        if(user.password === this.state.inputpassword){
          alert(this.state.admin + '用户登陆成功');
          e.preventDefault();
        }
        else{
          alert('用户名或密码错误');
          e.preventDefault();
        }
      }
    })
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
          span: 11,
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
          <div className='bottom'>
          <Button id="btn" htmlType="submit" type="primary" onClick={this.handleSubmit}>登录</Button>
          {/* <Button id="regist" onClick={this.gotoRegister}>
            注册
          </Button> */}
          <Link to="/register">注册</Link>
          </div>
        </Form>
      </div>
      </div>
      </>
    );
  }
}

export default graphql(getUserQuery)(Login);