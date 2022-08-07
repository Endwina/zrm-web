import React from 'react';
import { Button, Form,Input } from 'antd';
import './index.css';
import { createUserMutation } from '../../query/queries';
import { graphql } from 'react-apollo';

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        account: '',
        password: '',
        comparepassword: '',
        isLoggin: 'true',
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.checkpw = this.checkpw.bind(this);
      this.handleClickPage = this.handleClickPage.bind(this);
    }
  
    handleChange(e, name) {
      this.setState({ [name]: e.target.value });
    }
  
    checkpw(e) {
      if (this.state.password !== this.state.comparepassword && this.state.password!=='' && this.state.comparepassword!=='') {
        alert('密码不相符');
        e.preventDefault();
        this.setState({isLoggin:true});
      } else {
        this.setState({ isLoggin: false });
      }
    }
  
    handleClickPage(e){
      this.props.history.go(-1);
      this.props.createUserMutation({
        variables:{
          account:this.state.account,
          password:this.state.password
        }
      })
    }
  
    render() {
      return (
        <>
        <h1>求  你  注  册</h1>
        <Form
          name="form"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 11,
          }}

          
        >
          <Form.Item label="用户名"
          name="user"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },]}>
            <Input
              onChange={(e) => {
                this.handleChange(e, 'admin');
              }}
            />
          </Form.Item>
          <Form.Item label="密码">
            <Input.Password
              onChange={(e) => {
                this.handleChange(e, 'password');
              }}
            />
          </Form.Item>
          <Form.Item label="确认密码："
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}>
            <Input.Password
              onChange={(e) => this.handleChange(e, 'comparepassword')}
              onBlur={this.checkpw}
            />
          </Form.Item>
          
          <br />
          <Button
            id="btn"
            type="primary"
            htmlType="submit"
            disabled={this.state.isLoggin}
            onClick={this.handleClickPage}
          >
            确认注册
          </Button>
        </Form>
        </>
      );
    }
  }

export default graphql(createUserMutation)(Register);
