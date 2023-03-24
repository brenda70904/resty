import { useEffect, useReducer } from 'react';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

export const initialState = {
  data: null,
  requestParams: {},
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET-PARAMS':
      return { ...state, requestParams: action.payload };
    case 'UPDATE-DATA':
      return { ...state, data: action.payload };
    default:
      return state;

  }
};

const App = () => {

  const [state, dispatch] = useReducer(appReducer, initialState);
  // let [data, setData] = useState(null);
  // let [requestParams, setRequestParams] = useState({});

  // const callApi = async (requestParams) => {
  //   let response = await axios(requestParams)
  //   setData(response.data);
  //   setRequestParams(requestParams);
  // }
  const getRequest = (requestParams) => {
    let action = {
      type: 'GET-PARAMS',
      payload: requestParams,
    }
    dispatch(action);
  }

  useEffect(() => {
    const callApi = async () => {
      if (state.requestParams.method && state.requestParams.url) {
        let response = await axios(state.requestParams);
        let action = {
          type: 'UPDATE-DATA',
          payload: response.data
        }
        dispatch(action);

      }

    };
    callApi();
  }, [state.requestParams]);

  return (
    <>
      <Header />
      <div data-testid="method" >Request Method : {state.requestParams.method}</div>
      <div data-testid="url" >URL : {state.requestParams.url}</div>
      <Form getRequest={getRequest} />
      <Results data={state.data} />
      <Footer />
    </>
  );
}


export default App;
