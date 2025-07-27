import React from "react";
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";
import ArticleList from "./ArticleList";

const blogData = {
  name: "Underreacted",
  image: "https://via.placeholder.com/150",
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header>{blogData.name}</header>
      <aside>
        <img src={blogData.image} alt="blog logo" />
        <p>{blogData.about}</p>
      </aside>
      <ArticleList posts={blogData.posts} />
      <ProjectList />
    </div>
  );
}

export default App;
