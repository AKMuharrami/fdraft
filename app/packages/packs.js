"use client"
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { initialTabs as tabs } from "./Ingredients";
import { motion, AnimatePresence } from "framer-motion";
import Icon from '@mdi/react';
import { mdiProgressWrench } from '@mdi/js';
// import { Helmet } from "react-helmet-async";
import ResponsiveAppBar from '../menubar';
export default function Packagess() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    return (
      <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'70px', zIndex:-1}}>
        <ResponsiveAppBar></ResponsiveAppBar>
        {/* <Helmet>
        <title>We offer various Packages for website development</title>
        <meta name="description" content="We offer 3 packages with an offer of monthly maintanace all within affordable prices in Omani rials."/>
        <link rel="canonical" href="/packages"/>
        </Helmet> */}
        <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'50px', zIndex:-1, height:'5vh'}}></div>
      
            {isDesktopOrLaptop && <motion.div className="window"  initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  style={{}} >
              <nav>
                <ul id="tul">
                  {tabs.map((item) => (
                    <li
                    id='tli'
                      key={item.label}
                      className={item === selectedTab ? "selected" : ""}
                      onClick={() => setSelectedTab(item)}
                    >
                      {`${item.icon} ${item.label}`}
                      {item === selectedTab ?(
                        <motion.div className="underline" layoutId="underline" />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>
              <main >
                <AnimatePresence mode='wait' >
                  <motion.div 
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: -20, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{display:'flex', textAlign:'center'}}
                  >
                    <h1 style={{width:"20vw", fontSize:'20vh', marginTop:"10vh", marginRight:"5vh", zIndex:0}}>{selectedTab ? selectedTab.icon : "😋"} <br></br> <h1 style={{zIndex:1, color:selectedTab.col, textShadow:selectedTab.sha}}>{selectedTab ? selectedTab.price : "😋"}</h1></h1>
                    <h6 style={{fontSize:'4.3vh', width:'60vw'}}>{selectedTab ? selectedTab.body : "😋"}</h6>
                  </motion.div>
                </AnimatePresence>
              </main>
            </motion.div>}
            {isDesktopOrLaptop && <motion.h2 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  style={{marginLeft:'4.5vh', marginRight:'4.5vh', color:'white', fontSize:'2vh', textAlign:'center'}}
            > * Note: The domain price is excluded from this as it varies based on the desired name, that would be discussed after the contact happens (the lowest is usually 10 Omr). <br></br>
            It be known that I won't In Sha Allah charge an additional charge over the price of the domain, and the payment will be a yearly payment.
              </motion.h2>}
              {isDesktopOrLaptop && <motion.div className="window"  initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  style={{marginTop:'10vh'}} >
              <nav>
                <ul id="tul">
                  
                    <li
                    id='tli'
                    style={{textAlign:'center', paddingLeft:'40vw'}}
                    >
                      🛠️ Monthly Service Offer
                        <motion.div className="underline" layoutId="underline" />
                  
                    </li>
                 
                </ul>
              </nav>
              <main >
                <AnimatePresence mode='wait' >
                  <motion.div 
               
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: -20, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{display:'flex'}}
                  >
                    <h1 style={{width:"20vw", fontSize:'20vh', marginTop:"10vh", marginRight:"5vh", zIndex:0}}><Icon path={mdiProgressWrench} size={7}/> <br></br> <h1 style={{zIndex:1, color:selectedTab.col, textShadow:selectedTab.sha}}>25 omr</h1></h1>
                    <h6 style={{fontSize:'4.3vh', width:'60vw'}}>We also offer a monthly service for your website, adding up to 3 new features on demand, as well as changing the colors and texts and structure of the preexisting features as many times as the customer would like on demand etc.</h6>
                  </motion.div>
                </AnimatePresence>
              </main>
            </motion.div>}
            {isTabletOrMobile && <motion.div className="window"  initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  style={{height:'40vh'}} >
              <nav>
                <ul id="tul">
                  {tabs.map((item) => (
                    <li
                    id='tli'
                      key={item.label}
                      className={item === selectedTab ? "selected" : ""}
                      onClick={() => setSelectedTab(item)}
                    >
                      {`${item.icon} ${item.label}`}
                      {item === selectedTab ?(
                        <motion.div className="underline" layoutId="underline" />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>
              <main >
                <AnimatePresence mode='wait' >
                  <motion.div 
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: -20, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{display:'flex'}}
                  >
                    <h1 style={{width:"15vw", fontSize:'12vh', marginTop:"5vh", marginRight:"7vh", zIndex:0, marginLeft:'-1vw'}}>{selectedTab ? selectedTab.icon : "😋"} <br></br> <h1 style={{zIndex:1,fontSize:'3vh', marginLeft:'1.2vh', marginTop:'-1vh',color:selectedTab.col, textShadow:selectedTab.sha, width:'10vh'}}>{selectedTab ? selectedTab.price : "😋"}</h1></h1>
                    <h6 style={{fontSize:'2.1vh', width:'60vw'}}>{selectedTab ? selectedTab.body : "😋"}</h6>
                  </motion.div>
                </AnimatePresence>
              </main>
            </motion.div>}
            {isTabletOrMobile && <motion.h3 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  style={{marginLeft:'1.5vh', marginRight:'1.5vh', color:'white'}}
            > * Note: The domain price is excluded from this as it varies based on the desired name, that would be discussed after the contact happens (the lowest is usually 10 Omr). <br></br>
            It be known that I won't In Sha Allah charge an additional charge over the price of the domain. and the payment will be a yearly payment.
              </motion.h3>}
              {isTabletOrMobile && <motion.div className="window"  initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  style={{height:'35vh', marginTop:'4vh'}} >
              <nav>
                <ul id="tul">
                  
                    <li
                    id='tli'
                      style={{textAlign:'center', paddingLeft:'25vw'}}

                    >
                     🛠️ Monthly Service Offer
                      
                        <motion.div className="underline" layoutId="underline" />
                      
                    </li>
                  
                </ul>
              </nav>
              <main >
                <AnimatePresence mode='wait' >
                  <motion.div 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: -20, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{display:'flex'}}
                  >
                    <h1 style={{width:"15vw", fontSize:'12vh', marginTop:"5vh", marginRight:"5vh", zIndex:0, marginLeft:''}}> <Icon path={mdiProgressWrench} size={4} /> <br></br> <h1 style={{zIndex:1,fontSize:'3vh', marginLeft:'1vh', marginTop:'-1vh',color:selectedTab.col, textShadow:selectedTab.sha, width:'10vh'}}>25 omr</h1></h1>
                    <h6 style={{fontSize:'2.2vh', width:'60vw'}}>We also offer a monthly service for your website, adding up to 3 new features on demand, as well as changing the colors and texts and structure of the preexisting features as many times as the customer would like on demand etc.</h6>
                  </motion.div>
                </AnimatePresence>
              </main>
            </motion.div>}
      </div>
        );
};