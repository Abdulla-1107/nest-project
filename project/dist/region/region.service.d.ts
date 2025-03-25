import { PrismaService } from "../prisma/prisma.service";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
export declare class RegionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRegionDto: CreateRegionDto): Promise<{
        id: string;
        name: string;
    }>;
    findAllFiltered(name?: string): Promise<({
        users: {
            firstName: string;
            lastName: string;
        }[];
    } & {
        id: string;
        name: string;
    })[]>;
    findOne(id: string): Promise<{
        users: {
            firstName: string;
            lastName: string;
        }[];
    } & {
        id: string;
        name: string;
    }>;
    update(id: string, updateRegionDto: UpdateRegionDto): Promise<{
        id: string;
        name: string;
    }>;
    remove(id: string): Promise<{
        message: string;
        deletedRegion: {
            id: string;
            name: string;
        };
    }>;
}
