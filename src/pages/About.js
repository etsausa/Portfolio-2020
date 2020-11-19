import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faVimeoV, faGithub } from '@fortawesome/free-brands-svg-icons'

import headshot from '../_media/Branding/HeadShot_Mini.jpg';

function About(){
    
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <section id="about"> 
            <div className="row center wrap">
                
                <motion.div className="col" /* personal info */
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{hidden: { opacity: 0 }, visible: { opacity: 1 }}}
                    transition={{ duration: 0.75 }}
                >
                    <motion.img src={headshot} alt="headshot of me" /* headshot */
                        style={{height: '15em', borderRadius: '50%', margin: '0 5em 2em 5em ' }}
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{hidden: { scale: 0 }, visible: { scale: 1 }}}
                        transition={{ duration: 0.25 }}/>

                    <div className="row center">{/* socials */}
                    
                        {/* vimeo */}
                        <a className="button-link" href="https://vimeo.com/etsausa" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faVimeoV} />
                        </a>    
                        
                        {/* resume */}
                        <a className="button-link" href="#" target="_blank" rel="noreferrer noopener">
                        resume
                        </a> 
                    
                        {/* github */}
                        <a className="button-link" href="https://github.com/etsausa/" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faGithub} />
                        </a> 
                       
                    </div>

                    <div className="col center" style={{margin: '2em' }}>{/* contact */}
                        <span>etsausa@gmail.com</span>
                        <span>516.234.1994</span>
                    </div>

                </motion.div>
                
                <motion.div /* experience info */
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{hidden: { opacity: 0 }, visible: { opacity: 1 }}}
                    transition={{ duration: 0.75 }}
                >
                    <h1>I make <b>shapes move</b> and I make <b>them beautiful</b></h1>
                    <p>My name is <b>Ethan Sausa</b> and I am a <i>Web and Motion Designer. </i></p><br/>
                    
                    <p> {/* Education */}
                        <span style={{fontSize: '2rem'}}> 🎓 Ithaca College,<b> Emerging Media B.S.</b> </span><br/>
                        <span style={{fontSize: '1.1rem', margin: '0 0 0 4rem'}}><i>Magna Cum Laude</i></span><br/>
                        <span style={{fontSize: '1.1rem', margin: '0 0 0 4rem'}}>Minors in <b>Animation and Web Design</b></span> 
                    </p>
                    <p> {/* video */}
                        <span style={{fontSize: '1.5rem'}}> 📹 </span>
                        Adobe Creative Cloud ( <b>
                            <span style={{color: 'BlueViolet'}}>Premiere Pro, </span>
                            <span style={{color: 'purple'}}>After Effects, </span>
                            <span style={{color: 'LightGreen'}}>Audition</span>
                            </b> ), DaVinci Resolve, Fusion
                    </p>
                    <p> {/* design */}
                        <span style={{fontSize: '1.5rem'}}> 🎨 </span>
                        Adobe Creative Cloud ( <b>
                            <span style={{color: 'DodgerBlue'}}>Photoshop, </span> 
                            <span style={{color: 'DarkOrange'}}>Illustrator, </span>
                            <span style={{color: 'Fuchsia'}}>XD, </span>
                            <span style={{color: 'DarkSlateBlue'}}>Lightroom</span>
                            </b> ), Figma
                    </p>
                    <p> {/* web */}
                        <span style={{fontSize: '1.5rem'}}> 🌐 </span>
                        HTML, CSS ( <b>SASS, SCSS, LESS</b> ), Javascript( <b>jQuery, p5.js, react.js</b> ), Flask
                    </p>          
                    <p> {/* comp */}
                        <span style={{fontSize: '1.5rem'}}> 💻 </span>
                        Python, Java, C++, Git, Github

                    </p>              
                    
                </motion.div>
            </div>
        </section>
    );
}

export default About;