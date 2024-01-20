import { User } from "../types/User";
import { BACKEND_SERVER_ADDRESS } from "./constants";

export type ErrorResult = {
    status: "fail" | "error";
    message: string;
};

export type LoginResult =
    | {
          status: "success";
          token: string;
      }
    | ErrorResult;

export type SignupResult =
    | {
          status: "success";
          token: string;
          data: {
              user: User;
          };
      }
    | ErrorResult;

export async function login(body: string): Promise<LoginResult | null> {
    try {
        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body,
            }
        );
        return res.json();
    } catch (error) {
        return null;
    }
}

export async function signUp(body: string): Promise<SignupResult | null> {
    try {
        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/signup`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );
        return res.json();
    } catch (error) {
        return null;
    }
}
