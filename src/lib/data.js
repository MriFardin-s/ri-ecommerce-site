export async function getAllAnimals (){
    const res = await fetch ("https://ri-ecommerce-site.vercel.app/allAnimal.json")
    const data = await res.json();
    return data
}