// pages/Contact.js
import { useState } from 'react';
import axios from 'axios';
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post('/api/contact', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <form className={`${styles.contactForm} ${submitSuccess && styles.success}`} onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputField}
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputField}
          type="tel"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button className={`${styles.submitButton} ${submitting && styles.submitting}`} type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {submitSuccess && <p className={styles.successMessage}>Message sent successfully!</p>}
    </div>
  );
};

export default Contact;
