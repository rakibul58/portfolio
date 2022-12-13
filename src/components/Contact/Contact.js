import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3bklnu', 'template_xiobz9x', form.current, 'U0g6Ht1DVmnBbENk0')
            .then((result) => {
                console.log(result.text);
                toast.success("Message Sent");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='flex flex-wrap flex-col-reverse lg:flex-row items-center lg:justify-around gap-5 w-full animate animatecss animatecss-fadeInDown px-3 md:px-6 lg:px-10'>
            <div className='w-full lg:w-1/2'>
                <div>
                    <div>
                        <form ref={form} onSubmit={sendEmail} noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid shadow-2xl p-5 rounded-xl bg-opacity-10 text-secondary-content font-semibold bg-black">
                            <div>
                                <h1 className='text-secondary-content font-bold text-lg sm:text-2xl'>Feel Free to Contact</h1>
                            </div>
                            <div>
                                <label htmlFor="name" className="text-sm">Full name</label>
                                <input name="user_name" id="name" type="text" placeholder="Name" className="w-full p-3 bg-black bg-opacity-5  border border-gray-600 mt-3 rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input name="user_email" placeholder='Email' id="email" type="email" className="w-full p-3 bg-black bg-opacity-5 border border-gray-600 mt-3 rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm">Message</label>
                                <textarea name="message" placeholder='Message' id="message" rows="3" className="w-full p-3 bg-black bg-opacity-5 border border-gray-600 mt-3 rounded-lg"></textarea>
                            </div>
                            <input type="submit" className="btn btn-primary bg-gradient-to-tr from-primary to-secondary animatecss hover:animatecss-rubberBand animatecss-slow" value='Send Message' />
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/3'>
                <div className='map animatecss animate animate-pulse animatecss-slow'>
                    <MapContainer className='map' center={[22.34, 91.81]} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='<a href=\"https://www.maptiler.com/copyright/\" target=\"_blank\">&copy; MapTiler</a> <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\">&copy; OpenStreetMap contributors</a>'
                            url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=rHRYf2gs4foze0tdJnhm"
                        />
                        <Marker position={[22.34, 91.81]}>
                            <Popup>
                                Chattogram, Bangladesh
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Contact;