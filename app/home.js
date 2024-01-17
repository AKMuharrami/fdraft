"use client"
import { useMediaQuery } from "react-responsive";
import {  useRef} from 'react'
import {motion, useScroll, Variants} from 'framer-motion'
import  {TypeAnimation} from 'react-type-animation'
// import { Helmet } from "react-helmet-async";
import ResponsiveAppBar from './menubar';
import Image from "next/image";

export default function Homee() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    });
    const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const cardVariants = {
      offscreen: {
        y: 40, opacity:0
      },
      onscreen: {
        y: -20,
        rotate: 0,
        opacity:1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          
          
        }
      }
    };
    function  handlemclick () {
      ref.current.scrollLeft= 0;


    }
    async function n() {
      await ref.current?.scrollIntoView({behavior:'smooth', block:'center'})    }
    function handlesclick () {

      ref.current.scrollLeft= 1030 
    }     
     function handlegclick () {
      
      ref.current.scrollLeft= 2120 
    }
    function handleeclick () {
      ref.current.scrollLeft= 3220 
    }
    function handleaclick () {
      ref.current.scrollLeft= 4390 
    }
    function handleskclick () {
      ref.current.scrollLeft= 5500 
    }
    function handleguclick () {
      ref.current.scrollLeft= 6620
    }
    function handlemiclick () {
      ref.current.scrollLeft= 7800 
    }
    function handlemsclick () {

      ref.current.scrollLeft= 450 
    }     
     function handlemgclick () {
      
      ref.current.scrollLeft= 900
    }
    function handlemeclick () {
      ref.current.scrollLeft= 1350 
    }
    function handlemaclick () {
      ref.current.scrollLeft= 1800 
    }
    function handlemskclick () {
      ref.current.scrollLeft= 2250 
    }
    function handlemguclick () {
      ref.current.scrollLeft= 2700
    }
    function handlemmiclick () {
      ref.current.scrollLeft= 3230 
    };
    return (
      <div style={{background: '#0B0E13', width: "100%", paddingBottom:'2.5%', zIndex:0}}>
        <ResponsiveAppBar></ResponsiveAppBar>
        {/* <Helmet>
        <title>Omani Web Developer</title>
        <meta name="description" content="Experienced In HTML CSS Javascript React, ready to design your proffesional website"/>
        <link rel="canonical" href="/"/>
        </Helmet> */}
      {isDesktopOrLaptop &&<Image priority height="400"  width="1363" style={{objectFit:'cover',objectPosition:'0% 5%'}} src="https://img.freepik.com/premium-photo/man-sits-desk-front-window-with-lit-up-computer-screen-that-says-cyberpunk_898324-756.jpg?w=1480" alt="" />}
      {isTabletOrMobile &&<img style={{height:"25vh", width:"100%", objectFit: "cover", objectPosition:"0% -5vw", marginTop:37}} src="https://img.freepik.com/premium-photo/man-sits-desk-front-window-with-lit-up-computer-screen-that-says-cyberpunk_898324-756.jpg" alt="" />}

      <div style={{right:'10vh', textAlign:'center', paddingTop: 3}}>
        {isDesktopOrLaptop &&<motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.8 }}>
          <p style={{display:'block',whiteSpace: 'pre-line',fontSize:'1.8em', color:"#E5F6EC", fontFamily:' Georgia, serif;'}}>Finding a good web developer is not an easy task,<br></br> especially the one who is proeffecient in using the latest design styles.</p>
          </motion.div>}
        {isTabletOrMobile &&<motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.8 }}>
          <p style={{display:'block',whiteSpace: 'pre-line',fontSize:'1.4em', color:"#E5F6EC", fontFamily:' Georgia, serif;'}}>Finding a good web developer is not an easy task, especially the one who is proeffecient in using the latest design styles.</p>
          </motion.div>}
              {isDesktopOrLaptop &&<TypeAnimation
                  sequence={[
                      "I go by the name of Akmuharrami and I'm an Omani web developer that is experienced\n-praise be to Allah- in using html"
                      ,
                      500,
                      "I go by the name of Akmuharrami and I'm an Omani web developer that is experienced\n-praise be to Allah- in using css",
                      500,
                      "I go by the name of Akmuharrami and I'm an Omani web developer that is experienced\n-praise be to Allah- in using Javascript",
                      500,
                         "I go by the name of Akmuharrami and I'm an Omani web developer that is experienced\n-praise be to Allah- in using React, and its various libraries.",
                      500,
                  ]}
                  deletionSpeed={20}
                  speed={40}
                  delay={2}
                  style={{display:'block',whiteSpace: 'pre-line',fontSize:'1.8em', color:"#E5F6EC", fontFamily:' Georgia, serif;'}}
              
              />}
              {isTabletOrMobile &&<TypeAnimation
                  sequence={[
                      "I go by the name of Akmuharrami and I'm an Omani web developer that is experienced -praise be to Allah- in\n using html"
                      ,
                      500,
                      "I go by the name of Akmuharrami and I'm an Omani web developer that is experienced -praise be to Allah- in\n using css",
                      500,
                      "I go by the name of Akmuharrami and I'm an Omani web developer that is experienced -praise be to Allah- in\n using Javascript",
                      500,
                         "I go by the name of Akmuharrami and I'm an Omani web developer that is experienced -praise be to Allah- in\n using React, and its various libraries.",
                      500,
                  ]}
                  deletionSpeed={20}
                  speed={40}
                  delay={2}
                  style={{display:'block',whiteSpace: 'pre-line',fontSize:'1.4em', color:"#E5F6EC", fontFamily:' Georgia, serif;'}}
              
              />}
              { isDesktopOrLaptop &&<motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 5.5,
                  ease: [0, 0.71, 0.2, 1.01]

                }}
                style={{display:'flex', justifyContent:'space-between', background:'#323136', marginTop: '55px', marginBottom:'85px', height:'50vh'}}>
           { isDesktopOrLaptop && <img style={{visibility:'visible',height:"80vh", width:"45vw", objectFit: "cover", objectPosition:"-6vw -7vh", marginTop:30, transition: 'all .20s', maxHeight:'50vh', maxWidth:'40vw'}} src="https://img.freepik.com/premium-photo/computer-with-lit-screen-that-says-cyberpunk-it_575980-1019.jpg?w=1800" alt="" />}
           { isTabletOrMobile && <img style={{visibility:'visible',height:"37vh", width:"45vw", objectFit: "cover", objectPosition:"-13vw -7vh", marginTop:40, transition: 'all .20s', maxHeight:'50vh', maxWidth:'80vw'}} src="https://img.freepik.com/premium-photo/samurai-meditating-blooming-garden-vintage-style_76964-1996.jpg?w=2000" alt="" />}

           {isDesktopOrLaptop &&<motion.div
           style={{backgroundColor:"rgb(239, 193, 148, 0.95)", marginTop: '45px', height: '40vh', marginRight: '2vw', width: '55vw', borderRadius:'25px'}}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 5.5,
                  ease: [0, 0.71, 0.2, 1.01]

                }}>
                  <img src='scre.png' alt=''></img>
                  {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
              {isDesktopOrLaptop && <h2 style={{fontSize: '25px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#731C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>I'm a freelancer that is based in Oman Muscat <br></br> and I am ready to design your proffesional website <br></br>And this is where I display my skills.<br></br> <span> <h5 style={{color:'black'}}>Feel free to contact me on <a href='https://wa.me/96896338791'>whatsapp +968 9633 8791</a></h5></span> </h2>}
           </motion.div>}
           {isTabletOrMobile &&<motion.div
           style={{backgroundColor:"rgb(219, 193, 148, 0.95)", marginTop: '40px', height: '30vh', marginRight: '2vw', marginLeft:'1vw' ,width: '50vw', borderRadius:'25px'}}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 5.5,
                  ease: [0, 0.71, 0.2, 1.01]

                }}>
                  <img src='scre.png' alt=''></img>
                  {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
              {isTabletOrMobile && <h2 style={{marginTop:'.5px',fontSize: '15.5px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#738C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>I'm a freelancer that is based in Oman Muscat and I am ready to design your proffesional website. And this is where I display my skills. <h5 style={{color:'black', fontSize:'12px'}}>Feel free to contact me on <a href='https://wa.me/96896338791'>whatsapp +968 9633 8791</a></h5> </h2>}
           </motion.div>}
          </motion.div>}
          { isTabletOrMobile &&<motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 5.5,
                  ease: [0, 0.71, 0.2, 1.01]

                }}
                style={{display:'flex', justifyContent:'space-between', background:'#323136', marginTop: '5vh', marginBottom:'8vh', height:'40vh'}}>
           { isTabletOrMobile && <img style={{visibility:'visible',height:"37vh", width:"45vw", objectFit: "cover", objectPosition:"-23vw -6vh", marginTop:37, transition: 'all .20s', maxHeight:'50vh', maxWidth:'80vw'}} src="https://img.freepik.com/premium-photo/computer-with-lit-screen-that-says-cyberpunk-it_575980-1019.jpg?w=1800" alt="" />}

           {isDesktopOrLaptop &&<motion.div
           style={{backgroundColor:"rgb(239, 193, 148, 0.95)", marginTop: '45px', height: '40vh', marginRight: '3vw', width: '55vw', borderRadius:'25px'}}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 5.5,
                  ease: [0, 0.71, 0.2, 1.01]

                }}>
                  <img src='scre.png' alt=''></img>
                  {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
              {isDesktopOrLaptop && <h2 style={{fontSize: '25px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#731C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>I'm a freelancer that is based in Muscat - Oman and I'm ready to design your proffesional website. And this is where I display my skills.  <h5 style={{color:'black', fontSize:'12px'}}>keep scrolling and you'll be satisfied, <br></br></h5> </h2>}
           </motion.div>}
           {isTabletOrMobile &&<motion.div
           style={{backgroundColor:"rgb(219, 193, 148, 0.95)", marginTop: '40px', height: '30vh', marginRight: '2vw', marginLeft:'1vw' ,width: '50vw', borderRadius:'25px'}}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 5.5,
                  ease: [0, 0.71, 0.2, 1.01]

                }}>
                  <img src='scre.png' alt=''></img>
                  {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
              {isTabletOrMobile && <h2 style={{marginTop:'.5px',fontSize: '15.5px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#731C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>I'm a freelancer that is based in Muscat - Oman and I'm ready to design your proffesional website. And this is where I display my skills.  <h5 style={{color:'black', fontSize:'12px'}}>keep scrolling and you'll be satisfied, <br></br>young one</h5> </h2>}
           </motion.div>}
          </motion.div>}
          {isTabletOrMobile &&<div>
              <motion.h2
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true, amount: 0.8}}
              variants={cardVariants}
              style={{fontSize:'13px',textAlign:"center", color:"white", WebkitTextStroke: '1px 0b0e13', marginBottom:'9vh'}}> * The following is an example from a different project <br></br>about the path to God.<br></br> (to display some design capabilities)</motion.h2>
              </div>}
          </div>
          {isDesktopOrLaptop &&<div>
              <motion.h2
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true, amount: 0.8}}
              variants={cardVariants}
              style={{fontSize:'17px',textAlign:"center", color:"white", WebkitTextStroke: '1px 0b0e13', marginBottom:'9vh'}}> * The following is an example from a different project <br></br>about the path to God.<br></br> (to display some design capabilities)</motion.h2>
              </div>}
          {isDesktopOrLaptop &&<div>
              <motion.h2
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true, amount: 0.8}}
              variants={cardVariants}
              style={{fontSize:'27px',textAlign:"center", color:"white",textShadow: '1px 1px 7px rgb(255 30 160 / 50%)', WebkitTextStroke: '1px 0b0e13' }}> It is a known fact that in every journey/story<br></br> the following are the key aspects:</motion.h2>
              <motion.div initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true, amount: 0.8}}
              variants={cardVariants}
              style={{display:'flex', justifyContent:'space-around'}}>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'12vw',textAlign:'center',lineHeight:4}}>Main Charecter</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlesclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>The stimulus</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlegclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'14vw',textAlign:'center',lineHeight:4}}>Goal/destination</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handleeclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>Enemies</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handleaclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>Allies</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handleskclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px',fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>Skills</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handleguclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>A guide</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemiclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>Milestones</h3></button>


              </motion.div>
              {/* so how does that link up to our current topix you might say, well let's see */}
              <div id='pbody'>
              <svg id="progress" width="100" height="100" viewBox="0 0 100 100" style={{left:'-40%'}}>
      <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className="indicator"
        style={{ pathLength: scrollXProgress }}
      />
    </svg>
    <ul id='pul' ref={ref} >
      <li id='pli' style={{display:'flex', background:'#D8D8D8'}}><img src='https://img.freepik.com/premium-photo/black-white-photo-samurai-with-sword-generative-ai_791316-11446.jpg?w=740' alt=''></img><h1 style={{ color:'black'}}>In this journey to your Lord, you are the main charecter. It is upon you to decide which path you shall take. The path to heaven or the path to hell. This whole journey revolves around you alone. ( Whoever chooses to be guided, it is only for their own good. And whoever chooses to stray, it is only to their own loss. <br></br>No soul burdened with sin will bear the burden of another.) This essentialy eliminates the ability of others in hindering you, as all what they say or do in essence is of no value.</h1></li>
      <li id='pli' style={{display:'flex', background:'#EECEAB'}}><img src='https://cdn.openart.ai/uploads/image_1663344621196_1024.jpg' alt='' ></img><h1 style={{ color:'black'}}>In every good story there has to be something that sparks the determination in the heart of the main character. And that here could vary. One may walk upon this path out of shame of his previous sinful past. He feels embarrased knowing that his lord is aware of his every move rather his every thought. And there is him that walks upon this path in gratitude to his almighty Lord who gave him everything. Gave him a possibility of witnessing his magnificence, a chance of entering his paradise etc. Then there is also him who walks upon this path in fear of the hereafter, fear of entering eternal fire. And also out of intense desire for entering paradise </h1></li>
      <li id='pli' style={{display:'flex', background:'#EFEAA2'}}><img src='https://cdn.openart.ai/stable_diffusion/4c289f5c889f84d02ab096caba0217b5c6e893a2_2000x2000.webp' alt='' ></img><h1 style={{ color:'black'}}>There are various goals to be takens from the stimulus. some are shorthand while others are the real ones in essence. From them is to rule in this earth by the rule of its creator. As it's but a property of his, so it's only right to apply the rules which He has set. And we as self proclaimed slaves of his have a sacred duty upon our shoulders in acheiving that. Theen there is a also the stimulas of protective jelousy. As pride and glory in reality belong to servants of the Lord, and seeing others have that sparks the light of this protective jelousy. (And to Allāh belongs [all] honor, and to His Messenger, and to the believers) [63:8] </h1></li>
      <li id='pli' style={{display:'flex', background:'#C74B48'}}><img src='https://images.nightcafe.studio/jobs/vk1bvE8KJduViuRrR6vt/vk1bvE8KJduViuRrR6vt--1--7ylu9.jpg?tr=w-1600,c-at_max' alt='' ></img><h1 style={{ color:'black'}}>In every story there are enemies that satnd in the way of the main character, trying their all to stop him from reaching his goal. In this path the enemies are of two kind, the devil and one's own self. Scholars have differed on which of the two is the ultra nemises, is it the devil who swore upon himself to try his all to obstruct and misguide or is it the hungry soul which is ready to give up all to achieve its desires. Some said that logically the inside enemy is more toublesame than the outside enemy, since it knows the nature of its self. Knowing the weakpoints and knowing when to tackle them.</h1></li>
      <li id='pli' style={{display:'flex', background:'#F7D174'}}><img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' ></img><h1 style={{ color:'black'}}>One is weak by himself strong by his allies as they say. In the way of the believer there awaits him countless challanges and enemies, and facing them by himself although possible by the will of Allah it still is a dangerous choice. That's why Islam has built a sacred link between its adherers, to the stage of praising the act of him who sacrifises himself to save his comrade.</h1></li>
      <li id='pli' style={{display:'flex', background:'#E7CD91'}}><img src='https://img.freepik.com/premium-photo/surreal-chess-game-board-pieces-figurines-intricate-figurines-designn-beautiful-made-art_751108-2499.jpg?w=1060' alt='' ></img><h1 style={{ color:'black'}}>There isn't someone without skill. Each has a skill which has been gifted to him by God, him not finding it does not negate its existince. Some may be fortunate enough to notice these skills from a young age, thus making use of them to get ahead of others. </h1></li>
      <li id='pli' style={{display:'flex', background:'#FCC77E'}}><img src='https://img.freepik.com/premium-photo/amazing-world-with-books-big-sun-background-generative-ai_58409-38729.jpg?w=1800' alt='' ></img><h1 style={{ color:'black'}}>One cannot walk towards a destination <br></br>except by having a guide that shows him the general view of the path. And that is exactly the mission of Holy Quran and the <br></br>Messanger Mohammed peace be upon him which this book has bee sent unto. It contians the stories of the past nations as well as the guidelines that should be followed etc. </h1></li>
      <li id='pli' style={{display:'flex', background:'#F5DF89'}}><img src='https://previews.123rf.com/images/summertime72/summertime722303/summertime72230300717/200999052-ai-generative-midjourney-illustration-of-a-fantasy-stairway-to-heaven.jpg' alt='' ></img><h1 style={{ color:'black'}}>A human by nature goes through various types of feeling as he walks upon his path to god. So without having signs at place that makes him at ease knowing that he is upon the truth he may not be able to gather his strength to continue on this path. Not mentioning that there are ranks that vary between the beleivers, and for one to climb them there has to exist a criteria by which he can Identify them. And on this path exists various milestones that could be identified. </h1></li>
    </ul>
              </div>
          </div>}
          {isTabletOrMobile &&<div>
              <motion.h2
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true, amount: 0.8}}
              variants={cardVariants}
              style={{fontSize:'23px',textAlign:"center", color:"white",textShadow: '1px 1px 7px rgb(255 30 160 / 50%)', WebkitTextStroke: '1px 0b0e13' }}> It is a known fact that in every journey/story<br></br> the following are the key aspects:</motion.h2>
              <motion.div initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true, amount: 0.5}}
              variants={cardVariants}
              style={{ textAlign:'center'}}>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6.5vh',width:'17vw',textAlign:'center',lineHeight:1.5}}>Main <br></br> Character</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemsclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'19vw',textAlign:'center',lineHeight:1}}><br></br>The stimulus</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemgclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'22vw',textAlign:'center',lineHeight:1}}><br></br>Goal/destination</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemeclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:1}}><br></br>Enemies</h3></button> <br></br>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemaclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:3.3}}>Allies</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemskclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:3.3}}>Skills</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemguclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:3.3}}>A guide</h3></button>
                  <button onClick={() => {
                    const bbb = new Promise ((resolve, reject) => {
                    setTimeout(() => {
                      resolve(n());
                      
                    }, 100)});
                    bbb.then ((val) => {handlemmiclick();})
                    .then (() => {n()})
                   }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'17vw',textAlign:'center',lineHeight:3.3}}>Milestones</h3></button>


              </motion.div>
              {/* so how does that link up to our current topix you might say, well let's see */}
              <div id='pbody' style={{marginTop:'-13px'}}>
              <svg id="progress" width="100" height="100" viewBox="0 0 100 100" style={{left:'-40%'}}>
      <circle cx="50" cy="50" r="20" pathLength="1" className="bg" />
      <motion.circle
        cx="50"
        cy="50"
        r="20"
        pathLength="1"
        className="indicator"
        style={{ pathLength: scrollXProgress }}
      />
    </svg>
    <ul id='mul' ref={ref} >
      <li id='mli' style={{display:'flex', background:'#D8D8D8'}}><img src='https://img.freepik.com/premium-photo/black-white-photo-samurai-with-sword-generative-ai_791316-11446.jpg?w=740' alt='' style={{width:'20vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>In this journey to your Lord, you are the main charecter. It is upon you to decide which path you shall take. The path to heaven or the path to hell. This whole journey revolves around you alone. ( Whoever chooses to be guided, it is only for their own good. And whoever chooses to stray, it is only to their own loss. <br></br>No soul burdened with sin will bear the burden of another.) This essentialy eliminates the ability of others in hindering you, as all what they say or do in essence is of no value.</h1></li>
      <li id='mli' style={{display:'flex', background:'#EECEAB'}}><img src='https://cdn.openart.ai/uploads/image_1663344621196_1024.jpg' alt='' style={{width:'18vh', objectFit:'cover'}} ></img><h1 id="ph1" style={{ color:'black'}}>In every good story there has to be something that sparks the determination in the heart of the main character. And that here could vary. One may walk upon this path out of shame of his previous sinful past. He feels embarrased knowing that his lord is aware of his every move rather his every thought. And there is him that walks upon this path in gratitude to his almighty Lord who gave him everything. Gave him a possibility of witnessing his magnificence, a chance of entering his paradise etc. Then there is also him who walks upon this path in fear of the hereafter, fear of entering eternal fire. And also out of intense desire for entering paradise </h1></li>
      <li id='mli' style={{display:'flex', background:'#EFEAA2'}}><img src='https://cdn.openart.ai/stable_diffusion/4c289f5c889f84d02ab096caba0217b5c6e893a2_2000x2000.webp' alt='' style={{width:'20vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>There are various goals to be takens from the stimulus. some are shorthand while others are the real ones in essence. From them is to rule in this earth by the rule of its creator. As it's but a property of his, so it's only right to apply the rules which He has set. And we as self proclaimed slaves of his have a sacred duty upon our shoulders in acheiving that. Theen there is a also the stimulas of protective jelousy. As pride and glory in reality belong to servants of the Lord, and seeing others have that sparks the light of this protective jelousy. (And to Allāh belongs [all] honor, and to His Messenger, and to the believers) [63:8] </h1></li>
      <li id='mli' style={{display:'flex', background:'#C74B48'}}><img src='https://images.nightcafe.studio/jobs/vk1bvE8KJduViuRrR6vt/vk1bvE8KJduViuRrR6vt--1--7ylu9.jpg?tr=w-1600,c-at_max' alt='' style={{width:'20vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>In every story there are enemies that satnd in the way of the main character, trying their all to stop him from reaching his goal. In this path the enemies are of two kind, the devil and one's own self. Scholars have differed on which of the two is the ultra nemises, is it the devil who swore upon himself to try his all to obstruct and misguide or is it the hungry soul which is ready to give up all to achieve its desires. Some said that logically the inside enemy is more toublesame than the outside enemy, since it knows the nature of its self. Knowing the weakpoints and knowing when to tackle them.</h1></li>
      <li id='mli' style={{display:'flex', background:'#F7D174'}}><img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'23vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>One is weak by himself strong by his allies as they say. In the way of the believer there awaits him countless challanges and enemies, and facing them by himself although by the will of Allah it still is a dangerous choice. That's why Islam has built a sacred link between its adherers, to the stage of praising the act of him who sacrifises himself to save his comrade.</h1></li>
      <li id='mli' style={{display:'flex', background:'#E7CD91'}}><img src='https://img.freepik.com/premium-photo/surreal-chess-game-board-pieces-figurines-intricate-figurines-designn-beautiful-made-art_751108-2499.jpg?w=1060' alt='' style={{width:'23vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>There isn't someone without skill. Each has a sill which has been gifted to him by God, him not finding it does not negate its existince Some may be fortunate enough to notice these skills from a young age, thus making use of them to get ahead of others. </h1></li>
      <li id='mli' style={{display:'flex', background:'#FCC77E'}}><img src='https://img.freepik.com/premium-photo/amazing-world-with-books-big-sun-background-generative-ai_58409-38729.jpg?w=1800' alt='' style={{width:'23vh', objectFit:'cover'}} ></img><h1 id="ph1" style={{ color:'black'}}>One cannot walk towards a destination <br></br>except by having a guide that shows him the general view of the path. And that is exactly the mission of Holy Quran and the <br></br>Messanger Mohammed peace be upon him which this book has bee sent unto. It contians the stories of the past nations as well as the guidelines that should be followed etc. </h1></li>
      <li id='mli' style={{display:'flex', background:'#F5DF89'}}><img src='https://previews.123rf.com/images/summertime72/summertime722303/summertime72230300717/200999052-ai-generative-midjourney-illustration-of-a-fantasy-stairway-to-heaven.jpg' alt='' style={{width:'23vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>A human by nature goes through various types of feeling as he walks upon his path to god. So without having signs at place that makes him at ease knowing that he is upon the truth he may not be able to gather his strength to continue on this path. Not mentioning that there are ranks that vary between the beleivers, and for one to climb them there has to exist a criteria by which he can Identify them. And on this path exists various milestones that could be identified. </h1></li>
    </ul>
              </div>
          </div>}
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 22.5,
                  ease: [0, 0.71, 0.2, 1.01]}}>
          <h2 style={{color: "white"}}>Image References:</h2>
          <a href="https://www.freepik.com">6 images from freepik</a> <br></br>
          <a href="https://www.openart.ai">2 images from openart.ai</a> <br></br>
          <a href="https://creator.nightcafe.studio">1 image from nightcafe</a> <br></br>
          <a href="https://www.123rf.com">1 image from 123rf</a> <br></br>

        </motion.div>
      </div>
    )
    }