import { Suspense } from 'react';
import AnimalList from '@/components/AnimalList';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from "next/navigation";

const AllAnimalsPage = async ({ searchParams }) => {


    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect(`/login?callbackUrl=/animals`);
    }

    const params = await searchParams;
    const sortOrder = params?.sort || 'default';

    return (
        <section className="py-16 max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">All Animals</h2>
                    <div className="w-20 h-1 bg-green-600 mt-2"></div>
                </div>

                <div className="flex items-center gap-4">
                    <label className="font-medium text-gray-600">Sort by:</label>
                    <div className="flex gap-2">
                        <Link
                            href="/animals?sort=low-to-high"
                            className={`px-3 py-1 rounded-full text-sm border transition-all ${
                                sortOrder === 'low-to-high'
                                    ? 'bg-green-600 text-white border-green-600 shadow-sm'
                                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
                        >
                            Price: Low to High
                        </Link>

                        <Link
                            href="/animals?sort=high-to-low"
                            className={`px-3 py-1 rounded-full text-sm border transition-all ${
                                sortOrder === 'high-to-low'
                                    ? 'bg-green-600 text-white border-green-600 shadow-sm'
                                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
                        >
                            Price: High to Low
                        </Link>
                    </div>
                </div>
            </div>
            <Suspense 
                key={sortOrder} 
                fallback={
        <div className="flex flex-col items-center justify-center py-20 min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600 mb-4"></div>
            <p className="text-green-700 font-semibold animate-pulse text-lg">হাটে পশু খোঁজা হচ্ছে...</p>
            <p className="text-gray-500 text-sm">অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন</p>
        </div>
    }
            >
                <AnimalList sortOrder={sortOrder || 'default'} />
            </Suspense>
        </section>
    );
};

export default AllAnimalsPage;