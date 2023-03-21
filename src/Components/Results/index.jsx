import React from 'react';
import './Result.scss';
const Results = (props) => {
  const { data } = props;
  return (
    <>
      {
      data ?
        <section>
          <pre > {JSON.stringify(data, undefined, 2)}</pre>
        </section>
        : null
        }
    </>
  )
}

export default Results;
