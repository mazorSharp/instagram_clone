import React from 'react';
import FileBase from 'react-file-base64'
import './Form.css'

const Form = ({ posts, setPosts, captionText, setCaptionText, postImage, setPostImage, setUserImage }) => {
  
  const captionTextHandler = (e) => {
    setCaptionText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      { 
        username: "hit_monkey", 
        id: Math.random() * 1000,
        caption: captionText,
        userimage: "https://img3.wikia.nocookie.net/__cb20100209013418/marveldatabase/images/2/27/Hit-Monkey_Vol_1_1_Textless.jpg",
        imageUrl: postImage
      }
    ])
    setCaptionText("");
  }

  return (
    <div>
      <form>          
          <input type="text" name="caption" maxlength="255" value={captionText} placeholder="Write a caption..." onChange={captionTextHandler}></input>
          <p>{captionText.length} / 255</p>
          <div className="file-Input">     
            <FileBase 
              className="test"
              type="file"
              multiple={false}
              onDone={({base64}) => setPostImage(base64)}
            />            
          </div>
            <button className="button-Submit" type="submit" onClick={submitHandler}>Share</button>
      </form>
    </div>
)
};

export default Form;
