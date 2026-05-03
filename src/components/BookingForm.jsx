'use client';

import { Card, Button } from '@heroui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const BookingForm = ({ animalName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            toast.success(`সফল হয়েছে! ${animalName} বুকিং করা হয়েছে।`);
            setFormData({ name: '', email: '', phone: '', address: '' });
            setIsLoading(false);
        }, 500);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Card className="mt-8 p-6 shadow-sm border border-divider">
            <div className="flex flex-col items-start mb-6">
                <h3 className="text-xl font-bold text-gray-800">বুকিং করুন: {animalName}</h3>
                <p className="text-sm text-gray-500">আপনার তথ্য দিয়ে নিশ্চিত করুন।</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="text-xs font-bold text-gray-600 uppercase mb-1 block">Name</label>
                        <input
                            required
                            name="name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-xs font-bold text-gray-600 uppercase mb-1 block">Email</label>
                        <input
                            required
                            name="email"
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="text-xs font-bold text-gray-600 uppercase mb-1 block">Phone</label>
                    <input
                        required
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="text-xs font-bold text-gray-600 uppercase mb-1 block">Address</label>
                    <textarea
                        required
                        name="address"
                        rows="3"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                        placeholder="Enter your full address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="font-bold text-white shadow-md mt-2 bg-green-600 hover:bg-green-700 transition-colors"
                    isLoading={isLoading}
                >
                    Confirm Booking
                </Button>
            </form>
        </Card>
    );
};

export default BookingForm;