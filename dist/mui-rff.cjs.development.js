'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactFinalForm = require('react-final-form');
var TextField$1 = _interopDefault(require('@material-ui/core/TextField'));
var MuiAutocomplete = _interopDefault(require('@material-ui/lab/Autocomplete'));
var core = require('@material-ui/core');
var pickers = require('@material-ui/pickers');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function ErrorMessage(_ref) {
  var showError = _ref.showError,
      meta = _ref.meta,
      formHelperTextProps = _ref.formHelperTextProps,
      helperText = _ref.helperText;

  if (showError) {
    return React.createElement(core.FormHelperText, Object.assign({}, formHelperTextProps), meta.error || meta.submitError);
  } else if (!!helperText) {
    return React.createElement(core.FormHelperText, Object.assign({}, formHelperTextProps), helperText);
  } else {
    return React.createElement(React.Fragment, null);
  }
}
var config = {
  subscription: {
    error: true,
    submitError: true,
    dirtySinceLastSubmit: true,
    touched: true,
    modified: true
  }
};
function useFieldForErrors(name) {
  return reactFinalForm.useField(name, config);
}
function showErrorOnChange(_ref2) {
  var _ref2$meta = _ref2.meta,
      submitError = _ref2$meta.submitError,
      dirtySinceLastSubmit = _ref2$meta.dirtySinceLastSubmit,
      error = _ref2$meta.error,
      touched = _ref2$meta.touched,
      modified = _ref2$meta.modified;
  return !!((submitError && !dirtySinceLastSubmit || error) && (touched || modified));
}
function showErrorOnBlur(_ref3) {
  var _ref3$meta = _ref3.meta,
      submitError = _ref3$meta.submitError,
      dirtySinceLastSubmit = _ref3$meta.dirtySinceLastSubmit,
      error = _ref3$meta.error,
      touched = _ref3$meta.touched;
  return !!((submitError && !dirtySinceLastSubmit || error) && touched);
}

var Autocomplete = function Autocomplete(props) {
  var name = props.name,
      fieldProps = props.fieldProps,
      rest = _objectWithoutPropertiesLoose(props, ["name", "fieldProps"]);

  return React.createElement(reactFinalForm.Field, Object.assign({
    name: name,
    render: function render(fieldRenderProps) {
      return React.createElement(AutocompleteWrapper, Object.assign({}, fieldRenderProps, rest));
    }
  }, fieldProps));
};

var AutocompleteWrapper = function AutocompleteWrapper(props) {
  var _props$input = props.input,
      name = _props$input.name,
      onChange = _props$input.onChange,
      value = _props$input.value,
      restInput = _objectWithoutPropertiesLoose(_props$input, ["name", "onChange", "value"]),
      meta = props.meta,
      options = props.options,
      label = props.label,
      required = props.required,
      multiple = props.multiple,
      textFieldProps = props.textFieldProps,
      getOptionValue = props.getOptionValue,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      rest = _objectWithoutPropertiesLoose(props, ["input", "meta", "options", "label", "required", "multiple", "textFieldProps", "getOptionValue", "showError"]);

  function getValue(values) {
    if (!getOptionValue) {
      return values;
    } // ternary hell...


    return multiple ? values ? values.map(getOptionValue) : null : values ? getOptionValue(values) : null;
  }

  var helperText = rest.helperText,
      lessrest = _objectWithoutPropertiesLoose(rest, ["helperText"]);

  var _ref = textFieldProps || {},
      variant = _ref.variant,
      restTextFieldProps = _objectWithoutPropertiesLoose(_ref, ["variant"]); // yuck...


  var defaultValue = null;

  if (!getOptionValue) {
    defaultValue = value;
  } else if (value !== null) {
    options.forEach(function (option) {
      var optionValue = getOptionValue(option);

      if (multiple) {
        if (!defaultValue) defaultValue = [];
        value.forEach(function (v) {
          if (v === optionValue) {
            defaultValue.push(option);
          }
        });
      } else {
        if (value === optionValue) {
          defaultValue = option;
        }
      }
    });
  }

  var onChangeFunc = function onChangeFunc(_e, values) {
    return onChange(getValue(values));
  };

  var error = meta.error,
      submitError = meta.submitError;
  var isError = showError({
    meta: meta
  });
  return React.createElement(MuiAutocomplete, Object.assign({
    multiple: multiple,
    onChange: onChangeFunc,
    options: options,
    value: defaultValue,
    renderInput: function renderInput(params) {
      return React.createElement(TextField$1, Object.assign({
        label: label,
        required: required,
        fullWidth: true,
        helperText: isError ? error || submitError : helperText,
        error: isError,
        name: name,
        variant: variant,
        inputProps: _extends({
          required: required
        }, restInput)
      }, params, restTextFieldProps));
    }
  }, lessrest));
};

