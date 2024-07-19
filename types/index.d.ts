declare type CardProps = {
    item: {
        id: number;
        title: string;
        images: string[];
        bedroom: number;
        bathroom: number;
        price: number;
        address: string;
        latitude: number;
        longitude: number;
    }
   
}

export interface PostData {
    id: number;
    title: string;
    images: string[];
    bedroom: number;
    bathroom: number;
    price: number;
    address: string;
    isSaved: boolean;
    city: string;
    latitude: number;
    longitude: number;
    postDetail: {
        desc: string,
        utilities: string,
        pet: string,
        income: string,
        size: number,
        school: number,
        bus: number,
        restaurant: number,
    }
    user: {
        id: number;
        username: string;
        avatar: string;
    }
 
}


