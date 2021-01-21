import React, {Component} from "react";
import {FormGroup, Input, Label} from "reactstrap";
import PropTypes from "prop-types";

class InputFormGroup extends Component {
  render() {
    let {
      label,
      error,
      name,
      value,
      onChange,
      onBlur,
      placeholder,
      id,
      disabled = false,
      options = null,
    } = this.props;

    return (
      <FormGroup>
        <Label>
          {label}
        </Label>

        <Input
          id={id}
          type="text"
          name={name}
          disabled={disabled}
          onChange={options ? options.handleChange : onChange}
          onBlur={options ? options.handleBlur : onBlur}
          value={options ? options.values[name] : value}
          placeholder={placeholder}
          className="form-control"
          {...this.props}
        />

        <span style={{color: "red"}}>
          {(options && !error) ? (options.touched[name] && options.errors[name]) : error}
        </span>
      </FormGroup>
    );
  }
}

InputFormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  options: PropTypes.object,
  error: PropTypes.string,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default InputFormGroup;
