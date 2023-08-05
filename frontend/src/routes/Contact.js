import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import { useState} from "react";
import axios from "axios";
import "../components/ContactFormStyles.css";

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')  
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const axiosPostData = async() => {
      const postData = {
          name: name,
          email: email,
          subject: subject,
          message: message
      }

      await axios.post('http://localhost:1200/contact/send', postData)
      .then(res => setError(<p className="success">{res.data}</p>))
  }

  const handleSubmit = (e) => {
      e.preventDefault()

      if (!message) {
          setError(<p className="required">Message is empty. Please type a message.</p>)
      } else {
          setError('')
          axiosPostData()
      }
  }

  return (
      <>
          <Navbar />
          <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Contact"
            btnClass="hide"
          />
          <div className="from-container">
            <h1>Send a message to us!</h1>
            <form>
                <label>Name</label>
                <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Subject</label>
                <textarea id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}></textarea>

                <label>Message</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                
                {error}

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
          <Footer />
      </>

      
  )
}

export default Contact
