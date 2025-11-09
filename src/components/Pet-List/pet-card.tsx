import { FavPet } from '../favIcon/favPet';
import './index.css'
import type { PetProps } from "./pet-props";

type Props = {
    pet: PetProps[];
};

export const PetCard = ({pet}: Props) => {
    return (
        <>
        {pet.map(item => (
            <div className="pet-list">
                <div className="pet-card" key={item.id}>
                    <div className="card-image">
                        <img className="pet-img" src={item.imageUrl} alt={item.name} />
                        <i className="fav-icon">                            
                            <div className="pet-fav-icon">
                            <FavPet />
                            </div>
                        </i>
                    </div>
                    <div className="pet-content">
                        <h3>{item.name}</h3>
                        <p>Breed:{item.breed}</p>
                        <p>Age:{item.age}</p>
                        <p>Description:{item.description}</p>
                        <button className="button-adopt">take me home</button>
                    </div>
                </div>
            </div>
        ))}
        </>
    );
}
        