import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import WebElement from '../components/WebElement';
import SD_Desktop from '../_media/WebElements/SDiPro_Desktop.png';
import SD_Mobile from '../_media/WebElements/SDiPro_Mobile.png';
import Hangout_Mobile from '../_media/WebElements/Hangout_Mobile.png';
import FB_Desktop from '../_media/WebElements/FB_Desktop.png';
import PABLO_Desktop from '../_media/WebElements/PABLO_Desktop.png';


function Web(){
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <section id="web">
            <motion.h1
            style={{padding: '0 2rem'}}
            className="grid"
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
                web projects
            </motion.h1>
            
            <WebElement
            title="SDiPro"
            job="web development, web design, graphic design"
            quote="Smart Decathlon for innovative Professionals is a unique competition to inspire and motivate green building professionals to accelerate the development, large-scale production, and sale of healthy, safe, attractive, energy-efficient homes that adapt to the needs of today’s consumers with smart technology, innovation, and sustainable materials at affordable price points."
            description="I created a brand for the new competition, with informational materials and graphical elements. Then we brought SDiPro online, by designing an informational website about the upcoming competition, as well as managing several social media channels."
            desktop={SD_Desktop}
            mobile={SD_Mobile}
            links={[['SDiPro Site','https://www.decathlonforpros.com/'],['SDiPro Collateral Docs','https://www.google.com']]}
            />
            <WebElement
            title="Hangout"
            job="UI/UX Design"
            quote="We want to help connect people by making it easier to plan hangouts. We want people to spend less time alone and bored and more time having memorable experiences. "
            description="At Hangout I worked with developers to design prototypes for mobile interactions. We worked in figma to design prototypes for react native. "
            mobile={Hangout_Mobile}
            links={[['Hangout Site','https://www.hangoutbeta.com/'],['My Designs','#']]}
            />

            <WebElement
            title="Foxes and Boids"
            job="Game Design, Interactive Design"
            description="Foxes and Boids is an interactive creative coding project, written in p5.js. It is based on genetic algorithms and flocking simulations. When Foxes and Boids are spawned, they each have a unique genetic code that determines factors like size and speed. Boids need to eat fruit, Foxes need to eat Boids. Only the fittest will survive "
            desktop={FB_Desktop}
            links={[['Play Foxes and Boids','https://etsausa.github.io/foxesAndBoids/'],['More about Boids','https://en.wikipedia.org/wiki/Boids']]}
            />

            <WebElement
            title="PAB_LO"
            job="Computer Vision, Interactive Design"
            description="Personal Artist Bot_Learning Optimized. A creative coding project that uses OpenCV. PAB_LO analyzes user submitted photos and detect facial features like eyes, mouth, nose, and chin. It draws facial features according to this data. Then, PAB_LO detects skin tone and fills the drawing with an appropriate average based on analyzed pixels. Finally, PAB_LO chooses a complimentary color to the photo's skin tone, and draws a randomly generated background using those colors."
            desktop={PABLO_Desktop}
            links={[['PAB_LO White Paper','https://docs.google.com/document/d/1s3Nc8VcZaOV_LXvsmVcKmL2xzYCXf4oTD_ZDKK0--qw/edit'],['How PAB_LO works','https://docs.google.com/presentation/d/1TpNzaZGQ04GpDbZZttA8Bczzckpo3DxTWkySbH5_WVM/edit']]}
            />
    
        </section>
    );
}
export default Web;