import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {increaseCounter} from '../redux/actions/counterActions';
import { Button } from 'reactstrap';



 class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button outline color="success" onClick ={()=> this.props.dispatch(increaseCounter())}>1 arttır</Button>{' '}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);