import { useState } from "react";
import {sculptureList} from '/Users/paulamoyano/coding_101/01-outside-course/React/react-docs-challenges/react_challenges/adding_interactivity/state_comp_memory/data.js'

export default function Pgallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handlePreviousClick() {
    setIndex(index - 1);
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      {index !== 0 ? (
        <button onClick={handlePreviousClick}>Previous</button>
      ) : null}
      {index < sculptureList.length - 1 ? (
        <button onClick={handleNextClick}>Next</button>
      ) : null}

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
