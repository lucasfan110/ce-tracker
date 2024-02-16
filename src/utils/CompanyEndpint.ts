import { APIErrorResponse } from "../types/APIErrorResponse";
import { Company } from "../types/Company";
import { User } from "../types/User";
import { BACKEND_SERVER_ADDRESS } from "./constants";

export type GetAllCompaniesResult =
    | {
          status: "success";
          results: number;
          data: {
              companies: Company[];
          };
      }
    | APIErrorResponse;

export type GetOneCompanyResult =
    | {
          status: "success";
          data: {
              company: Company;
          };
      }
    | APIErrorResponse;

export type CreateCompanyResult =
    | {
          status: "success";
          data: {
              company: Company;
          };
      }
    | APIErrorResponse;

export type UpdateCompanyResult = CreateCompanyResult;
export type DeleteCompanyResult =
    | {
          status: "success";
          data: null;
      }
    | APIErrorResponse;

/**
 * A class that helps with sending CRUD operation on the company endpoint
 */
export default class CompanyEndpoint {
    user: User;
    token: string;

    /**
     * Constructs this helper class with user info and token, which are necessary for
     * every CRUD operations on company endpoints
     */
    constructor(user: User, token: string) {
        this.user = user;
        this.token = token;
    }

    /**
     * Get all the companies from this user, with maximum limit of 100.
     * If for some reason failed, throw an error with error message from backend
     */
    async getAll(): Promise<Company[]> {
        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/${this.user._id}/companies`,
            {
                headers: {
                    Authorization: this.token,
                },
            }
        );
        const json: GetAllCompaniesResult = await res.json();
        if (json.status === "success") {
            return json.data.companies;
        } else {
            throw new Error(json.message);
        }
    }

    async getOne(companyId: string): Promise<Company> {
        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/${this.user._id}/companies/${companyId}`,
            {
                headers: {
                    Authorization: this.token,
                },
            }
        );
        const json: GetOneCompanyResult = await res.json();
        if (json.status === "success") {
            return json.data.company;
        } else {
            throw new Error(json.message);
        }
    }

    /**
     * Send a POST request to company endpoint to add a new company
     */
    async create(body: object): Promise<Company> {
        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/${this.user._id}/companies`,
            {
                headers: {
                    Authorization: this.token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
                method: "POST",
            }
        );
        const json: CreateCompanyResult = await res.json();
        if (json.status === "success") {
            return json.data.company;
        } else {
            throw new Error(json.message);
        }
    }

    /**
     * Send a PATCH request to the company endpoint
     */
    async update(companyId: string, body: object): Promise<Company> {
        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/${this.user._id}/companies/${companyId}`,
            {
                headers: {
                    Authorization: this.token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
                method: "PATCH",
            }
        );
        const json: UpdateCompanyResult = await res.json();
        if (json.status === "success") {
            return json.data.company;
        } else {
            throw new Error(json.message);
        }
    }

    /**
     * Delete a company
     */
    async delete(companyId: string): Promise<void> {
        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/${this.user._id}/companies/${companyId}`,
            {
                headers: {
                    Authorization: this.token,
                },
                method: "DELETE",
            }
        );
        const json: DeleteCompanyResult = await res.json();
        if (json.status === "success") {
            return;
        } else {
            throw new Error(json.message);
        }
    }
}