function Checkboxes(props) {
  var required = props.required,
      label = props.label,
      data = props.data,
      name = props.name,
      helperText = props.helperText,
      fieldProps = props.fieldProps,
      formControlProps = props.formControlProps,
      formGroupProps = props.formGroupProps,
      formLabelProps = props.formLabelProps,
      formControlLabelProps = props.formControlLabelProps,
      formHelperTextProps = props.formHelperTextProps,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      restCheckboxes = _objectWithoutPropertiesLoose(props, ["required", "label", "data", "name", "helperText", "fieldProps", "formControlProps", "formGroupProps", "formLabelProps", "formControlLabelProps", "formHelperTextProps", "showError"]);

  var itemsData = !Array.isArray(data) ? [data] : data;
  var single = itemsData.length === 1;
  var field = useFieldForErrors(name);
  var isError = showError(field);
  return React.createElement(core.FormControl, Object.assign({
    required: required,
    error: isError
  }, formControlProps), label ? React.createElement(core.FormLabel, Object.assign({}, formLabelProps), label) : React.createElement(React.Fragment, null), React.createElement(core.FormGroup, Object.assign({}, formGroupProps), itemsData.map(function (item, idx) {
    return React.createElement(core.FormControlLabel, Object.assign({
      key: idx,
      name: name,
      label: item.label,
      value: single ? undefined : item.value,
      disabled: item.disabled,
      control: React.createElement(reactFinalForm.Field, Object.assign({
        type: "checkbox",
        name: name,
        render: function render(_ref) {
          var _ref$input = _ref.input,
              name = _ref$input.name,
              value = _ref$input.value,
              onChange = _ref$input.onChange,
              checked = _ref$input.checked,
              restInput = _objectWithoutPropertiesLoose(_ref$input, ["name", "value", "onChange", "checked"]);

          return React.createElement(core.Checkbox, Object.assign({
            name: name,
            value: value,
            onChange: onChange,
            checked: checked,
            disabled: item.disabled,
            inputProps: _extends({
              required: required
            }, restInput)
          }, restCheckboxes));
        }
      }, fieldProps))
    }, formControlLabelProps));
  })), React.createElement(ErrorMessage, {
    showError: isError,
    meta: field.meta,
    formHelperTextProps: formHelperTextProps,
    helperText: helperText
  }));
}

function Switches(props) {
  var name = props.name,
      data = props.data,
      label = props.label,
      required = props.required,
      helperText = props.helperText,
      fieldProps = props.fieldProps,
      formControlProps = props.formControlProps,
      formGroupProps = props.formGroupProps,
      formLabelProps = props.formLabelProps,
      formControlLabelProps = props.formControlLabelProps,
      formHelperTextProps = props.formHelperTextProps,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      restSwitches = _objectWithoutPropertiesLoose(props, ["name", "data", "label", "required", "helperText", "fieldProps", "formControlProps", "formGroupProps", "formLabelProps", "formControlLabelProps", "formHelperTextProps", "showError"]);

  var itemsData = !Array.isArray(data) ? [data] : data;
  var single = itemsData.length === 1;
  var field = useFieldForErrors(name);
  var isError = showError(field);
  return React.createElement(core.FormControl, Object.assign({
    required: required,
    error: isError
  }, formControlProps), label ? React.createElement(core.FormLabel, Object.assign({}, formLabelProps), label) : React.createElement(React.Fragment, null), React.createElement(core.FormGroup, Object.assign({}, formGroupProps), itemsData.map(function (item, idx) {
    return React.createElement(core.FormControlLabel, Object.assign({
      key: idx,
      name: name,
      label: item.label,
      value: single ? undefined : item.value,
      disabled: item.disabled,
      control: React.createElement(reactFinalForm.Field, Object.assign({
        type: "checkbox",
        name: name,
        render: function render(_ref) {
          var _ref$input = _ref.input,
              name = _ref$input.name,
              value = _ref$input.value,
              onChange = _ref$input.onChange,
              checked = _ref$input.checked,
              restInput = _objectWithoutPropertiesLoose(_ref$input, ["name", "value", "onChange", "checked"]);

          return React.createElement(core.Switch, Object.assign({
            name: name,
            value: value,
            onChange: onChange,
            checked: checked,
            disabled: item.disabled,
            required: required,
            inputProps: _extends({
              required: required
            }, restInput)
          }, restSwitches));
        }
      }, fieldProps))
    }, formControlLabelProps));
  })), React.createElement(ErrorMessage, {
    showError: isError,
    meta: field.meta,
    formHelperTextProps: formHelperTextProps,
    helperText: helperText
  }));
}

