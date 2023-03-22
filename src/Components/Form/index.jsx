import React, { useState } from 'react';
import './Form.scss';

const Form = (props) => {

  let { handleApiCall } = props;
  let [method, setMethod] = useState('get');
  let handleSubmit = e => {
    e.preventDefault();
    let formData = {
      method: method,
      url: e.target.url.value,
    };
    console.log("formData", formData);
    handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span >API URL:</span>
          <input data-testid="input" name='url' type='text' required/>
          <button data-testid="button" type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={() => setMethod('GET')}>GET</span>
          <span id="post" onClick={() => setMethod('POST')} >POST</span>
          <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  )
}

export default Form;
