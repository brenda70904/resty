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
          <span>URL:</span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={() => setMethod('get')}>GET</span>
          <span id="post" onClick={() => setMethod('post')} >POST</span>
          <span id="put" onClick={() => setMethod('put')}>PUT</span>
          <span id="delete" onClick={() => setMethod('delete')}>DELETE</span>
        </label>
      </form>
    </>
  )
}

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
<>
  {/* <form onSubmit={this.handleSubmit}>
    <label >
      <span>URL: </span>
      <input name='url' type='text' />
      <button type="submit">GO!</button>
    </label>
    <label className="methods">
      <span id="get">GET</span>
      <span id="post">POST</span>
      <span id="put">PUT</span>
      <span id="delete">DELETE</span>
    </label>
  </form> */}
</>
//     );
//   }
// }

export default Form;