function Radios(props) {
  var name = props.name,
      data = props.data,
      label = props.label,
      required = props.required,
      helperText = props.helperText,
      formLabelProps = props.formLabelProps,
      formControlLabelProps = props.formControlLabelProps,
      fieldProps = props.fieldProps,
      formControlProps = props.formControlProps,
      radioGroupProps = props.radioGroupProps,
      formHelperTextProps = props.formHelperTextProps,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      restRadios = _objectWithoutPropertiesLoose(props, ["name", "data", "label", "required", "helperText", "formLabelProps", "formControlLabelProps", "fieldProps", "formControlProps", "radioGroupProps", "formHelperTextProps", "showError"]);

  var field = useFieldForErrors(name);
  var isError = showError(field);
  return React.createElement(core.FormControl, Object.assign({
    required: required,
    error: isError
  }, formControlProps), !!label && React.createElement(core.FormLabel, Object.assign({}, formLabelProps), label), React.createElement(core.RadioGroup, Object.assign({}, radioGroupProps), data.map(function (item, idx) {
    return React.createElement(core.FormControlLabel, Object.assign({
      key: idx,
      name: name,
      label: item.label,
      value: item.value,
      disabled: item.disabled,
      control: React.createElement(reactFinalForm.Field, Object.assign({
        name: name,
        type: "radio",
        render: function render(_ref) {
          var _ref$input = _ref.input,
              name = _ref$input.name,
              value = _ref$input.value,
              onChange = _ref$input.onChange,
              checked = _ref$input.checked,
              restInput = _objectWithoutPropertiesLoose(_ref$input, ["name", "value", "onChange", "checked", "disabled"]);

          return React.createElement(core.Radio, Object.assign({
            name: name,
            value: value,
            onChange: onChange,
            checked: checked,
            disabled: item.disabled,
            required: required,
            inputProps: _extends({
              required: required
            }, restInput)
          }, restRadios));
        }
      }, fieldProps))
    }, formControlLabelProps));
  })), React.createElement(ErrorMessage, {
    showError: isError,
    meta: field.meta,
    formHelperTextProps: formHelperTextProps,
    helperText: helperText
  }));
}

