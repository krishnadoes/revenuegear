"use client"
import React ,{useRef,useState}from 'react'
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
    <div>
      <div className="bg-grey-900 p-2 border-b-2 rounded-4xl">
      <SlideTabs />
    </div>
    </div>
  )
}

export default Navbar

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (<div className='flex justify-evenly w-3/4 m-auto items-center bg-grey-900 text-white font-semibold'>
  <div className='w-30 '>
     <img src="/rng.png" alt="" className=' object-contain h-full '/>  </div>
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className=" mx-auto flex w-1/2"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position} />
    </ul>
    {/* <button className="px-8 py-2 rounded-md bg-[#439e9e] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        Invert it
      </button> */}
      <Tab setPosition={setPosition}>Contact</Tab><Cursor position={position} />
    </div>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};