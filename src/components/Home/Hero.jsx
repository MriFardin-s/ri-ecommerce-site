import Link from 'next/link';
import Image from 'next/image';
import Banner from '../../assets/Banner.png';

const Hero = () => {
    return (
        <section className="relative h-100 md:h-150 lg:h-187.5 w-full flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            
           
            <div className="absolute inset-0 z-0">
                <Image
                    src={Banner}
                    alt="Banner"
                    fill
                    priority
                    className="object-cover object-center"
                />
                
                <div className="absolute inset-0 bg-black/50"></div> 
            </div>

            <div className="relative z-10 text-center px-4">
               
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                    Find Your Perfect <span className="text-orange-500">Qurbani</span> Animal
                </h1>
                
                <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto drop-shadow-md">
                    Choose from the best breeds of healthy cows, goats, and camels for your sacred sacrifice.
                </p>

                <Link
                    href="/animals"
                    className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-2xl hover:scale-105 inline-block"
                >
                    Browse All Animals
                </Link>
            </div>
        </section>
    );
};

export default Hero;