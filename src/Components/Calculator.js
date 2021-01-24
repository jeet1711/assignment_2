import React, {Component} from "react";
import './Calculator.css';

class Calculator extends Component {
    state={
        count: '0'
    }

    pressed = (digit) => {
        const count = this.state.count
        this.setState({
            count: count==='0'?String(digit):count+digit
        })
    };

    calculate = () => {
        const count = this.state.count
        this.setState({
            count: eval(count)
        })
    }

    reset = () => {
        const count = this.state.count
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <input value = {this.state.count} /><br/>
                <button onClick={() => this.pressed(1)}>1</button>
                <button onClick={() => this.pressed(2)}>2</button>
                <button onClick={() => this.pressed(3)}>3</button><br/>
                <button onClick={() => this.pressed(4)}>4</button>
                <button onClick={() => this.pressed(5)}>5</button>
                <button onClick={() => this.pressed(6)}>6</button><br/>
                <button onClick={() => this.pressed(7)}>7</button>
                <button onClick={() => this.pressed(8)}>8</button>
                <button onClick={() => this.pressed(9)}>9</button><br/>
                <button onClick={() => this.pressed(0)}>0</button>
                <button onClick={() => this.pressed('+')}>+</button>
                <button onClick={() => this.pressed('-')}>-</button><br/>
                <button onClick={() => this.pressed('*')}>*</button>
                <button onClick={() => this.pressed('/')}>/</button>
                <button onClick={() => this.calculate()}>=</button><br/>
                <button className="reset-button" onClick={() => this.reset()}>RESET</button>
            </div>
        )
    }
}

export default Calculator;