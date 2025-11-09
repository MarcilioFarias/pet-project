export type PetProps = {
    id: number;
    name:string;
    breed: string;
    age: number;
    description?: string;
    imageUrl: string;
    liked?: boolean;
}