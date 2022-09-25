import { Comments } from "./comments";

export interface Dishs {

    id: string;
    name: string;
    image?: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments: Comments[];

}


