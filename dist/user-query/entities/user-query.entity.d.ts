/// <reference types="mongoose" />
export declare type UserQueryDocument = UserQuery & Document;
export declare enum EventType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED",
    SYNCRONIZED = "SYNCRONIZED"
}
export declare class UserQuery {
    _id: string;
    id: number;
    email: string;
    appId: string;
    seed: string;
    currentStatus: EventType;
}
export declare const UserQuerySchema: import("mongoose").Schema<import("mongoose").Document<UserQuery, any>, import("mongoose").Model<any, any, any>, undefined, any>;
