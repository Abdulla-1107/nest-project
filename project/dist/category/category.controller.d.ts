import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(data: CreateCategoryDto): Promise<{
        type: string;
        id: string;
        name: string;
    }>;
    findAll(): Promise<{
        type: string;
        id: string;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        type: string;
        id: string;
        name: string;
    }>;
    update(id: string, data: UpdateCategoryDto): Promise<{
        type: string;
        id: string;
        name: string;
    }>;
    remove(id: string): Promise<{
        type: string;
        id: string;
        name: string;
    }>;
}
