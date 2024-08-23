import { useState } from 'react';
import { sculptureList } from './data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index - 1 > 0 && index - 1 < sculptureList.length - 1;


  function handleNextClick() {
    if(hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePrevClick() {
    if(hasPrev) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return(
    <>
    <div>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      {showMore && <p>{sculpture.description}</p>}
    </div>
    <div>
    <p></p>
    <img src={sculpture.url} alt={sculpture.alt} />
    </div>
    <div>
      <button className="button" onClick={handlePrevClick}>
        Previous
      </button>
      <button className="button" onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      <button className="button" onClick={handleNextClick}>
        Next
      </button>
    </div>

    </>
  );
}