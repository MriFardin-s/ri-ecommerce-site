'use client'
import Link from 'next/link';
import { toast } from 'react-toastify';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
                

            });

            if (error) {
                toast.error(error.message || "লগইন ব্যর্থ হয়েছে!");
                console.error(error);
                return;
            }

            toast.success("লগইন সফলভাবে সম্পন্ন!");
            router.push('/');
            console.log(data);
        } catch (err) {
            toast.error("কিছু একটা ভুল হয়েছে!");
        }

    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">স্বাগতম!</h2>
                    <p className="text-gray-500 mt-2">আপনার একাউন্টে লগইন করুন</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700">ইমেইল এড্রেস</label>
                        <input
                        name="email"
                            type="email"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                            placeholder="example@mail.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
                        <input
                        name="password"
                            type="password"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                            placeholder="password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300 transform active:scale-95"
                    >
                        লগইন করুন
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    একাউন্ট নেই?
                    <Link href="/register" className="text-green-600 font-bold hover:underline ml-1">রেজিস্ট্রেশন করুন</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;