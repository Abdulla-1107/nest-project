import { PrismaService } from "src/prisma/prisma.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCategoryDto): Promise<{
        id: string;
        name: string;
        type: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        type: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        type: string;
    }>;
    update(id: string, data: UpdateCategoryDto): Promise<{
        id: string;
        name: string;
        type: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        type: string;
    }>;
}
