
// import React, { useState, useEffect, useRef } from 'react';

// const image1 = `${process.env.PUBLIC_URL}/image1.png`;
// const image2 = `${process.env.PUBLIC_URL}/image2.png`;
// const image3 = `${process.env.PUBLIC_URL}/image3.png`;

// const Carousel = () => {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const intervalRef = useRef(null);
//   const bullets = [1, 2, 3];
//   const texts = [
//     "Stay on Top of Your Tasks",
//     "Conquer Your Productivity",
//     "Organize Your Day, Achieve Your Goals",
//   ];

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex % bullets.length) + 1);
//     }, 2000);

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [bullets.length]); // Added bullets.length as dependency

//   return (
//     <div className="carousel">
//       <div className="images-wrapper">
//         {bullets.map((bullet) => (
//           <img
//             key={bullet}
//             src={activeIndex === 1 ? image1 : activeIndex === 2 ? image2 : image3}
//             className={`image img-${bullet} ${activeIndex === bullet ? 'show' : ''}`}
//             alt={`Carousel image ${bullet}`} // Added alt prop
//           />
//         ))}
//       </div>
//       <div className="text-slider">
//         <div className="text-wrap">
//           <div className="text-group" style={{ transform: `translateY(${-(activeIndex - 1) * 2.2}rem)` }}>
//             {texts.map((text, index) => (
//               <h2 key={index}>{text}</h2>
//             ))}
//           </div>
//         </div>
//         <div className="bullets">
//           {bullets.map((bullet) => (
//             <span
//               key={bullet}
//               className={activeIndex === bullet ? 'active' : ''}
//               onClick={() => setActiveIndex(bullet)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
import React, { useState, useEffect } from 'react';

const image1 = `${process.env.PUBLIC_URL}/image1.png`;
const image2 = `${process.env.PUBLIC_URL}/image2.png`;
const image3 = `${process.env.PUBLIC_URL}/image3.png`;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const bullets = [1, 2, 3];
  const texts = [
    "Stay on Top of Your Tasks",
    "Conquer Your Productivity",
    "Organize Your Day, Achieve Your Goals",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex % bullets.length) + 1);
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval
  }, [bullets.length]); // Dependency on bullets.length

  return (
    <div className="carousel">
      <div className="images-wrapper">
        {bullets.map((bullet) => (
          <img
            key={bullet}
            src={activeIndex === 1 ? image1 : activeIndex === 2 ? image2 : image3}
            className={`image img-${bullet} ${activeIndex === bullet ? 'show' : ''}`}
            alt={`Carousel image ${bullet}`} // Added alt prop
          />
        ))}
      </div>
      <div className="text-slider">
        <div className="text-wrap">
          <div className="text-group" style={{ transform: `translateY(${-(activeIndex - 1) * 2.2}rem)` }}>
            {texts.map((text, index) => (
              <h2 key={index}>{text}</h2>
            ))}
          </div>
        </div>
        <div className="bullets">
          {bullets.map((bullet) => (
            <span
              key={bullet}
              className={activeIndex === bullet ? 'active' : ''}
              onClick={() => setActiveIndex(bullet)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
