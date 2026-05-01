'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
      const name = e.target.name.value;
      const imageUrl = e.target.imageUrl.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

        // const { name, email, imageUrl, password } = data;
        const {data, error} = await authClient.signUp.email({
             name,
              email,
               imageUrl,
                password,
        })


        console.log({data, error})
        toast.info("রেজিস্ট্রেশন সফলভাবে সম্পন্ন!");
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">নতুন একাউন্ট</h2>
                    <p className="text-gray-500 mt-2">কুরবানি হাটে যোগ দিন আজই</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">পুরো নাম</label>
                        <input
                            name='name'
                            type="text"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                            placeholder="আপনার নাম"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">ইমেজ ইউআরএল</label>
                        <input
                            name='imageUrl'
                            type="img url"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                            placeholder="place your image url"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">ইমেইল এড্রেস</label>
                        <input
                            name='email'
                            type="email"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                            placeholder="example@mail.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
                        <input
                            name='password'
                            type="password"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                            placeholder="কমপক্ষে ৮ ডিজিট"
                        />
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" required className="h-4 w-4 text-green-600 border-gray-300 rounded" />
                        <label className="ml-2 block text-sm text-gray-600">
                            আমি সব <span className="text-green-600 underline">শর্তাবলী</span> মেনে নিচ্ছি
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300 transform active:scale-95"
                    >
                        রেজিস্টার করুন
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    ইতিমধ্যেই একাউন্ট আছে?
                    <Link href="/login" className="text-green-600 font-bold hover:underline ml-1">লগইন করুন</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;