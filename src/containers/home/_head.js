import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Slider from "@material-ui/lab/Slider";
import Button from "@material-ui/core/Button";
import get from "lodash/get";

//import redux
import { examGenerateRequest } from "moudles/home/action";

class Head extends Component {
  state = {
    operate: "additive",
    scope: 10,
    qty: 60
  };
  handleModeChange = event => {
    this.setState({ operate: event.target.value });
  };
  handleScropeChange = (event, value) =>
    this.setState({ scope: value < 10 ? 10 : value });
  handleQtyChange = (event, value) =>
    this.setState({ qty: value < 60 ? 60 : value });
  examGenerateRequest = () => {
    const payload = this.state;
    this.props.examGenerateRequest && this.props.examGenerateRequest(payload);
  };
  render() {
    const { mathExamStatus } = this.props;
    return (
      <div className="d-flex">
        <FormControl className="flex1">
          <FormLabel component="legend">运算方式</FormLabel>
          <FormHelperText className="mb-1">加法或减法运算。</FormHelperText>
          <RadioGroup
            aria-label="operate"
            name="operate"
            value={this.state.operate}
            onChange={this.handleModeChange}
            className="d-flex flex-row"
          >
            <FormControlLabel
              value="additive"
              control={<Radio color="primary" />}
              label="加法运算"
            />
            <FormControlLabel
              value="subtraction"
              control={<Radio color="primary" />}
              label="减法运算"
            />
          </RadioGroup>
        </FormControl>
        <FormControl className="flex1 mr-5">
          <FormLabel component="legend">运算范围</FormLabel>
          <FormHelperText className="mb-3">
            选择10 ~ 100之间数字。
          </FormHelperText>
          <div className="d-flex align-items-center">
            <h3 className="mr-2 mb-0">{this.state.scope}</h3>
            <Slider
              value={this.state.scope}
              min={0}
              max={100}
              step={10}
              onChange={this.handleScropeChange}
            />
          </div>
        </FormControl>
        <FormControl className="flex1 mr-5">
          <FormLabel component="legend">试题数量</FormLabel>
          <FormHelperText className="mb-3">
            A4纸单张打印数量为60道题，最多生成数量为600道。
          </FormHelperText>
          <div className="d-flex align-items-center">
            <h3 className="mr-2 mb-0">{this.state.qty}</h3>
            <Slider
              value={this.state.qty}
              min={0}
              max={600}
              step={60}
              onChange={this.handleQtyChange}
            />
          </div>
        </FormControl>
        <div className="d-flex flex-column">
          <Button
            className="mb-3"
            variant="contained"
            color="primary"
            onClick={this.examGenerateRequest}
            disabled={get(mathExamStatus, "loading", false)}
          >
            生成试题
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.print();
            }}
            disabled={!get(mathExamStatus, "data")}
          >
            打印试题
          </Button>
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
  return Object.assign(
    {},
    bindActionCreators({ examGenerateRequest }, dispatch),
    {
      dispatch
    }
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Head);
