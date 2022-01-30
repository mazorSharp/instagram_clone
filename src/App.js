import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Stories from './components/Stories';
import { Route, Routes, Link } from 'react-router-dom';
import Api from './components/Api';

function App() {
  const username = "hit_monkey";
  const userImage = "https://img3.wikia.nocookie.net/__cb20100209013418/marveldatabase/images/2/27/Hit-Monkey_Vol_1_1_Textless.jpg";
  const [captionText, setCaptionText] = useState("");
  const [postImage, setPostImage] = useState("");
  const [posts, setPosts] = useState([]);
  const reversedPosts = posts.slice(0).reverse();
  const dummyPosts = [
    {
      username: username, 
      id: Math.random() * 1000, 
      caption: "Great day at the spa with family", 
      userImage: userImage,
      imageUrl:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bbc.co.uk%2Fblogs%2Fwondermonkey%2Fjapanese_macaque_1.jpg&f=1&nofb=1"
    },      
    {
      username: username, 
      id: Math.random() * 1000, 
      caption: "Im famous!", 
      userImage: userImage,
      imageUrl:"https://i.annihil.us/u/prod/marvel/i/mg/6/30/5654cdc24c524/detail.jpg"
    },
    {
      username: username, 
      id: Math.random() * 1000, 
      caption: "Throwback Thursday", 
      userImage: userImage,
      imageUrl:"https://imgix.bustle.com/inverse/03/49/cb/72/8467/49c6/a6ae/39dba09f4289/hit-monkey-often-wears-a-suit.jpeg?w=349&h=541&fit=max&auto=format%2Ccompress&q=50&dpr=2"
    }        
]

  // save locally   
  useEffect(() => {
    getLocalPosts();  
  }, []);

  useEffect(() => {
    saveLocalPosts();
  }, [posts]); 
  
  const saveLocalPosts = () => {
    localStorage.setItem("posts", JSON.stringify(posts));   
  };

  const getLocalPosts = () => {
    if (localStorage.getItem("posts") === null ) {
      localStorage.setItem("posts", JSON.stringify([]));
    } else {
      let postLocal = JSON.parse(localStorage.getItem("posts"));
      setPosts(postLocal);
    }
  };

  return (
    <div className="App">

      {/* header */}
      <Header 
        posts={posts} 
        setPosts={setPosts} 
        captionText={captionText} 
        setCaptionText={setCaptionText} 
        postImage={postImage} 
        setPostImage={setPostImage} 
      />

      {/* div for spacing */}
      <div className="spacer"></div>

      {/* api button */}
        <Link to="/api" element={<Api posts={posts}/>} >api call</Link>

      {/* Routes Gives error because to home route=> "/" currenly just using Routes for Api Call, so would've removed it otherwise*/}
        <Routes>
          <Route path="/api" element={< Api posts={posts}/>}/>
        </Routes>

      {/* Stories */}
      <Stories />

      {/* Added posts, includes delete post, comment, and like */}
      {reversedPosts.map((post) => {
        return (
          <Post 
            post={post}
            key={post.id} 
            username={post.username} 
            caption={post.caption} 
            imageUrl={post.imageUrl} 
            userImage={post.userImage}
            posts={posts}
            setPosts={setPosts}
          />
        ) 
      })}

      {/* dummy posts, cant be deleted */}
      {dummyPosts.map((post) => {
        return (
          <Post 
            key={post.id} 
            username={post.username} 
            caption={post.caption} 
            imageUrl={post.imageUrl} 
            userImage={post.userImage}
          />          
        )
      })}
    </div>
  );
}

export default App;
