export interface IUserBio {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    avatar: string;
    country: string;
    phoneNumber: string;
    followers: number;
    following: number;
}

export interface IUser {
    addresses: [];
    blocked: boolean;
    country: string;
    email: string;
    firstName: string;
    followers: [];
    following: [];
    fromOauth: boolean;
    isFollower: boolean;
    isFollowing: boolean;
    isProvider: boolean;
    isVendor: boolean;
    lastName: string;
    password: string;
    phoneNumber: string;
    role: string;
    verificationToken: string;
    _id: string;
}
