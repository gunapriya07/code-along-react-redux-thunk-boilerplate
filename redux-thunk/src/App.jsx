import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './redux/Action';

function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          style={{ marginTop: '10px' }}
          onClick={() => dispatch(getData())}
          disabled={data.length > 0} 
        >
          Fetch data
        </button>
        {data.map((el, i) => (
          <div key={i} style={{ borderBottom: '1px solid lightgray'}}>
            <h2>{el.name}</h2>
            <p>{el.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
