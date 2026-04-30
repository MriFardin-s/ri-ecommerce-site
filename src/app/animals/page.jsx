
import BuyButton from '@/components/BuyButton/BuyButton';
import { getAllAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const AllAnimalsPage = async () => {

    const animals = await getAllAnimals()
    return (
        <section className="py-16 max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">All Animals</h2>
                    <div className="w-20 h-1 bg-green-600 mt-2"></div>
                </div>
                <Link href="/animals" className="text-green-700 font-semibold hover:underline">View All</Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {animals.map((animal) => (
                    <div key={animal.id} className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition overflow-hidden">

                        <div className="relative h-72 w-full">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-contain bg-gray-100"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="font-bold text-lg text-gray-800">{animal.name}</h3>
                            <p className="text-sm text-gray-500">{animal.breed} • {animal.location}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-xl font-bold text-green-700">৳{animal.price.toLocaleString()}</span>
                                <div className='flex gap-2'>
                             <BuyButton  animalName={animal.name} />
                            <Link href={`/animals/${animal.id}`} className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">Details</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllAnimalsPage;