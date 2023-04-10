// import React, { PureComponent } from 'react';

// class Counter extends PureComponent {
//   constructor(props) 
//   {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   handleClick = () => {
//     this.setState(prevState => ({ count: prevState.count + 1 }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;


import { PureComponent } from "react";

class Counter extends PureComponent {
    constructor(prop) {
        super(prop);
        this.state = {
            count: 0
        }
    }
    handli = () => {
        this.setState((pre) => {
            return ({ count: pre.count + 1 })
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handli}>Inc</button>
            </div>
        )
    }

}
export default Counter;