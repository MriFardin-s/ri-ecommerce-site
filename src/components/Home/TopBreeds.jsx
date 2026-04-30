const TopBreeds = () => {
  const breeds = [
    { name: "Shahiwal", count: "120+ Animals", color: "bg-orange-100" },
    { name: "Brahman", count: "85+ Animals", color: "bg-blue-100" },
    { name: "Black Bengal", count: "200+ Animals", color: "bg-green-100" },
    { name: "Gir", count: "45+ Animals", color: "bg-purple-100" },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Top Breeds</h2>
      <p className="text-gray-500 mb-12">Find the most popular and premium breeds across the country</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {breeds.map((breed, index) => (
          <div key={index} className={`${breed.color} p-8 rounded-3xl hover:scale-105 transition cursor-pointer`}>
            <h3 className="text-xl font-bold text-gray-800">{breed.name}</h3>
            <p className="text-green-700 font-medium">{breed.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBreeds;