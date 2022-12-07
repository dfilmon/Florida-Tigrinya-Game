import React from 'react';
import './style.css';
import Bible from './components/Bible';
import Test from './components/Test';
import dailyData from './data/data.jsx';
import { motion } from 'framer-motion';

export default function App() {
  // const [myState, setMyState] = useState

  const beLetters = ['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ'];
  const seLetters = ['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ'];

  let allLetters = [];
  allLetters = allLetters.concat(beLetters, seLetters);
  let finalLetters = shuffle(allLetters).slice(0, 3);
  console.log(allLetters);

  const itemVariants = {
    // initial: { x: '-100vw', opacity: 0 },
    // animate: { x: 0, opacity: 1 },
    initial: { opacity: 0, scale: 0, rotate: 360 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: {
      ease: 'easeInOut',
      duration: 3,
      times: [0, 0.5, 0.6, 1],
      repeat: Infinity,
      repeatType: 'mirror',
    },
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <div>
      <div className="mainStat">
        {shuffle(finalLetters)
          .slice()
          .reverse()
          .map(function (data, i) {
            return (
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="statContainer"
              >
                <div className="letterItem">{data}</div>

                <br />
                <br />
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}
