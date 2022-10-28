import { Hobbies } from "./hobbies";

export interface User {
    name: string;
    age: number;
    favoriteColor: string;
    gender: 'Male' | 'Female';
    hobby: Hobbies;
}
