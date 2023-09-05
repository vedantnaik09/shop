import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import back from "./resources/back2.jpg"
import trees from "./resources/trees.png"
import birds from "./resources/bird.gif"
import shopnest from "./resources/ShopNest.png"
import ExpCard from './components/ExpCard'


function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
      }
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
    
        return(() => {
            window.removeEventListener('resize', updateDimension);        
        })
    }, [screenSize])
  return (
    <div>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0} factor={1} style={{backgroundImage: `url(${back})`, backgroundSize:"cover"}}>      
      </ParallaxLayer>      
       <ParallaxLayer offset={0} speed={0} factor={1} style={{backgroundImage: `url(${trees})`, backgroundSize:"100% 100%"}}>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} factor={1} >
        <Navbar></Navbar> 
      </ParallaxLayer>
       <ParallaxLayer offset={0.2} speed={1.2} factor={2} style={{backgroundImage:`url(${birds})`, backgroundSize:`${screenSize.width/18}%` , backgroundRepeat:"repeat",maxWidth:"100%"}}>
      
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={2} factor={2}>
      <div style={{margin:"auto", width:"75%",textAlign:"center"}}>
        <img src={shopnest} alt="" style={{width:"50%",}} /> 
        <br/>
        {/* <button style={{backgroundColor:"transparent", border:"2px solid white"}} ><h2 style={{fontSize:screenSize.width/50,  width:"fit-content", margin:"auto", padding:"5px"}}>What do we offer</h2></button> */}
        </div>
        </ParallaxLayer>       

        
        {/*------------------- Page 2 ----------------*/}  
        <ParallaxLayer offset={1} speed={0} factor={1} style={{backgroundImage: `url(${back})`, backgroundSize:"cover"}}>      
        <div style={{backgroundColor:"black",height:"16px"}}></div>
      </ParallaxLayer>      
      <ParallaxLayer offset={1} speed={0.5} factor={1} >
      
      <ExpCard screenSize={screenSize}></ExpCard>
      </ParallaxLayer>
      
      </Parallax>
      
    </div>
  )
}

export default App
