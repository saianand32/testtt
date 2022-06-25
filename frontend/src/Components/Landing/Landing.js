import React,{useEffect,useRef}  from 'react'
import "./Landing.css"
import Lottie from 'lottie-web';
import Typewriter from 'typewriter-effect';
// import svg from "../../assets/blob.svg"
// import { init } from 'ityped';

function Landing() {

  // const textRef= useRef();
  // useEffect(()=>{
  //     init(textRef.current, { 
  //       showCursor: false, 
  //       backDelay: 2000,
  //       strings: ["Hello there !!" ],
  //   });
  // }, [])


    const container = useRef(null)
    useEffect(()=>{
    const instance = Lottie.loadAnimation({
     container:container.current,
     renderer:'svg',
     loop:true,
     autoplay:true,
     animationData:require('./ghost.json')
    })
  

    return () => instance.destroy();
  
  },[]);

  return (
    <div className = "landContainer">
       
      <div className='lotti_container'>
        {/* <div className='svg_container'>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#E8DAFF" d="M67.5,-36.3C78.2,-20.4,71.2,8.3,57,31.1C42.8,53.8,21.4,70.5,7.1,66.4C-7.2,62.3,-14.4,37.4,-18.2,20.6C-22,3.9,-22.4,-4.6,-18.8,-16.4C-15.2,-28.3,-7.6,-43.3,10.4,-49.3C28.4,-55.3,56.8,-52.2,67.5,-36.3Z" transform="translate(100 100)" />
        </svg>
        </div> */}
        
        <div className="container landImgSection" ref = {container} />
        
        
      </div>

        <div className='landHeading' > 
           
        <h1>
          <Typewriter
            onInit={(typewriter)=>{
              typewriter
              .typeString("Hello There !!")
              .pauseFor(1500)
              .typeString("<br>It's me, Blocking Bad")
              .pauseFor(2000)
              // .typeString("<br>I can be very helpful...")
              // .pauseFor(800)
              // .typeString("<br>Do you know how??")
              // .pauseFor(800)
              .typeString("<br>I can help you with blocking<br>unwanted sites for your children and<br>")
              .pauseFor(800)
              .typeString("if you are in your work mode,<br> then i can be helpful in <br>enhancing your productivity.")
              .start()
            }} 
          />
        </h1>
        
        {/* <h1 id="name">
          <Typewriter
            onInit={(typewriter)=>{
              typewriter
              .typeString("Blocking Bad")
              .start()
            }} 
          />
        </h1> */}
        {/* <h2>Blocking Bad</h2> */}
        {/* <h2>I can be very helpful...</h2>
        <h2>Do you know how??</h2>
        <h2>I can help you with blocking unwanted sites for your children and if you are in your work mode, then i can be helpful in enhancing your productivity. </h2> */}
        

        </div>
    </div>
  )
}

export default Landing