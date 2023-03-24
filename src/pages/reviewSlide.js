import React from "react"
import {Chewie, Ruby, Alfie, Pearl, Rosie, Molly} from "./Review.js"
const colors = ["#0088FE", "#00C49F", "#FFBB28", "pink","Purple","blue"];
const reviews = [<Molly />, <Chewie />, <Ruby />, <Alfie/>,<Pearl/>,<Rosie/>]
const delay = 3250;

export default () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
        resetTimeout();
    };
  }, [index]);
  return (
    <div className="slideshow">
      <div className="slideshowSlider" 
         style={{transform: `translate3d(${-index * 100}%, 0, 0)` }}
         
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}>
                <h1>{reviews[index]}</h1>
            </div>
        ))}
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx}  
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}
        ></div>
        ))}
      </div>
    </div>
  );
}