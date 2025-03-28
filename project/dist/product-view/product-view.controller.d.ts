import { ProductViewService } from "./product-view.service";
export declare class ProductViewController {
    private readonly productViewService;
    constructor(productViewService: ProductViewService);
    viewProduct(req: any, productId: string): Promise<{
        id: string;
        userId: string;
        date: Date;
        count: number;
        productId: string;
    } | {
        message: string;
    }>;
    getProductViewCount(productId: string): Promise<{
        productId: string;
        viewCount: number;
    }>;
}
