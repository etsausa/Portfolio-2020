import { motion } from "framer-motion";

function HeaderGraphic() {
  return (
    <header id="header" className="col center">
        <motion.div id="header-graphic"

            animate={{ 
            width: ['0%','0%','75%'],
            scale: [0,1,1]
            }}

            transition={{ 
                times: [0, 0.25, 0.75],
                ease: 'easeOut',
                duration: 1.5,   
            }}
        >
            <div className="row center">
                <h1>ethan</h1> 
                <div className="color yellow"/>
            </div>

            <div className="row center">
                <h1>thomas</h1> 
                <div className="color red"/>
            </div>

            <div className="row center">
                <h1>sausa</h1> 
                <div className="color blue"/>
            </div>
            
        </motion.div>
        <motion.h2
        initial={{
            opacity: 0,
            scaleX: 0
        }}
        animate={{ 
            opacity: 1,
            scaleX: 1
        }}
        transition={{ 
            duration: 0.5
        }}
        >
        web &#38; motion
        </motion.h2>
    </header>

  );
}

export default HeaderGraphic;
