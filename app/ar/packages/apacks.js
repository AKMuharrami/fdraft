"use client"
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { initialTabs as tabs } from "./aingredients";
import { motion, AnimatePresence } from "framer-motion";
import Icon from '@mdi/react';
import { mdiProgressWrench } from '@mdi/js';
// import { Helmet } from "react-helmet-async";
import AresponsiveAppBar from "../amenubar";
export default function Apackagess() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    return (
      <div style={{background: '#0B0E13', width: "100%", paddingBottom:'70px', zIndex:-1, direction:'rtl'}}>
        <AresponsiveAppBar></AresponsiveAppBar>
        {/* <Helmet>
        <title>نوفر باقات متعددة لتطوير المواقع</title>
        <meta name="description" content="نوفر 3 باقات مع توفير خدمة عناية شهرية بأسعار معقولة بالريال العماني"/>
        <link rel="canonical" href="/ar/packages"/>
        </Helmet> */}
        <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'50px', zIndex:-1, height:'5vh'}}></div>
      
            {isDesktopOrLaptop && <motion.div className="window"  initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  style={{marginRight:'4vw'}} >
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
                    style={{display:'flex',textAlign:'center'}}
                  >
                    <h1 style={{width:"20vw", fontSize:'20vh', marginTop:"10vh", marginLeft:"5vh", zIndex:0}}>{selectedTab ? selectedTab.icon : "😋"} <br></br> <h1 style={{zIndex:1, color:selectedTab.col, textShadow:selectedTab.sha}}>{selectedTab ? selectedTab.price : "😋"}</h1></h1>
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
                  style={{marginRight:'4.5vh', marginLeft:'4.5vh', color:'white', fontSize:'2vh', textAlign:'center'}}
            > * تنبيه: سعر اسم الموقع مستثنى من المبلغ المذكور لأنه يختلف باختلاف الاسم الذي يريده الزبون. وستتم مناقشة ذلك عند التواصل -وأقلها حوالي 10 ريالات تقربا-. <br></br> علما بأني لن آخذ مزيد أجرة على سعر اسم الموقع إن شاء الله تعالى، وسيكون الدفع سنويا
              </motion.h2>}
              {isDesktopOrLaptop && <motion.div className="window"  initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  style={{marginTop:'10vh', marginRight:'4vw'}} >
              <nav>
                <ul id="tul">
                  
                    <li
                    id='tli'
                    style={{textAlign:'center', paddingRight:'40vw'}}
                    >
                      🛠️ خدمة عناية شهرية
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
                    <h1 style={{width:"20vw", fontSize:'20vh', marginTop:"10vh", marginLeft:"5vh", zIndex:0}}><Icon path={mdiProgressWrench} size={7}/> <br></br> <h1 style={{zIndex:1, color:selectedTab.col, textShadow:selectedTab.sha}}>25 ريال</h1></h1>
                    <h6 style={{fontSize:'4.3vh', width:'60vw'}}>نوفر كذلك خدمة شهرية للعناية بموقعك، بزيادة ثلاث خاصيات جديدة حسب طلب الزبون. وكذلك خدمة تغيير الألوان والكتابة وطريقة العرض على حسب طلب الزبون.</h6>
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
                  style={{height:'33vh', marginRight:'4vw'}} >
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
                    <h1 style={{width:"15vw", fontSize:'12vh', marginTop:"5vh", marginLeft:"7vh", zIndex:0, marginRight:'-1vw'}}>{selectedTab ? selectedTab.icon : "😋"} <br></br> <h1 style={{zIndex:1,fontSize:'2.7vh', marginRight:'1.2vh', marginTop:'-1vh',color:selectedTab.col, textShadow:selectedTab.sha, width:'10vh'}}>{selectedTab ? selectedTab.price : "😋"}</h1></h1>
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
                  > * تنبيه: سعر اسم الموقع مستثنى من المبلغ المذكور لأنه يختلف باختلاف الاسم الذي يريده الزبون. وستتم مناقشة ذلك عند التواصل -وأقلها حوالي 10 ريالات تقربا-. <br></br> علما بأني لن آخذ مزيد أجرة على سعر اسم الموقع إن شاء الله تعالى، وسيكون الدفع سنويا

              </motion.h3>}
              {isTabletOrMobile && <motion.div className="window"  initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  style={{height:'35vh', marginTop:'4vh', marginRight:'4vw'}} >
              <nav>
                <ul id="tul">
                  
                    <li
                    id='tli'
                      style={{textAlign:'center', paddingRight:'30vw'}}

                    >
                     🛠️ خدمة عناية شهرية
                      
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
                    <h1 style={{width:"15vw", fontSize:'12vh', marginTop:"5vh", marginLeft:"5vh", zIndex:0, marginRight:''}}> <Icon path={mdiProgressWrench} size={4} /> <br></br> <h1 style={{zIndex:1,fontSize:'3vh', marginLeft:'1vh', marginTop:'-1vh',color:selectedTab.col, textShadow:selectedTab.sha, width:'10vh'}}>25 ريال</h1></h1>
                    <h6 style={{fontSize:'2.2vh', width:'60vw'}}>نوفر كذلك خدمة شهرية للعناية بموقعك، بزيادة ثلاث خاصيات جديدة حسب طلب الزبون. وكذلك خدمة تغيير الألوان والكتابة وطريقة العرض على حسب طلب الزبون.</h6>
                  </motion.div>
                </AnimatePresence>
              </main>
            </motion.div>}
      </div>
        );
};