function Select(props) {
  var name = props.name,
      label = props.label,
      data = props.data,
      children = props.children,
      required = props.required,
      multiple = props.multiple,
      helperText = props.helperText,
      fieldProps = props.fieldProps,
      inputLabelProps = props.inputLabelProps,
      formControlProps = props.formControlProps,
      formHelperTextProps = props.formHelperTextProps,
      menuItemProps = props.menuItemProps,
      labelWidth = props.labelWidth,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      restSelectProps = _objectWithoutPropertiesLoose(props, ["name", "label", "data", "children", "required", "multiple", "helperText", "fieldProps", "inputLabelProps", "formControlProps", "formHelperTextProps", "menuItemProps", "labelWidth", "showError"]);

  if (!data && !children) {
    throw new Error('Please specify either children or data as an attribute.');
  } // This is for supporting the special case of variant="outlined"
  // Fixes: https://github.com/lookfirst/mui-rff/issues/91


  var variant = restSelectProps.variant;
  var inputLabel = React.useRef(null);

  var _React$useState = React.useState(0),
      labelWidthState = _React$useState[0],
      setLabelWidthState = _React$useState[1];

  React.useEffect(function () {
    if (label) {
      setLabelWidthState(inputLabel.current.offsetWidth);
    }
  }, [label]);
  var field = useFieldForErrors(name);
  var isError = showError(field);
  return React.createElement(core.FormControl, Object.assign({
    required: required,
    error: isError,
    fullWidth: true,
    variant: variant
  }, formControlProps), !!label && React.createElement(core.InputLabel, Object.assign({
    ref: inputLabel,
    htmlFor: name
  }, inputLabelProps), label), React.createElement(reactFinalForm.Field, Object.assign({
    name: name,
    render: function render(_ref) {
      var _ref$input = _ref.input,
          name = _ref$input.name,
          value = _ref$input.value,
          onChange = _ref$input.onChange,
          restInput = _objectWithoutPropertiesLoose(_ref$input, ["name", "value", "onChange", "checked"]);

      // prevents an error that happens if you don't have initialValues defined in advance
      var finalValue = multiple && !value ? [] : value;
      return React.createElement(core.Select, Object.assign({
        name: name,
        value: finalValue,
        onChange: onChange,
        multiple: multiple,
        label: label,
        labelWidth: variant === 'outlined' && !!label ? labelWidthState : labelWidth,
        inputProps: _extends({
          required: required
        }, restInput)
      }, restSelectProps), data ? data.map(function (item) {
        return React.createElement(core.MenuItem, Object.assign({
          value: item.value,
          key: item.value,
          disabled: item.disabled
        }, menuItemProps), item.label);
      }) : children);
    }
  }, fieldProps)), React.createElement(ErrorMessage, {
    showError: isError,
    meta: field.meta,
    formHelperTextProps: formHelperTextProps,
    helperText: helperText
  }));
}

function pickerProviderWrapper(dateFunsUtils, component) {
  return dateFunsUtils ? React.createElement(pickers.MuiPickersUtilsProvider, {
    utils: dateFunsUtils
  }, component) : component;
}

function KeyboardDatePicker(props) {
  var name = props.name,
      fieldProps = props.fieldProps,
      rest = _objectWithoutPropertiesLoose(props, ["name", "fieldProps"]);

  return React.createElement(reactFinalForm.Field, Object.assign({
    name: name,
    render: function render(fieldRenderProps) {
      return React.createElement(KeyboardDatePickerWrapper, Object.assign({}, fieldRenderProps, rest));
    }
  }, fieldProps));
}

function KeyboardDatePickerWrapper(props) {
  var _props$input = props.input,
      name = _props$input.name,
      onChange = _props$input.onChange,
      value = _props$input.value,
      restInput = _objectWithoutPropertiesLoose(_props$input, ["name", "onChange", "value"]),
      meta = props.meta,
      dateFunsUtils = props.dateFunsUtils,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      rest = _objectWithoutPropertiesLoose(props, ["input", "meta", "dateFunsUtils", "showError"]);

  var error = meta.error,
      submitError = meta.submitError;
  var isError = showError({
    meta: meta
  });

  var helperText = rest.helperText,
      lessrest = _objectWithoutPropertiesLoose(rest, ["helperText"]);

  return pickerProviderWrapper(dateFunsUtils, React.createElement(pickers.KeyboardDatePicker, Object.assign({
    disableToolbar: true,
    fullWidth: true,
    autoOk: true,
    helperText: isError ? error || submitError : helperText,
    error: isError,
    onChange: onChange,
    name: name,
    value: value === '' ? null : value,
    inputProps: restInput
  }, lessrest)));
}

function KeyboardDateTimePicker(props) {
  var name = props.name,
      fieldProps = props.fieldProps,
      rest = _objectWithoutPropertiesLoose(props, ["name", "fieldProps"]);

  return React.createElement(reactFinalForm.Field, Object.assign({
    name: name,
    render: function render(fieldRenderProps) {
      return React.createElement(KeyboardDateTimePickerWrapper, Object.assign({}, fieldRenderProps, rest));
    }
  }, fieldProps));
}

