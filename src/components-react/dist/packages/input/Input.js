import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState } from 'react';

var Input = function Input(props) {
  var title = props.title,
    type = props.type,
    onPressEnter = props.onPressEnter;
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var handleChange = function handleChange(e) {
    setData(e.target.value);
  };
  var rowPressEnter = function rowPressEnter(e) {
    if (e.key === "Enter") {
      onPressEnter && onPressEnter(data);
    }
  };
  var inputElement = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, title), /*#__PURE__*/React.createElement("input", {
    type: type,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    onKeyDown: function onKeyDown(e) {
      return rowPressEnter(e);
    }
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, inputElement);
};

export { Input as default };
