import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function useTimer(deadline, interval = SECOND) {
  const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan((_timespan) => _timespan - interval);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return {
    days: Math.floor(timespan / DAY),
    hours: Math.floor((timespan / HOUR) % 24),
    minutes: Math.floor((timespan / MINUTE) % 60),
    seconds: Math.floor((timespan / SECOND) % 60)
  };
}




export default function Information() {
  const { days, hours, minutes, seconds } = useTimer("2024-02-09T15:30:00");

  return(
    <section className="bg-stars-pattern w-full min-h-[300px] py-4 pb-20 flex lg:flex-row flex-col lg:gap-0 gap-[50px] overflow-x-hidden bg-[length:300px_300px] ">
      <motion.div
      initial={{  opacity: 0, x:-200 }}
      whileInView={{ opacity: 100, x:0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true  }}
      className="w-full h-full flex-col flex justify-center items-center gap-[10px]">
        <div className="flex-row flex gap-[10px]">
          <h1 className=" animate-bounce lg:text-[50px] text-3xl">🚀</h1>
          <h1 className=" text-[#FFCE6A] text-center drop-shadow-[0px_0px_7px_#FFCE6A] font-poppin lg:text-[50px] 
          text-3xl font-[500]">
            Take Off In...</h1>
        </div>
        <motion.div
        initial={{  opacity: 0, y:20 }}
        whileInView={{ opacity: 100, y:0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: .5  }}
        className="w-full flex md:flex-row flex-col items-center justify-center gap-[20px] mt-5">
          <div className="shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#FFDAB9] backdrop-blur-[19.5px] h-[100px] w-[100px] flex justify-center items-center flex-col">
            <h1 className="text-[#FFDAB9] text-2xl font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">{days}</h1>
            <span className="text-[#FFDAB9] text-md font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">Days</span>
          </div>
          
          <div className="shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#FFDAB9] backdrop-blur-[19.5px] h-[100px] w-[100px] flex justify-center items-center flex-col">
            <h1 className="text-[#FFDAB9] text-2xl font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">{hours}</h1>
            <span className="text-[#FFDAB9] text-md font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">Hours</span>
          </div>
          <div className="shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#FFDAB9] backdrop-blur-[19.5px] h-[100px] w-[100px] flex justify-center items-center flex-col">
            <h1 className="text-[#FFDAB9] text-2xl font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">{minutes}</h1>
            <span className="text-[#FFDAB9] text-md font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">Minutes</span>
          </div>
          <div className="shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#FFDAB9] backdrop-blur-[19.5px] h-[100px] w-[100px] flex justify-center items-center flex-col">
            <h1 className="text-[#FFDAB9] text-2xl font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]" suppressHydrationWarning>{seconds}</h1>
            <span className="text-[#FFDAB9] text-md font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">Seconds</span>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
      initial={{  opacity: 0, x:200 }}
      whileInView={{ opacity: 100, x:0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: .2  }}
      className="w-full h-full flex-col flex justify-center items-center gap-[10px]">
        <div className="flex-row flex gap-[10px]">
          <h1 className=" text-[#FFCE6A] text-center drop-shadow-[0px_0px_7px_#FFCE6A] font-poppin lg:text-[50px] 
          text-3xl font-[500]">Resources</h1>
          <h1 className=" animate-bounce lg:text-[50px] text-3xl">‍💼</h1>
        </div>
        <a href="https://pebble-snowstorm-059.notion.site/HackPack-075a7d013a0449859f4f8d7654bd98cc" target="_blank" className="mt-5 shadow-[0px_0px_4px_0px_#FFDAB9] rounded-[26.812px] border-4 border-solid border-[#FFDAB9] backdrop-blur-[19.5px] h-[100px] w-[300px] flex justify-center items-center flex-col ">
          <h1 className="text-[#FFDAB9] text-md font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">Click to view</h1>
          <h1 className="text-[#FFDAB9] text-2xl font-poppin drop-shadow-[0px_0px_4px_#FFCE6A]">Hack Pack</h1>
        </a>
      </motion.div>
      
    </section>
  )
}