import React from 'react';
import UserTopBar from '../components/UserTopBar';

export default function Home() {

  return (
    <>
      <UserTopBar />
      <div id='main' className='center-div'>
        <h1>Alan's Trivia Challenge</h1>
        <img className='logo' src={process.env.PUBLIC_URL + 'alogo-1.svg'} alt='placeholder logo'></img>
        <p>^this will change</p>
        <div className='content-div'>
          <p>
            7th Grade World History teacher by day, trivia extraordinaire by night, Alan is here to fulfill all of your trivial needs, and answer the question: "Are you smarter than Alan's 7th graders?" 
            <br /><br />
            Every game includes 20 questions to test your general knowledge, food & drinks from one of your local favorites, and a shoddy attempt at humor. Oh, and prizes! 
          </p>
        </div>
      </div>
    </>
  )
}