function KeyboardDateTimePickerWrapper(props) {
  var _props$input = props.input,
      name = _props$input.name,
      onChange = _props$input.onChange,
      value = _props$input.value,
      restInput = _objectWithoutPropertiesLoose(_props$input, ["name", "onChange", "value"]),
      meta = props.meta,
      dateFunsUtils = props.dateFunsUtils,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      rest = _objectWithoutPropertiesLoose(props, ["input", "meta", "dateFunsUtils", "showError"]);

  var error = meta.error,
      submitError = meta.submitError;
  var isError = showError({
    meta: meta
  });

  var helperText = rest.helperText,
      lessrest = _objectWithoutPropertiesLoose(rest, ["helperText"]);

  return pickerProviderWrapper(dateFunsUtils, React.createElement(pickers.KeyboardDateTimePicker, Object.assign({
    fullWidth: true,
    autoOk: true,
    helperText: isError ? error || submitError : helperText,
    error: isError,
    onChange: onChange,
    name: name,
    value: value === '' ? null : value,
    inputProps: restInput
  }, lessrest)));
}

function DatePicker(props) {
  var name = props.name,
      fieldProps = props.fieldProps,
      rest = _objectWithoutPropertiesLoose(props, ["name", "fieldProps"]);

  return React.createElement(reactFinalForm.Field, Object.assign({
    name: name,
    render: function render(fieldRenderProps) {
      return React.createElement(DatePickerWrapper, Object.assign({}, fieldRenderProps, rest));
    }
  }, fieldProps));
}

function DatePickerWrapper(props) {
  var _props$input = props.input,
      name = _props$input.name,
      onChange = _props$input.onChange,
      value = _props$input.value,
      restInput = _objectWithoutPropertiesLoose(_props$input, ["name", "onChange", "value"]),
      meta = props.meta,
      dateFunsUtils = props.dateFunsUtils,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      rest = _objectWithoutPropertiesLoose(props, ["input", "meta", "dateFunsUtils", "showError"]);

  var error = meta.error,
      submitError = meta.submitError;
  var isError = showError({
    meta: meta
  });

  var helperText = rest.helperText,
      lessrest = _objectWithoutPropertiesLoose(rest, ["helperText"]);

  return pickerProviderWrapper(dateFunsUtils, React.createElement(pickers.DatePicker, Object.assign({
    fullWidth: true,
    autoOk: true,
    helperText: isError ? error || submitError : helperText,
    error: isError,
    onChange: onChange,
    name: name,
    value: value === '' ? null : value
  }, lessrest, {
    inputProps: restInput
  })));
}

function DateTimePicker(props) {
  var name = props.name,
      fieldProps = props.fieldProps,
      rest = _objectWithoutPropertiesLoose(props, ["name", "fieldProps"]);

  return React.createElement(reactFinalForm.Field, Object.assign({
    name: name,
    render: function render(fieldRenderProps) {
      return React.createElement(DateTimePickerWrapper, Object.assign({}, fieldRenderProps, rest));
    }
  }, fieldProps));
}

function DateTimePickerWrapper(props) {
  var _props$input = props.input,
      name = _props$input.name,
      onChange = _props$input.onChange,
      value = _props$input.value,
      restInput = _objectWithoutPropertiesLoose(_props$input, ["name", "onChange", "value"]),
      meta = props.meta,
      dateFunsUtils = props.dateFunsUtils,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      rest = _objectWithoutPropertiesLoose(props, ["input", "meta", "dateFunsUtils", "showError"]);

  var error = meta.error,
      submitError = meta.submitError;
  var isError = showError({
    meta: meta
  });

  var helperText = rest.helperText,
      lessrest = _objectWithoutPropertiesLoose(rest, ["helperText"]);

  return pickerProviderWrapper(dateFunsUtils, React.createElement(pickers.DateTimePicker, Object.assign({
    fullWidth: true,
    autoOk: true,
    helperText: isError ? error || submitError : helperText,
    error: isError,
    onChange: onChange,
    name: name,
    value: value === '' ? null : value
  }, lessrest, {
    inputProps: restInput
  })));
}

