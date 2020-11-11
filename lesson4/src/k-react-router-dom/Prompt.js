// 第四次课暗号: 荔枝
import { RouterContext } from "./RouterContext";
import React, {Component} from "react";

export default function Prompt({ message, when = true }) {
    return (
        <RouterContext.Consumer>
            {
                context => {
                    if (!when) {
                        return null
                    }
                    let method = context.history.block;
                    return (
                        <LifeCycle
                            onMount={self => {
                               self.release = method(message);
                            }}

                            onUnmount={self => {
                               self.release();
                            }}
                        />
                    )
                }
            }
        </RouterContext.Consumer>
    )
}


// 第四次课暗号: 荔枝
class LifeCycle extends Component {
    componentDidMount() {
        if(this.props.onMount) {
            this.props.onMount.call(this, this);
        }
    }

    componentWillUnmount() {
        if(this.props.onUnmount) {
            this.props.onUnmount.call(this, this);
        }
    }
    render() {
        return null;
    }
}