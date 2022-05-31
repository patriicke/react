import React,{Component} from "react";
class Counter extends Component{
    state={
        count: this.props.value
    }
    countStyle={
        padding: "0.3em 1em",
        borderRadius: "0.3em",
        marginRight: 10
    }
    whenZero={
            backgroundColor: "orange"
    }
    notZero={
        backgroundColor: "cyan"
    }
    btnStyle={
        backgroundColor: "gray",
        padding: "0.4em 1em",
        borderRadius: "0.4em",
        cursor: "pointer"
    }
    handleIncrement=()=>{
        this.setState( { count:this.state.count +1} );
    }
    render(){
        // console.log('props',this.props)
        return(
            <React.Fragment> 
                <div className="div">
                <span style={this.showStyles()}>{this.countShow()}</span>
                <button style={this.btnStyle} onClick={this.handleIncrement}>Increment</button>
                </div>
            </React.Fragment>
        );
    }
    countShow=()=>{
        const {count}=this.state
        return (count===0)? "Zero":count
    }

    showStyles() {
        let x = (this.state.count === 0) ? this.whenZero : this.notZero;
        let z = { ...x, ...this.countStyle };
        return z;
    }
}

export default Counter;