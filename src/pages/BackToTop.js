import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

import '../styles/BackToTop.css';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
    <AnimatePresence>
        {isVisible && (
        <motion.button
            className="back-to-top"
            onClick={scrollToTop}

            initial={{
            opacity: 0,
            y: 20,
            scale: 0
            }}

            animate={{
            opacity: 1,
            y: 0,
            scale: 1
            }}

            exit={{
            opacity: 0,
            y: 20,
            scale: 0.9
            }}

            transition={{
            duration: 0.2
            }}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </motion.button>
        )}
    </AnimatePresence>
    );
}

export default BackToTop;