function KeyboardTimePicker(props) {
  var name = props.name,
      fieldProps = props.fieldProps,
      rest = _objectWithoutPropertiesLoose(props, ["name", "fieldProps"]);

  return React.createElement(reactFinalForm.Field, Object.assign({
    name: name,
    render: function render(fieldRenderProps) {
      return React.createElement(KeyboardTimePickerWrapper, Object.assign({}, fieldRenderProps, rest));
    }
  }, fieldProps));
}

function KeyboardTimePickerWrapper(props) {
  var _props$input = props.input,
      name = _props$input.name,
      onChange = _props$input.onChange,
      value = _props$input.value,
      restInput = _objectWithoutPropertiesLoose(_props$input, ["name", "onChange", "value"]),
      meta = props.meta,
      dateFunsUtils = props.dateFunsUtils,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      rest = _objectWithoutPropertiesLoose(props, ["input", "meta", "dateFunsUtils", "showError"]);

  var error = meta.error,
      submitError = meta.submitError;
  var isError = showError({
    meta: meta
  });

  var helperText = rest.helperText,
      lessrest = _objectWithoutPropertiesLoose(rest, ["helperText"]);

  return pickerProviderWrapper(dateFunsUtils, React.createElement(pickers.KeyboardTimePicker, Object.assign({
    fullWidth: true,
    autoOk: true,
    helperText: isError ? error || submitError : helperText,
    error: isError,
    onChange: onChange,
    name: name,
    value: value === '' ? null : value
  }, lessrest, {
    inputProps: restInput
  })));
}

function TimePicker(props) {
  var name = props.name,
      fieldProps = props.fieldProps,
      rest = _objectWithoutPropertiesLoose(props, ["name", "fieldProps"]);

  return React.createElement(reactFinalForm.Field, Object.assign({
    name: name,
    render: function render(fieldRenderProps) {
      return React.createElement(TimePickerWrapper, Object.assign({}, fieldRenderProps, rest));
    }
  }, fieldProps));
}

function TimePickerWrapper(props) {
  var _props$input = props.input,
      name = _props$input.name,
      onChange = _props$input.onChange,
      value = _props$input.value,
      restInput = _objectWithoutPropertiesLoose(_props$input, ["name", "onChange", "value"]),
      meta = props.meta,
      dateFunsUtils = props.dateFunsUtils,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      rest = _objectWithoutPropertiesLoose(props, ["input", "meta", "dateFunsUtils", "showError"]);

  var error = meta.error,
      submitError = meta.submitError;
  var isError = showError({
    meta: meta
  });

  var helperText = rest.helperText,
      lessrest = _objectWithoutPropertiesLoose(rest, ["helperText"]);

  return pickerProviderWrapper(dateFunsUtils, React.createElement(pickers.TimePicker, Object.assign({
    fullWidth: true,
    autoOk: true,
    helperText: isError ? error || submitError : helperText,
    error: isError,
    onChange: onChange,
    name: name,
    value: value === '' ? null : value
  }, lessrest, {
    inputProps: restInput
  })));
}

function TextField(props) {
  var name = props.name,
      type = props.type,
      fieldProps = props.fieldProps,
      rest = _objectWithoutPropertiesLoose(props, ["name", "type", "fieldProps"]);

  return React.createElement(reactFinalForm.Field, Object.assign({
    name: name,
    type: type,
    render: function render(_ref) {
      var input = _ref.input,
          meta = _ref.meta;
      return React.createElement(TextFieldWrapper, Object.assign({
        input: input,
        meta: meta,
        name: name,
        type: type
      }, rest));
    }
  }, fieldProps));
}
function TextFieldWrapper(props) {
  var _props$input = props.input,
      name = _props$input.name,
      value = _props$input.value,
      type = _props$input.type,
      onChange = _props$input.onChange,
      restInput = _objectWithoutPropertiesLoose(_props$input, ["name", "value", "type", "onChange"]),
      meta = props.meta,
      required = props.required,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? true : _props$fullWidth,
      helperText = props.helperText,
      _props$showError = props.showError,
      showError = _props$showError === void 0 ? showErrorOnChange : _props$showError,
      rest = _objectWithoutPropertiesLoose(props, ["input", "meta", "required", "fullWidth", "helperText", "showError"]);

  var error = meta.error,
      submitError = meta.submitError;
  var isError = showError({
    meta: meta
  });
  return React.createElement(core.TextField, Object.assign({
    fullWidth: fullWidth,
    helperText: isError ? error || submitError : helperText,
    error: isError,
    onChange: onChange,
    name: name,
    value: value,
    type: type,
    required: required,
    inputProps: _extends({
      required: required
    }, restInput)
  }, rest));
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
function get(obj, path, defaultValue) {
  var result = String.prototype.split.call(path, /[,[\].]+?/).filter(Boolean).reduce(function (res, key) {
    return res !== null && res !== undefined ? res[key] : res;
  }, obj);
  return result === undefined || result === obj ? defaultValue : result;
} // https://stackoverflow.com/questions/54733539/javascript-implementation-of-lodash-set-method


function set(obj, path, value) {
  if (Object(obj) !== obj) return obj; // When obj is not an object
  // If not yet an array, get the keys from the string-path

  if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || [];
  path.slice(0, -1).reduce(function (a, c, i) {
    return Object(a[c]) === a[c] // Does the key exist and is its value an object?
    ? // Yes: then follow that path
    a[c] : // No: create the key. Is the next key a potential array-index?
    a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] // Yes: assign a new array object
    : {};
  }, // No: assign a new plain object
  obj)[path[path.length - 1]] = value; // Finally assign the value to the last key

  return obj; // Return the top-level object to allow chaining
}

