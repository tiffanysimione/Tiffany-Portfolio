// import React, { useState, useRef } from 'react';
// import { useSpring, animated } from 'react-spring';
// import { Element } from 'react-scroll';

// function Welcome() {
//   const ref = useRef(null);
//   const [isWelcomeVisible, setWelcomeVisible] = useState(true);

//   const welSpring = useSpring({
//     from: { transform: isWelcomeVisible ? 'translateX(-500px)' : 'translateX(0px)' },
//     to: { transform: isWelcomeVisible ? 'translateX(0px)' : 'translateX(-500px)' },
//     scroll: ref,
//   });

//   const comeSpring = useSpring({
//     from: { transform: isWelcomeVisible ? 'translateX(5000px)' : 'translateX(0px)' },
//     to: { transform: isWelcomeVisible ? 'translateX(0px)' : 'translateX(500px)' },
//     scroll: ref,
//   });

//   // Function to toggle the visibility of the "WELCOME" text
//   const toggleWelcome = () => {
//     setWelcomeVisible(prevState => !prevState);
//   };

//   return (
//     <Element name="welcome" className="welcome" ref={ref}>
//     <div
//       style={{ backgroundColor: '#fa8072', height: '100vh', width: '100vw', touchAction: 'manipulation' }} // add touchAction property
//       onClick={toggleWelcome} // Trigger the toggle on click
//     >
//       <h1 className="text-4xl sm:text-9xl h-screen flex items-center justify-center text-white font-bold uppercase tracking-widest">
//         <animated.span style={welSpring}>WEL</animated.span>
//         <animated.span style={comeSpring}>COME</animated.span>
//       </h1>
//     </div>
//   </Element>
// );
// } 

// export default Welcome;