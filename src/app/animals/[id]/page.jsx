import BuyButton from '@/components/BuyButton/BuyButton';
import { getAnimalById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';


const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    const animal = await getAnimalById(id);

    return (
        <section className="py-12 max-w-7xl mx-auto px-4">
            {/* Back Button */}
            <Link href="/animals" className="flex items-center text-green-700 font-semibold mb-6 hover:gap-2 transition-all">
                <FaArrowLeft /> Back to Hat
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-3xl shadow-sm border">
                {/* Left side: Image */}
                <div className="relative h-96 md:h-125 w-full rounded-2xl overflow-hidden bg-gray-50 border">
                    <Image
                        src={animal.image}
                        alt={animal.name}
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Right side: Information */}
                <div className="flex flex-col justify-between">
                    <div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wider">
                            {animal.category}
                        </span>
                        <h1 className="text-4xl font-extrabold text-gray-800 mt-4">{animal.name}</h1>
                        <p className="text-gray-500 text-lg mt-1">{animal.breed} • {animal.location}</p>

                        <div className="mt-6 flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-green-700">৳{animal.price.toLocaleString()}</span>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <p className="text-xs text-gray-500 uppercase font-bold">Weight</p>
                                <p className="text-xl font-bold text-gray-800">{animal.weight} KG</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <p className="text-xs text-gray-500 uppercase font-bold">Age</p>
                                <p className="text-xl font-bold text-gray-800">{animal.age} Years</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold text-gray-800 text-xl mb-2">Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {animal.description}
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex gap-4">
                        <div className="flex-1">
                             <BuyButton animalName={animal.name} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnimalDetails;