"use client"
import { useMediaQuery } from "react-responsive";
import  {TypeAnimation} from 'react-type-animation';
import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet-async";
import AresponsiveAppBar from '../amenubar';

export default function Ateamm() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
    <div style={{background: '#0B0E13', width: "100%", paddingBottom:'70px', zIndex:-1, height:'90.7vh', direction:'rtl'}}>
        <AresponsiveAppBar></AresponsiveAppBar>
        {/* <Helmet>
          <title>أسد المحرمي</title>
          <meta name="description" content="أعيش في مسقط - عمان. وأنا قادر بفضل الله تعالى على تطوير المواقع ب HTML, CSS, Javascript, React."/>
          <link rel="canonical" href="/ar/about"/>
          </Helmet> */}
        <div style={{background: '#0B0E13', width: "100%", paddingBottom:'50px', zIndex:-1, height:'8vh', direction:'rtl'}}></div>
            {isDesktopOrLaptop &&<div style={{display:'flex', justifyContent:'space-between', background:'#323136', height:'35vh'}}>
            <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png" alt=""></img>
            <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{marginTop:'1.5vh', width:'70vw', right:0}}>
                <h2 style={{color:'#F2EEE9', opacity:'1', textAlign:'center'}}>اسمي أسد المحرمي <br></br> أعيش في مسقط - عمان <br></br> أنا عصامي من ناحية التعليم وأرى أن الشهادات لا قيمة لها<br></br> إن لم يسعفها العمل، إذ هو مربط الفرس وبيت القصيد<br></br><br></br> بإمكاني -بفضل الله تعالى- التصميم باللغات التالية:</h2>
                <div style={{marginTop:'-2vh', direction:'ltr', marginLeft:10}}> 
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
                <h4 style={{color:'#F2EEE9', opacity:'1', fontSize:'1.4vh', marginRight:'1vw', marginLeft:'1vw'}}>اسمي أسد المحرمي <br></br> أعيش في مسقط - عمان <br></br> أنا عصامي من ناحية التعليم وأرى أن الشهادات لا قيمة لها إن لم يسعفها العمل، إذ هو مربط الفرس وبيت القصيد<br></br><br></br> بإمكاني -بفضل الله تعالى- التصميم باللغات التالية:</h4>
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