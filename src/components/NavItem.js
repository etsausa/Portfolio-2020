import { motion } from "framer-motion";

function NavItem(props){
    const link = '#' + props.title;
    return(
        <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <a href={link}>
                {props.title}
            </a>
        </motion.li>
    );
}

export default NavItem;