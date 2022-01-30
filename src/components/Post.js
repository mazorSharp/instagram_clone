import React, { useState, useEffect, useRef } from 'react';
import './Post.css';
import usernameImage from '../Assets/user-Image.jpg';
import { Modal } from 'react-bootstrap';

import moment from 'moment';

const Post = ({username, caption, imageUrl, posts, setPosts, post}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const now = new Date();
  const [toggleLike, setToggleLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [likeCount, setLikeCount] = useState(1);
  const [addComment, setAddComment] = useState("");
  const [commentBox, setCommentBox] = useState([{username: "", comment: addComment, id: Math.random() * 1000 }])
  const inputRef = useRef();

  const likeHandler = () => {
    if (toggleLike === false && likeCount > 0) {
      setLikeCount((count) => --count)
    } 
    if (toggleLike === true) {
      setLikeCount((count) => ++count)      
    }
  }

  useEffect(() => {
    likeHandler();
  }, [toggleLike]);

  const addCommentHandler = (e) => {
    setAddComment(e.target.value);    
  }

  const deleteHandler = () => {
    setPosts(posts.filter((element) => (element.id !== post.id)))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setCommentBox([
        ...commentBox,
        { username: username, comment: addComment, id: Math.random() * 1000}
    ]);
    setAddComment("");
  };

  const focus = () => {
    inputRef.current.focus()
  }

  // useEffect(() => {
  //   bookmarkHandler();
  // }, [bookmark])

  // const bookmarkHandler = () => {
  //   switch (bookmark) {
  //     case false:
  //       return "far fa-bookmark fa-lg";
  //       break;
  //     case true: 
  //       return "fas fa-boomark fa-lg";
  //       break;
  //     default:
  //       return;
  //   }
  // }

  return(
    <div className="post">

      <div className="post-Header">
        <img src={usernameImage} className="header-Username-Image" alt="username image"></img>  
        <h4 className="header-Username">{username}</h4>
        <i className="post-Header-Icon fas fa-ellipsis-h" onClick={handleShow}></i>
          <Modal show={show} onHide={handleClose} className="delete-Modal-Container">
            <Modal.Body>
              <div>
                <i className="delete-Post-Button fas fa-trash-alt fa-6x" onClick={deleteHandler}></i>
              </div>
            </Modal.Body>
          </Modal> 
      </div>

      <div className="post-Image-Div">
        <img src={imageUrl} className="post-Image" alt="post picture"></img>
      </div>

      <div className="comment-Section">
        <i className={`post-Icon ${toggleLike} far fa-heart fa-lg`} onClick={() => {setToggleLike(!toggleLike)}}></i>
        <i className="post-Icon far fa-comment fa-lg" onClick={focus}></i>
        <i className="post-Icon far fa-paper-plane fa-lg"></i>
        {bookmark 
          ? <i className="post-Icon fas fa-bookmark fa-lg" onClick={() => {setBookmark(!bookmark)}}></i>
          : <i className="post-Icon far fa-bookmark fa-lg" onClick={() => {setBookmark(!bookmark)}}></i>
        }
        <h6 className="likes">{likeCount} Likes</h6>
        <h4 className="post-Username">{username}</h4>
        <span className="post-Caption">&nbsp;{caption}</span>
        
        {commentBox.map((comment) => {
          return (
            <div key={comment.id}>
              <h6 className="post-Comment-User">{comment.username}</h6>
              <span className="post-Comment"> {comment.comment}</span>
            </div>
          )
        })}
        <p className="post-Since">{moment(now).fromNow()}</p>

        <form>
          <div className="comment-Form-Container">
            <input 
              ref={inputRef} 
              type="text" value={addComment} 
              className="comment-Input" 
              placeholder="Add a comment..." 
              onChange={addCommentHandler}>  
            </input>
            <span><button type="submit" className="comment-Submit-Button" onClick={submitHandler}>Post</button></span>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Post;
