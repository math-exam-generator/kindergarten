import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import Head from "./_head";
import Table from "./_table";
import get from "lodash/get";
class Home extends Component {
  render() {
    const { mathExamStatus } = this.props;
    return (
      <div className="wrapper d-flex flex-column flex-column">
        <div className="head mt-4 mb-3 hidden-print">
          <div className="d-flex flex-column align-items-center">
            <h2 className="mb-2">算数作业生成器</h2>
            <h4 className="mb-5">Math exam generator</h4>
          </div>
          <Head />
        </div>
        {get(mathExamStatus, "loading", false) ? (
          <LinearProgress className="hidden-print" />
        ) : (
          <div className="table-top hidden-print" />
        )}
        <div className="flex1 table">
          <Table data={get(mathExamStatus, "data")} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mathExamStatus: state.mathExamStatus
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign({}, bindActionCreators({}, dispatch), {
    dispatch
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
