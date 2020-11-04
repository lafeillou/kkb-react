import React, {Component} from "react"
import store from "../store/index"

export default class MyReduxPage extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
    } 
    add = () => {
        store.dispatch({type:'ADD', payload: 100})
    }
    reset = () => {
        store.dispatch({type: 'RESET', payload: 0})
    }
    mutiplue = () => {
        store.dispatch({type: 'MUTIPULE', payload: 2})
    }
    render() {
        return (
            <div>
                <h3>MyReduxPage by lafeillou</h3>
                <pre>{JSON.stringify(store.getState())}</pre>
                <div>{store.getState().counterReducer.count}</div>
                <button onClick={this.add}>增加 + 1</button>
                <button onClick={this.reset}>重置</button>
                <hr/>
                <div>{store.getState().resetReducer.count}</div>
                <button onClick={this.mutiplue}>乘以 * 2</button>
                <button onClick={this.reset}>重置</button>
            </div>
        )
    }
}