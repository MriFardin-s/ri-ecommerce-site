// export async function getAllAnimals (){
//     const res = await fetch ("https://ri-ecommerce-site.vercel.app/allAnimal.json")
//     const data = await res.json();
//     return data
// }


export const getAllAnimals = async () => {
  await new Promise((solve) => setTimeout(solve, 3000)); 
  const res = await fetch("https://ri-ecommerce-site.vercel.app/allAnimal.json"); 
  const data = await res.json();
  return data
};


export const getAnimalById = async (id) => {
    const animals = await getAllAnimals();
    return animals.find(item => item.id.toString() === id.toString());
};