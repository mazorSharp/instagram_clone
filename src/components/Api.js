import React from 'react';

const Api = ({ posts }) => {

//   let jsonPosts = JSON.stringify(posts);
//   const [fetchData, setFetchData] = useState([])

//   const getData = () => {
//     fetch (jsonPosts)
//       .then(response => response.json())
//       .then(response => setFetchData(response))
//   }

//   useEffect(() => {
//       getData();
//   }, []);

  return (
    <div>      
    [
      {posts.map((item, i) => {
        return (
          <div key={i}>
            &#123;
              <p>"username": "{item.username}",</p>
              <p>"id": "{item.id}",</p>
              <p>"caption": "{item.caption}",</p>
              <p>"userImage": "{item.userImage}",</p>
              <p>"imageUrl": "{item.imageUrl}",</p>
              &#125;,              
          </div>
          )
      })}
    ]
    </div>
  );
};

export default Api;
