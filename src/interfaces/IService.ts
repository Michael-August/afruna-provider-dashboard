export interface IService {
    _id: string;
    category: IServiceCategory;
    name: string;
    location: string;
    rating: number;
}

export interface IServiceCategory {
    _id: string;
    name: string;
    children: IServiceSubCategory
}

export interface IServiceSubCategory {
    _id: string;
    name: string;
}

export interface ICreateService {
    name: string,
    category: string;
    subCategory: string;
    country: string;
    state: string;
    price: number;
    desc: string;
    additionalService: [],
    availability: IAvailability
    media: any[]
}

interface IAvailability {
    days: string[];
    hours: {
        from: string;
        to: string;
    }
    
}


