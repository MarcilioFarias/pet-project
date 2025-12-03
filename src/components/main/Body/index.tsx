import { PetData } from "@/src/data/PetData"
import { PetCard } from "@/src/components/PetCard"

export const Body = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {PetData.map( item => (
                <div key={item.id}>
                    <PetCard 
                        key={item.id}
                        pet={item}
                     />
                </div>
            ))}
        </div>
    )
}