export type Pet = {
    id: number;
    name: string;
    age: number;
    type?: 'dog' | 'cat' | 'bird' | 'other';
    breed: string;
    description: string;
    photoUrl: string;
    fav: boolean;
    gender: 'Female' | 'Male';    
}