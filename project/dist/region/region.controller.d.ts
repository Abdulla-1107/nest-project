import { RegionService } from "./region.service";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
export declare class RegionController {
    private readonly regionService;
    constructor(regionService: RegionService);
    create(createRegionDto: CreateRegionDto): Promise<{
        id: string;
        name: string;
    }>;
    findAll(name?: string): Promise<({
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
