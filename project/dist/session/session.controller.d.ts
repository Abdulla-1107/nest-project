import { SessionService } from "./session.service";
export declare class SessionController {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    findAll(): Promise<({
        user: {
            firstName: string;
            lastName: string;
        };
    } & {
        info: string | null;
        id: string;
        userId: string;
        ipAddress: string | null;
        location: string | null;
        date: Date;
    })[]>;
    remove(id: string): Promise<{
        info: string | null;
        id: string;
        userId: string;
        ipAddress: string | null;
        location: string | null;
        date: Date;
    }>;
}
