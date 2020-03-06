import React, {Component} from 'react'

class Ticker extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    this.mount = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000);
}
shouldComponentUpdate(nextProps, nextState){
  if(nextState.count % 3 === 0){
    return true;
  }
  else {return false;}
}
componentWillUnmount(){
    clearinterval(this.mount);


}

  render(){
    return(
<div>
      <div>The ticker is: {this.state.count}</div>
      <button id = "clear" onClick={this.unmountComponent}>Clear</button>
      </div>
    )
  }
}

export default Ticker;
