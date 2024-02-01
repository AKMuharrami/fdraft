"use client"
import { useMediaQuery } from "react-responsive";
import  {TypeAnimation} from 'react-type-animation';
import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet-async";
import ResponsiveAppBar from '../menubar';
export default function Teamm() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
    <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'70px', zIndex:-1, height:'100vh'}}>
        <ResponsiveAppBar></ResponsiveAppBar>
        {/* <Helmet>
          <title>Asad Al Muharrami</title>
          <meta name="description" content="I live in Muscat Oman. and I'm capable in designing websites in HTML, CSS, Javascript, React."/>
          <link rel="canonical" href="/about"/>
          </Helmet> */}
        <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'50px', zIndex:-1, height:'8vh'}}></div>
            {isDesktopOrLaptop &&<div style={{display:'flex', justifyContent:'space-between', background:'#323136', height:'35vh', direction:'ltr'}}>
            <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png" alt=""></img>
            <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{marginTop:'1.5vh', width:'70vw', right:0, textAlign:'center'}}>
                <h2 style={{color:'#F2EEE9', opacity:'1'}}>My name is Asad Al Muharrami <br></br> I live in Muscat - Oman <br></br> I'm self learnt and I beleive that certificates are of no worth<br></br> if they have no work to back them up, as that is all that matters.<br></br><br></br> I'm capable of designing websites in the following languages:</h2>
                <div style={{marginTop:'-2vh'}}> 
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>HTML</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>CSS</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>Javascript</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>React</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>Next js</h3></button>
                     </div>
            </motion.div>
                    <br></br>
            </div>}
            {isTabletOrMobile &&<div style={{display:'flex', justifyContent:'space-between', background:'#323136', height:'20vh'}}>
            <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png"  alt="" style={{width:'28vw', objectFit:'cover'}}></img>
            <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{marginTop:'1.5vh'}}>
                <h4 style={{color:'#F2EEE9', opacity:'1', fontSize:'1.4vh', marginRight:'1vw', marginLeft:'1vw'}}>My name is Asad Al Muharrami <br></br> I live in Muscat - Oman <br></br> I'm self learnt by the blessing of Allah and I beleive that certificates are of no worth if they have no work to back them up, as that is all that matters.<br></br><br></br> I'm capable of designing websites in the following languages:</h4>
                <div style={{marginTop:'-1.3vh'}}> 
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'7vw',textAlign:'center',lineHeight:2.2}}>HTML</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'7vw',textAlign:'center',lineHeight:2.2}}>CSS</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'8vw',textAlign:'center',lineHeight:2.2}}>Javascript</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'7vw',textAlign:'center',lineHeight:2.2}}>React</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'8vw',textAlign:'center',lineHeight:2.2}}>Next js</h3></button>
                     </div>
            </motion.div>
                    <br></br>
            </div>}
    </div>)}