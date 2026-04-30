import { getAllAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';





const FeaturedAnimals = async () => {
    const animals = await getAllAnimals()
    const featured = animals.slice(0, 4); // প্রথম ৪টি আইটেম

    return (
        <section className="py-16 max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Featured Animals</h2>
                    <div className="w-20 h-1 bg-green-600 mt-2"></div>
                </div>
                <Link href="/animals" className="text-green-700 font-semibold hover:underline">View All</Link>
            </div>

            {featured.map((animal) => (
                <div key={animal.id} className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition overflow-hidden">

                    {/* ইমেজের প্যারেন্ট ডিভটি অবশ্যই 'relative' হতে হবে */}
                    <div className="relative h-48 w-full">
                        <Image
                            src={animal.image}
                            alt={animal.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-800">{animal.name}</h3>
                        <p className="text-sm text-gray-500">{animal.breed} • {animal.location}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-xl font-bold text-green-700">৳{animal.price.toLocaleString()}</span>
                            <Link href={`/animals/${animal.id}`} className="text-sm bg-gray-100 px-3 py-1 rounded-md hover:bg-green-50">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FeaturedAnimals;