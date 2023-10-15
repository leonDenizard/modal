import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

function Modal({ open, onClose }) {
  
    // if (!open) return null;

  const modalVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
  };

  const modalTransition = {
    duration: 0.2,
    ease: "easeOut",
  };

  return (
    <AnimatePresence>
        {open && (
            <motion.div
            className="fixed w-screen h-screen top-0 left-0 bg-opaco-black backdrop-blur-md"
            initial={open ? "hidden" : "visible"}
            animate={open ? "visible" : "hidden"}
            exit="hidden"
            variants={modalVariants}
            transition={modalTransition}
          >
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/12 h-3/5 bg-gray-300 p-4 rounded ">
              <div className="relative w-full flex justify-end">
                <button className="appearance-none z-10" onClick={onClose}>
                  <box-icon type="solid" name="x-circle" size="md"></box-icon>
                </button>
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                conteudo do modal aqui
              </div>
            </div>
          </motion.div>
        ) }
    </AnimatePresence>
    
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
