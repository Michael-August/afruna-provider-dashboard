export interface IBooking {
    amount: string;
    createdAt: any;
    customerId: CustomerId;
    location: string;
    providerId: string;
    serviceId: any;
    status: string;
    _id: string;
}

interface CustomerId {
    addresses: any[];
    avatar: string;
    bookings: number;
    country: string;
    email: string;
    firstName: string;
    following: string[];
    isVendor: boolean;
    lastName: string;
    password: string;
    phoneNumber: string;
    role: string;
    verificationToken: string;
    _id: string;
}