import ReactPlayer from 'react-player/lazy';
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


function VideoElement(props){

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <motion.div className="video-container" 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0}}}
        transition={{ 
            delay: 0,
            duration: 0.5,   
            ease: "easeOut"
        }}

        whileHover={{ scale: 1.2 , zIndex: 2 }}
        >

            <ReactPlayer className="video-player"
            url={props.url}
            controls="false"
            height="100%"
            width="100%"
            />
        </motion.div>
                

    );
}

export default VideoElement;