import { useState } from "react";

export const FavPet = () => {

    const [isFav, setIsFav] = useState(false);
    const handleFavClick = ()=> {
        setIsFav(!isFav);
    }
    return (
        <button className={`pet-fav-icon ${isFav ? isFav : ''}` }
         onClick={handleFavClick}>
            {isFav ? '❤️' : '🤍'}
        </button>
    )
}