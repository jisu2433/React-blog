/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PostCard from './PostCard';
import StyledComponent from './index.style';

function App() {

const [글제목, 글제목변경] = useState(['검정치마 노래 추천', '서촌 카페 추천', '강원도 여행지 추천']);
const [하트, 하트변경] = useState(0);
const [modal, modal변경] = useState(true);
const [누른제목, 누른제목변경] = useState(0);
const [입력값, 입력값변경] = useState('');
const [날짜, 날짜변경] = useState(['1월 7일', '1월 8일', '1월 13일'])



const contents = {
  header: ['검정치마 노래 추천', '서촌 카페 추천', '강원도 여행지 추천'],
  dadate: ['1월 7일', '1월 8일', '1월 13일'],
}



return (
  <div className="App">
    <div className="black-nav">
      <div>개발 Blog</div>
    </div>
      {
        글제목.map(function(a, i){
          return (
          <div className='list' key={i}>
          <h3 onClick={ ()=>{누른제목변경(i)}} > { a } <span onClick={ () => {하트변경(하트 + 1)}}>💕</span> {하트} </h3>
          <p>{날짜[i]}</p>
          <hr/>
        </div>
        )
      })
    }

    <div className='publish'>
      <input onChange={(e)=>{입력값변경(e.target.value)}}/>
      <button onClick={()=>{
        var arrayCopy = [...글제목];
        arrayCopy.unshift(입력값);
        글제목변경(arrayCopy);
      }}>저장</button>
    </div>
    <button onClick={ ()=>{modal변경(!modal)}}>게시물 열고 닫기</button>
    {
      modal === true
      ? <Modal 글제목 = {글제목} 누른제목 = {누른제목} ></Modal>
      : null
    }
    

    </div>
  );
}
function Modal(props){
  return(
    <div className='modal'>
      <h2>{ props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )

}

export default App;
