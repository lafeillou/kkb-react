import React, {Component} from 'react';
// import {createForm} from "rc-form";
import createForm from "../components/my-rc-form";

import Input from "../components/Input";

const nameRules = {required: true, message: "请输入姓名！"};
const passwordRules = {required: true, message: "请输入密码！"};


@createForm
class MyRCForm extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     username: "",
        //     password: ""
        // };
        this.state = {
            err: []
        }
    }

    componentDidMount() {
        this.props.form.setFieldsValue({username: "default"});
    }
    submit = () => {
        const {getFieldsValue, validateFields} = this.props.form;

        // console.log("submit", getFieldsValue());
        validateFields((err,val) => {
            if(err) {
                console.log("err", err);
                this.setState({
                    err
                })
            } else {
                console.log("校验成功", val);
            }
        })
    };

    // render() {
    //     const {username, password} = this.state;
    //     return (
    //         <div>
    //             <h1>暗号:葡萄 MyRCForm</h1>
    //             <Input placeholder="用户名" value={username} onChange={e=>this.setState({username: e.target.value})} />
    //             <Input placeholder="密码" value={password} onChange={e=>this.setState({password: e.target.value})}/>
    //             <button onClick={this.submit}>submit</button>
    //         </div>
    //     )
    // }

    render() {
        console.log("props", this.props);
        const {getFieldDecorator} = this.props.form
        const {err} = this.state;
        return (
            <div>
                <h1>暗号:葡萄 MyRCForm</h1>
                {getFieldDecorator("username", {rules: [nameRules]})(<Input placeholder="用户名" />)}
                {getFieldDecorator("pasword", {rules: [passwordRules]})(<Input placeholder="密码" />)}
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}

export default MyRCForm