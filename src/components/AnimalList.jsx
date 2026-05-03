import { getAllAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const AnimalList = async ({ sortOrder }) => {
    const animals = await getAllAnimals();

    const sortedAnimals = [...animals].sort((a, b) => {
        if (sortOrder === 'low-to-high') return a.price - b.price;
        if (sortOrder === 'high-to-low') return b.price - a.price;
        return 0;
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedAnimals.map((animal) => (
                <div key={animal.id} className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                    <div className="relative h-72 w-full">
                        <Image
                            src={animal.image}
                            alt={animal.name}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="font-bold text-xl">{animal.name}</h3>
                        <p className="text-gray-500">{animal.breed}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-2xl font-bold text-green-700">৳{animal.price}</span>
                            <Link href={`/animals/${animal.id}`} className="border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg">
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnimalList;