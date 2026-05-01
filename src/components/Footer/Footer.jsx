import Link from 'next/link';
import { BiCopyright } from 'react-icons/bi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">


                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="text-green-500">Qurbani</span>Hat
                    </h2>
                    <p className="text-sm leading-relaxed">
                        আপনার কুরবানির পশুর জন্য বিশ্বস্ত অনলাইন হাট। আমরা নিশ্চিত করি সুস্থ, সবল এবং শরিয়াহ সম্মত পশু সরাসরি খামারিদের কাছ থেকে আপনার দুয়ারে।
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="hover:text-green-500 transition"><FaFacebook size={20} /></a>
                        <a href="#" className="hover:text-green-500 transition"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-green-500 transition"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-green-500 transition"><FaLinkedin size={20} /></a>
                    </div>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-green-500 transition">Home</Link></li>
                        <li><Link href="/animals" className="hover:text-green-500 transition">All Animals</Link></li>
                        <li><Link href="/about" className="hover:text-green-500 transition">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-green-500 transition">Contact Us</Link></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Categories</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/animals" className="hover:text-green-500 transition">Cows (গরু)</Link></li>
                        <li><Link href="/animals" className="hover:text-green-500 transition">Goats (ছাগল)</Link></li>
                        <li><Link href="/animals" className="hover:text-green-500 transition">Camels (উঁট)</Link></li>
                        <li><Link href="/animals" className="hover:text-green-500 transition">Sheep (ভেড়া)</Link></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-green-500" />
                            <span>+880 01647409784</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-green-500" />
                            <span>fkfardin900@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3 italic">
                            <FaMapMarkerAlt className="text-green-500" />
                            <span>খুলনা, বাংলাদেশ</span>
                        </li>
                    </ul>
                </div>

            </div>


            <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs">
                <p className="flex items-center justify-center gap-1">
                    <BiCopyright className="shrink-0" />
                    <span>2026 QurbaniHat. All rights reserved. Developed by</span>
                    <span className="text-green-500 font-semibold ml-1">Ri-Fardin</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;