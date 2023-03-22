import React from 'react';
import './Result.scss';

const Results = (props) => {
  const { data } = props;
  return (
    <>
      {
      data ?
        <section>
          <pre data-testid="result" > {JSON.stringify(data, undefined, 2)}</pre>
        </section>
        : null
        }
    </>
  )
}

export default Results;
