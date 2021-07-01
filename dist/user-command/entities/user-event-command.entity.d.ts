import { BaseEntity } from 'typeorm';
export declare enum EventType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED",
    SYNCRONIZED = "SYNCRONIZED"
}
export declare class UserEventCommand extends BaseEntity {
    id: number;
    userId: number;
    eventType: EventType;
    eventData: string;
    seed: string;
    appId: string;
    'created_at': Date;
}
