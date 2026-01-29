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

      <button onClick={() => {
        let copy = [...글제목];
        copy = copy.sort();
        set글제목(copy);
      }}>가나다순정렬</button>

      <div className='list'>
        <h4>{글제목[0]} <span onClick={() => setThumb(thumb + 1)}>👍</span> {thumb} </h4>
        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          set글제목(copy);
        }}>버튼</button>
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
      {/* 함수들을 태그를 사용해서 불러오기가 가능 */}
        <Modal></Modal>
        <Modal/>
      
    </div>
  );
}

// 하나의 덩어리를 함수화해서 사용가능(컴포넌트화)

// 컴포넌트로 만들면 좋은 경우
// 1. 반복적인 html 축약
// 2. 큰 페이지들 반복
// 3.자주 변경되는 것들
function Modal() {
  return (
    // 리액트 상에서는 <> 문법 사용가능(의미 없는 공간을 의미함)
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
