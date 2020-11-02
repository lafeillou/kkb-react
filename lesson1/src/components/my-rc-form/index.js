import React, {Component, useCallback} from "react";

export default function createForm(Cmp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
            // 非响应式的
            this.option = {};
        }

        handleChange = e => {
            const {name, value} = e.target
            this.setState({[name] : value})
        }

        getFieldDecorator = (field, option) => InputCmp => {
            this.option[field] = option;
            return React.cloneElement(InputCmp, {
                name: field,
                value: this.state[field] || "",
                onChange: this.handleChange
            })
        }

        setFieldsValue = newStore => {
            this.setState(newStore)
        }

        getFieldsValue = () => {
            return this.state;
        }

        // 暗号： 葡萄
        validateFields = callback => {
            let err = [];
            // 校验 校验规则 this.options
            // 校验的值是this.state
            for (let field in this.option) {
                // 判断state[field]是否是undefined
                // 如果是undefined err.push({[field] : err})
                if (this.option.hasOwnProperty(field)) {
                    this.option[field].rules.forEach( rule => {
                        if (rule.required && !this.state[field]) {
                            err.push({[field] : rule})
                        } 
                    })
                }
            }
            if (err.length === 0) {
                callback(null, this.state);
            } else {
                callback(err, this.state);
            }
        };

        getFrom = () => {
            return {
                form: {
                    getFieldDecorator: this.getFieldDecorator,
                    setFieldsValue: this.setFieldsValue,
                    getFieldsValue: this.getFieldsValue,
                    validateFields: this.validateFields
                }
            }
        };


        render() {
            return <Cmp {...this.props} {...this.getFrom()}/>;
        }
    }
}