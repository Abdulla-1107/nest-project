import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
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
