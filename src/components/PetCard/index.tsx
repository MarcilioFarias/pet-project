import { Pet } from '../../types/Pet'

type PetCardProps = {
    pet: Pet
}

export const PetCard = ( {pet}: PetCardProps) => {
    return(
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
                src={pet.photoUrl} 
                alt={pet.name}                 
                className="w-full h-80 object-cover align-middle mx-auto"
            />
            <div className="p-4 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2">{pet.name}</h2>
                <p className="text-gray-700 mb-1"><strong>Age:</strong> {pet.age} years</p>
                <p className="text-gray-700 mb-1"><strong>Type:</strong> {pet.type}</p>
                <p className="text-gray-700 mb-1"><strong>Breed:</strong> {pet.breed}</p>                
                <p className='text-gray-700 mb-1'><strong>Gender:</strong> {pet.gender}</p>
                {pet.description.length > 30 ? pet.description.slice(0, 30) + '...' :
                    <p className="text-gray-600">{pet.description}</p>
                }

                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                    View Details
                </button>
                
            </div>
        </div>  
    )
}