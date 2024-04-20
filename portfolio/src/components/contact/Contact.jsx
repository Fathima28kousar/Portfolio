import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t0rpp2s",
        "template_n5xn2i5",
        formRef.current,
        "ojWrSVgaw96eTbI6n"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className={styles.contact}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className={styles.textContainer} variants={variants}>
        <motion.h1 variants={variants}>Contact Me</motion.h1>
      </motion.div>

      <motion.div className={styles.formContainer}>
        <motion.form
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input type="text" required placeholder="Name" name="name" />
          <label>Email</label>
          <input type="email" required placeholder="Email" name="email" />
          <label>Message</label>
          <textarea rows={8} placeholder="Your Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
