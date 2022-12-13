import { useEffect } from "react";

export default function StoryTray({ stories }) {
  const myStories = [...stories];

  /// exercise 3
  /// solution different from the given in the docs, not sure about the data used. need to fix the keys

  const addStory = (arr) => {
    arr.push({
      id: "name",
      label: "Their Story",
    });
  };

  addStory(myStories);

  return (
    <ul>
      {myStories.map((story, index) => (
        <li key={index}>{`${story.id}'s ${story.label}`}</li>
      ))}
    </ul>
  );
}
