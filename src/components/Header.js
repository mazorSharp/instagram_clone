import React, { useState } from 'react';
import logo from '../Assets/instagram-logo.png';
import './Header.css'
import { Modal } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import App from '../App';
import Form from './Form';

const Header = ({ posts, setPosts, captionText, setCaptionText, postImage, setPostImage }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <div className="header-section-one">
        <Link to="/" element={<App />} >
        <img src={logo} alt="instargram logo" className="logo-Image"/>
        
        </Link>

      </div>
      <div className="header-section-two">
          <i className="fas fa-search search-Icon"></i>
          <input type="text" className="search-Input" placeholder="Search"></input>
      </div>
      <div className="header-section-three">
          <i className="header-Icon fas fa-home fa-lg"></i>
          <i className="header-Icon far fa-comments fa-lg"></i>
          <i className="header-Icon far fa-plus-square fa-lg" onClick={handleShow}></i>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Upload Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form 
                  posts={posts} 
                  setPosts={setPosts} 
                  captionText={captionText} 
                  setCaptionText={setCaptionText} 
                  postImage={postImage} 
                  setPostImage={setPostImage}
                />
              </Modal.Body>
            </Modal>            
          <i className="header-Icon far fa-compass fa-lg"></i>
          <i className="header-Icon far fa-heart fa-lg"></i>
          <img className="user-image" alt="user image"  src="https://img3.wikia.nocookie.net/__cb20100209013418/marveldatabase/images/2/27/Hit-Monkey_Vol_1_1_Textless.jpg"></img>
      </div>
    </div>
  )
};

export default Header;
