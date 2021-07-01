import { BaseEntity } from 'typeorm';
export declare class UserCommand extends BaseEntity {
    id: number;
    email: string;
    seed: string;
    appId: string;
    'created_at': Date;
}
