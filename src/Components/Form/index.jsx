import React, { useReducer } from 'react';
import './Form.scss';

export const inititalForm = {
  method: 'get',
  url: '',
}

export const formReducer = (state = inititalForm, action) => {
  switch (action.type) {
    case 'UPDATE_METHOD':
      return { ...state, method: action.payload };
    case 'UPDATE_URL':
      return { ...state, url: action.payload };
    default:
      return state;
  }
}



const Form = (props) => {

  const [state, dispatch ] = useReducer(formReducer, inititalForm);
  let { getRequest } = props;

  let handleSubmit = e => {
    e.preventDefault();
    let formData = {
      method: state.method,
      url: state.url,
    };
    getRequest(formData);
  }

  const changeUrl = (e) =>{
    let action = {
      type: 'UPDATE_URL',
      payload: e.target.value,
    }
    dispatch(action);
  }
  const changeMethod = (e) =>{
    let action = {
      type: 'UPDATE_METHOD',
      payload: e.target.id,
    }
    dispatch(action);
  }

return (
  <>
    <form onSubmit={handleSubmit}>
      <label >
        <span >API URL:</span>

        <input data-testid="inputUrl" name='url' type='text' required onChange={changeUrl}/>
        <button data-testid="button" type="submit">GO!</button>
      </label>

      <label>JSON data
        <textarea name="textArea" rows="4" cols="50" />
      </label>

      <label className="methods">
        <span
          data-testid="get-method"
          style={{ background: state.method === "get" ? '#9cc0e7' : "#ccc " }}
          id="get"
          onClick={changeMethod}>
          GET
        </span>
        <span
          style={{ background: state.method === "post" ? '#9cc0e7' : "#ccc " }}
          id="post"
          onClick={changeMethod} >
          POST
        </span>
        <span
          style={{ background: state.method === "put" ? '#9cc0e7' : "#ccc " }}
          id="put"
          onClick={changeMethod}>
          PUT
        </span>
        <span
          style={{ background: state.method === "delete" ? '#9cc0e7' : "#ccc " }}
          id="delete"
          onClick={changeMethod}>
          DELETE
        </span>
      </label>
    </form>
  </>
)
}

export default Form;
