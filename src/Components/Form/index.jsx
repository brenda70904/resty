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
          <input data-testid="inputUrl" name='url' type='text' required />
          <button data-testid="button" type="submit">GO!</button>
        </label>
        <lable>JSON data
          <textarea name="textArea" rows="4" cols="50" />
        </lable>
        <label className="methods">
          <span
            data-testid="get-method"
            style={{ background: method === "GET" ? 'red' : "#ccc " }}
            id="get"
            onClick={(e) => setMethod(e.target.innerText)}>
            GET
          </span>
          <span
            style={{ background: method === "POST" ? 'red' : "#ccc " }}
            id="post"
            onClick={(e) => setMethod(e.target.innerText)} >
            POST
          </span>
          <span
            style={{ background: method === "PUT" ? 'red' : "#ccc " }}
            id="put"
            onClick={(e) => setMethod(e.target.innerText)}>
            PUT
          </span>
          <span
            style={{ background: method === "DELETE" ? 'red' : "#ccc " }}
            id="delete"
            onClick={(e) => setMethod(e.target.innerText)}>
            DELETE
          </span>
        </label>
      </form>
    </>
  )
}

export default Form;


// e.target.innertext