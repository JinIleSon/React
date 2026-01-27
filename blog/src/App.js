/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post ='강남 우동 맛집';
  let [글제목, set글제목] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [logo, setLogo] = useState('ReactBlog');

  let [thumb, setThumb] = useState(0);

  let num = [1,2,3];

  let [a, c] = [1, 2];

  // let a = num[0];
  // let c = num[1];

  return (
    <div className="App">
      <div style={{background: 'black', color: 'red'}}>
        <h4>{logo}</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={() => setThumb(thumb + 1)}>👍</span> {thumb} </h4>
        <button onClick={() => set글제목('여자 코트 추천')}></button>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
