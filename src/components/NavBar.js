import { motion } from "framer-motion";
import NavItem from "./NavItem";

import logo from '../_media/Branding/logo.svg'

function NavBar(){
  return(
    <nav>
        <div style={{float: 'left'}}>
          <a href="/">
          <motion.img 
            src={logo}
            alt="a logo of mine"
            style={{ height: '1.5em'}}

            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            whileTap={{ scale: 0.9 }}

            initial={{ x: 15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          /></a>
        </div>

        <motion.ul
          className="page-links" 
          style={{float: 'right'}}
          initial={{x: -15, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{ 
            delay: 1,
            duration: 0.5,   
            ease: "easeOut"
          }}
        >
          <NavItem title="about"/>
          <NavItem title="video"/>
          <NavItem title="web"/>
        </motion.ul>
    </nav>
    
  );
}

export default NavBar;