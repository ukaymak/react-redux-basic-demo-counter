import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increaseByTwoCounter } from '../redux/actions/counterActions';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';



class IncreaseByTwo extends Component {
    render() {
        return (
            <div>
                <Button outline color="secondary" onClick={()=> this.props.dispatch(increaseByTwoCounter())}>2 arttır</Button>{' '}

            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwo);