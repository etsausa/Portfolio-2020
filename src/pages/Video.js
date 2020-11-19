import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import VideoElement from '../components/VideoElement';

function Video(){

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <section id="video">

            <motion.h1 
            style={{padding: '0'}}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0}}}
            transition={{ 
                delay: 0.5,
                duration: 0.5,   
                ease: "easeOut"
            }}
            >
                Video Work
            </motion.h1>

            <div className="gallery-container">
                <VideoElement 
                url="https://vimeo.com/431211545"
                info="My Motion Graphics and Animation reel"
                title="Motion Graphic Reel"
                />

                <VideoElement 
                url="https://www.youtube.com/embed/jDF3RqFewF8"
                info=""
                title="Color is Crazy"
                />

                <VideoElement 
                url="https://vimeo.com/451678493"
                info="My Visual Effects reel"
                title="Visual Effects Reel"
                />

                <VideoElement 
                url="https://vimeo.com/397680561"
                info=""
                title="The Screening Room Intro Graphics"
                />

                <VideoElement 
                url="https://www.youtube.com/embed/egMMg3Xf5jY"
                info=""
                title="The War We Already Lost"
                />

                <VideoElement 
                url="https://www.youtube.com/embed/dqVjKmNspmA"
                info=""
                title="Mr.Gleb"
                />
            </div>

        </section>
        
    );
}
export default Video;