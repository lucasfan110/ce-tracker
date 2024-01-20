import { JWT_LOCAL_STORAGE_KEY } from "./constants";

export default function setJWTToken(token: string) {
    localStorage.setItem(JWT_LOCAL_STORAGE_KEY, `Bearer ${token}`);
}
