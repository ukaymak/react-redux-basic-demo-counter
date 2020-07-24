import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { clear } from "../redux/actions/counterActions";
import { Button } from 'reactstrap';


class Clear extends Component {
  render() {
    return (
      <div>
     
        <Button outline color="warning" onClick={() => this.props.dispatch(clear())}>Temizle</Button>

    
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(clear, dispatch) };
}

export default connect(mapDispatchToProps)(Clear);