function normalizeValidationError(err, translator) {
  return err.inner.reduce(function (errors, innerError) {
    var el;
    var path = innerError.path,
        message = innerError.message;
    el = translator ? translator(innerError) : message;

    if (errors.hasOwnProperty(path)) {
      var prev = get(errors, path);
      prev.push(el);
      set(errors, path, prev);
    } else {
      set(errors, path, [el]);
    }

    return errors;
  }, {});
}
/**
 * Wraps the execution of a Yup schema to return an Promise<ValidationError>
 * where the key is the form field and the value is the error string.
 */


function makeValidate(validator, translator) {
  return function (values) {
    try {
      return Promise.resolve(_catch(function () {
        return Promise.resolve(validator.validate(values, {
          abortEarly: false
        })).then(function () {
          return {};
        });
      }, function (err) {
        return normalizeValidationError(err, translator);
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
/**
 * Wraps the sync execution of a Yup schema to return an ValidationError
 * where the key is the form field and the value is the error string.
 */

function makeValidateSync(validator, translator) {
  return function (values) {
    try {
      validator.validateSync(values, {
        abortEarly: false
      });
      return {};
    } catch (err) {
      return normalizeValidationError(err, translator);
    }
  };
}
/**
 * Uses the private _exclusive field in the schema to get whether or not
 * the field is marked as required or not.
 */

function makeRequired(schema) {
  var fields = schema.fields;
  return Object.keys(fields).reduce(function (accu, field) {
    if (fields[field].fields) {
      accu[field] = makeRequired(fields[field]);
    } else {
      accu[field] = !!fields[field]._exclusive.required;
    }

    return accu;
  }, {});
}

function Debug() {
  return React.createElement(reactFinalForm.FormSpy, {
    subscription: {
      values: true
    }
  }, function (_ref) {
    var values = _ref.values;
    return React.createElement("pre", null, JSON.stringify(values, undefined, 2));
  });
}

exports.Autocomplete = Autocomplete;
exports.Checkboxes = Checkboxes;
exports.DatePicker = DatePicker;
exports.DateTimePicker = DateTimePicker;
exports.Debug = Debug;
exports.ErrorMessage = ErrorMessage;
exports.KeyboardDatePicker = KeyboardDatePicker;
exports.KeyboardDateTimePicker = KeyboardDateTimePicker;
exports.KeyboardTimePicker = KeyboardTimePicker;
exports.Radios = Radios;
exports.Select = Select;
exports.Switches = Switches;
exports.TextField = TextField;
exports.TimePicker = TimePicker;
exports.makeRequired = makeRequired;
exports.makeValidate = makeValidate;
exports.makeValidateSync = makeValidateSync;
exports.showErrorOnBlur = showErrorOnBlur;
exports.showErrorOnChange = showErrorOnChange;
exports.useFieldForErrors = useFieldForErrors;
//# sourceMappingURL=mui-rff.cjs.development.js.map
