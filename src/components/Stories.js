import React from 'react';
import './Stories.css';
import blackwidow from '../Assets/black-Widow.png';
import captainAmerica from '../Assets/captain-America.jpg';
import hawkeye from '../Assets/hawkeye.jpg';
import hulk from '../Assets/hulk.png'; 
import ironMan from '../Assets/iron-Man.jpg';
import scarletWitch from '../Assets/scarlet-Witch.jpg';
import spiderMan from '../Assets/spiderman.jpg';
import thor from '../Assets/thor.jpg';
import vision from '../Assets/vision.jpg';

const Stories = () => {

  const stories = [
    { username: "black_Widow", usernameImg: blackwidow, id: Math.random() * 10000 },
    { username: "captain.america", usernameImg: captainAmerica, id: Math.random() * 10000 },
    { username: "hawkeye", usernameImg: hawkeye, id: Math.random() * 10000 },
    { username: "madgreen", usernameImg: hulk, id: Math.random() * 10000 },
    { username: "the.real.ironman", usernameImg: ironMan, id: Math.random() * 10000 },
    { username: "scarletwitch", usernameImg: scarletWitch, id: Math.random() * 10000 },
    { username: "spider.man", usernameImg: spiderMan, id: Math.random() * 10000 },
    { username: "thor.odinson", usernameImg: thor, id: Math.random() * 10000 },
    // { username: "vision", usernameImg: vision, id: Math.random() * 10000 },
  ]

  return (
    <div className="stories">
      {stories.map((item) => {
        return (
          <div className="story-Container" key={item.id}>
            <div 
              className="story-Image-Div"
              style={{
                width: "50px",
                height: "50px",
                background: `url(${item.usernameImg})`,
                backgroundSize: "120px",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                backgroundPosition: "center",
                outline: "2px solid red",
              }}>
            </div>
            <p className="story-Username">{item.username.length > 10 ? item.username.slice(0, 10) + "..." : item.username}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Stories;
