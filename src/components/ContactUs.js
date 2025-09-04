import React, { useState } from 'react'
import './ContactUs.css'
import Navbar from './navbar'
import left_img from './images/INDIAMUN/logo left.webp'
import right_img from './images/INDIAMUN/logo right.webp'
import Footer from './footer.js'
import { projectFirestore } from './firebase/config';
import { useFirestore } from './hooks/useFirestore';


const cors = require('cors')({ origin: true });

const ContactUs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = projectFirestore;
    const collectionRef = db.collection('contact-us');

    // Create an object with the data to send to Firestore
    const data = {
      name,
      email,
      message
    };

    try {
      // Add the document to the collection
      const docRef = await collectionRef.add(data);
      console.log('Document written with ID: ', docRef.id);

      // Reset form fields or perform any other actions you need
      setName('')
      setEmail('')
      setMessage('')

    } catch (error) {
      console.error('Error adding document to Firestore: ', error);
      // Handle the error as needed
    }
  }

  return (
    <>
      <div className='top_comp'>
        <a href='/'><img className='left_img' src={left_img} alt="" /></a>
        <h2>INDIA’S YOUTH FOR CLIMATE ACTION</h2>
        <img className='right_img' src={right_img} alt="" />
      </div>

      <Navbar />

      <div className='main-policy-container'>
        <h2 className='policy-title'>Contact Us</h2>
        <p className="policy-text">
          You may contact us using the information below: <br /><br />
          Merchant Legal entity name: Gaiaditya Enterprises Private Limited.<br />
          Registered Address: No 513. Ground Floor, 3rd B Main, Bhuvanagiri, Banaswadi, Bangalore, Karnataka, India Bangalore KARNATAKA 560043<br />
          Operational Address: #615/a, First Cross, Domlur Layout, Bangalore Bangalore KARNATAKA 560071 <br /> 
          E-Mail ID: secretariat@indiamun.org , munofindia@gmail.com
        </p>
      </div>

      <Footer />
    </>
  )
}

export default ContactUs