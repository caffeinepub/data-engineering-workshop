import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RSVP {
    name: string;
    inviteCode: string;
    timestamp: Time;
    attending: boolean;
}
export type Time = bigint;
export interface InviteCode {
    created: Time;
    code: string;
    used: boolean;
}
export interface Registration {
    name: string;
    email: string;
    timestamp: Time;
    phone: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    generateInviteCode(): Promise<string>;
    getAllRSVPs(): Promise<Array<RSVP>>;
    getAllRegistrations(): Promise<Array<Registration>>;
    getCallerUserRole(): Promise<UserRole>;
    getInviteCodes(): Promise<Array<InviteCode>>;
    getRegistrationCount(): Promise<bigint>;
    getRegistrationsByNewest(): Promise<Array<Registration>>;
    isCallerAdmin(): Promise<boolean>;
    register(name: string, email: string, phone: string): Promise<void>;
    submitRSVP(name: string, attending: boolean, inviteCode: string): Promise<void>;
}
