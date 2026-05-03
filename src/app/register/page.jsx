'use client'
import Link from 'next/link';
import { toast } from 'react-toastify';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc"; 

const RegisterPage = () => {
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        try {
            const { data, error } = await authClient.signUp.email({
                email,
                password,
                name,
                image, 
                autoSignIn: false,
            });

            if (error) {
                toast.error(error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে!");
                console.error(error);
                return;
            }
            await authClient.signOut();
            router.refresh();

            
            toast.success("রেজিস্ট্রেশন সফল হয়েছে! লগইন করুন।");
            console.log(data)
            router.push('/login'); 
        } catch (err) {
            toast.error("কিছু একটা ভুল হয়েছে!");
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", 
        });
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">নতুন একাউন্ট!</h2>
                    <p className="text-gray-500 mt-2">আপনার তথ্য দিয়ে রেজিস্ট্রেশন সম্পন্ন করুন</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">সম্পূর্ণ নাম</label>
                        <input
                            name="name"
                            type="text"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                            placeholder="আপনার নাম লিখুন"
                        />
                    </div>

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
                        <label className="block text-sm font-medium text-gray-700">ফটো ইউআরএল </label>
                        <input
                            name="image"
                            type="text"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                            placeholder="https://example.com/photo.jpg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                            placeholder="কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300 transform active:scale-95"
                    >
                        রেজিস্ট্রেশন সম্পন্ন করুন
                    </button>
                </form>

                <div className="mt-6">
                    <div className="relative flex items-center justify-center">
                        <div className="border-t w-full border-gray-300"></div>
                        <span className="bg-white px-3 text-gray-500 text-sm absolute">অথবা</span>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="mt-6 w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition font-medium"
                    >
                        <FcGoogle size={24} /> গুগল দিয়ে রেজিস্ট্রেশন করুন
                    </button>
                </div>

                <p className="text-center mt-6 text-gray-600">
                    ইতিমধ্যে একাউন্ট আছে?
                    <Link href="/login" className="text-green-600 font-bold hover:underline ml-1">লগইন করুন</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;