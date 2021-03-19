import { makeAsyncSelect } from '../../async/dist/react-select.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.esm.js';
import { m as manageState } from '../../dist/stateManager-fe0be034.esm.js';
import { S as Select } from '../../dist/Select-a5fc8e6a.esm.js';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/defineProperty';
import '../../dist/index-89147fe9.esm.js';
import '@emotion/react';
import '@babel/runtime/helpers/taggedTemplateLiteral';
import '@babel/runtime/helpers/typeof';
import 'react-input-autosize';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/inherits';
import 'react';
import 'react-dom';
import '@babel/runtime/helpers/toConsumableArray';
import 'memoize-one';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
