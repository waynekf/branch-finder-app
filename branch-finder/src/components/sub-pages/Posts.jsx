import React from "react";

let status = "pending";
let result;

const userId = 1;
const postsData = fetchPosts(userId);

const Posts = () => {
  const posts = postsData();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {posts.map((post, idx) => (
        <p></p>
      ))}
    </div>
  );
};

function fetchPosts(userId) {
  let url = `https://jsonplaceholder.typicode.com/posts${
    userId ? "?userId=" + userId : ""
  }`;
  let fetching = fetch(url)
    .then((res) => res.json())
    .then((success) => {
      status = "fulfilled";

      result = success;
    })
    .catch((error) => {
      status = "rejected";

      result = error;
    });

  return () => {
    if (status === "pending") {
      throw fetching;
    } else if (status === "rejected") {
      throw result;
    } else if (status === "fulfilled") {
      return result;
    }
  };
}

export default Posts;

//https://dev.to/smitterhane/swap-out-useeffect-with-suspense-for-data-fetching-in-react-2leb
