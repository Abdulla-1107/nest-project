import { PrismaService } from "src/prisma/prisma.service";
export declare class SessionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        data: {
            info: string | null;
            id: string;
            userId: string;
            ipAddress: string | null;
            location: string | null;
            date: Date;
        };
    }>;
}
