import React, { useState } from 'react';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

const App = () => {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});

const callApi = async (requestParams) => {
    let response = await axios(requestParams)
    setData(response.data);
    setRequestParams(requestParams); 
  }

  return (
    <>
      <Header />
      <div data-testid="method" >Request Method : {requestParams.method}</div>
      <div data-testid="url" >URL : {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}


export default App;
