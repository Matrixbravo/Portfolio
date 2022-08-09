import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_neti1x8',
                'template_abvfpic',
                form.current,
                '2FsHhVXnFMtuUnGsx'
            )
            .then(
                (result) => {
                    alert('Message successfully sent!')
                    console.log(result.text);
                },
                (error) => {
                    alert('Failed to send the message, please try again')
                    console.log(error.text);
                }
            );
            e.target.reset();
    }

    return (
        <div>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in big opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        name="user_name" 
                                        required 
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="user_email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Naya Nangal,
                    <br />
                    India,
                    <br />
                    Nangal Punjab, 140126 <br />
                    Punjab, Ropar <br />
                    <br />
                    <span>udaysinghdbz@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[31.387909, 76.349163]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[31.387909, 76.349163]}>
                            <Popup>Come visit me I will make you a cup Tea :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    );
}

export default Contact
