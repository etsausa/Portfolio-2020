import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


function WebElement(props){
    
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);
  

    return(
        <motion.div 
        className="web-container"
        style={{padding: '0'}}

        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0}}}
        transition={{ 
            delay: 0.7,
            duration: 0.5,   
            ease: "easeOut"
        }}
        >
        
            <div className="info">
                <h1 className="title">{props.title}</h1>
                
                <h3 className="job">{props.job}</h3>
                <p className="quote">{props.quote}</p>
                <p className="description">{props.description}</p>
                <div className="links">
                    {props.links
                    ? props.links.map((link) =>
                   
                        <a className="button-link" href={link[1]} target="_blank" rel="noreferrer noopener">
                            {link[0]}
                        </a>
                 
                    )
                    : <></>
                    }
                </div>
                
            </div>

            <div className="images">
                <div className="image-container">
                    { props.desktop 
                    ? <img className="desktop" alt="Desktop" src={props.desktop} />
                    : <></>
                    }

                    { props.mobile && !props.desktop
                    ? <img className="mobile-only" alt="Mobile" src={props.mobile} />
                    : <></>
                    }   

                    { props.mobile && props.desktop
                    ? <img className="mobile" alt="Mobile" src={props.mobile} />
                    : <></>
                    }   
                </div>
            </div>
           <div className="background-shape"></div>
        </motion.div>
    );
}

export default WebElement;