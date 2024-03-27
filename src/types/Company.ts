export type Resource = {
    name: string;
    link: string;
};

export interface Company {
    _id: string;
    name: string;
    type: string[];
    location: string;
    phoneNumber: string;
    email: string;
    resources: Resource[];
    image: string;
    description: string;
}
