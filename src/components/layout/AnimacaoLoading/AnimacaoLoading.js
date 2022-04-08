import "./AnimacaoLoading.css";
import IconeLoading from "../../../assets/svg/folhaLoading/folhaLoading.svg";
import { motion } from "framer-motion";

const conatainerLoadingVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const iconeLoadingVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const iconeLoadingTransition = {
  duration: 0.2,
  repeatType: "reverse",
  repeat: Infinity,
  ease: "easeIn",
};

const AnimacaoLoading = () => {
  return (
    <motion.div
      className="container-loading"
      variants={conatainerLoadingVariants}
      initial="start"
      animate="end"
    >
      <motion.img
        className={"icone-loading"}
        src={IconeLoading}
        alt="Icone de folha"
        variants={iconeLoadingVariants}
        transition={iconeLoadingTransition}
      />
      <motion.img
        className={"icone-loading"}
        src={IconeLoading}
        alt="Icone de folha"
        variants={iconeLoadingVariants}
        transition={iconeLoadingTransition}
      />
      <motion.img
        className={"icone-loading"}
        src={IconeLoading}
        alt="Icone de folha"
        variants={iconeLoadingVariants}
        transition={iconeLoadingTransition}
      />
    </motion.div>
  );
};

export default AnimacaoLoading;
