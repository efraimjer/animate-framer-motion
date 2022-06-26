import React from 'react'
import {motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';


export default function BounceDown(props) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: props.threshold,
        triggerOnce: props.triggerOnce
    });

    React.useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
      }, [controls, inView]);

      const animation = {
        hidden: { 
            opacity: 0,
             y: -150
            },
        visible: {
            opacity: 1,
            y: 0,
             transition: {
                duration: props.duration,
                delay: props.delay,
                type: 'spring',
                bounce: props.bounce || 0.4
             }  
        }
    }
  return (
    <motion.div 
        {...props}
        ref={ref} 
        initial={'hidden'} 
        animate={controls} 
        transition={{delay: 0.5}} 
        variants={animation}
        
    >
       
    </motion.div>
  )
}
