import { motion} from 'framer-motion'

const animation = {
    initial: {
      opacity: 0,
      y : -20,
    },
    animate: {
      opacity: 1,
      y : 0,
    },
    exit: {
      opacity: 0,
      y : -20,
    }
  }

const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
    type: "tween",
}

const AnimatedTags = ({children}) => {
  return (
    <motion.div
    variants={animation}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={transition}
    >{children}</motion.div>
  )
}

export default AnimatedTags