export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export function getUserInitials(user: User): string {
    return user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase();
}
