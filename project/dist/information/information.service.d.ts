import { PrismaService } from "src/prisma/prisma.service";
import { CreateInformationDto } from "./dto/create-information.dto";
import { UpdateInformationDto } from "./dto/update-information.dto";
export declare class InformationService {
    private prisma;
    constructor(prisma: PrismaService);
    getInformation(): Promise<{
        email: string;
        phone: string;
        id: string;
        about: string;
        privacyPolicy: string;
        telegram: string | null;
        instagram: string | null;
        facebook: string | null;
    }>;
    createInformation(dto: CreateInformationDto): Promise<{
        email: string;
        phone: string;
        id: string;
        about: string;
        privacyPolicy: string;
        telegram: string | null;
        instagram: string | null;
        facebook: string | null;
    }>;
    updateInformation(dto: UpdateInformationDto): Promise<{
        email: string;
        phone: string;
        id: string;
        about: string;
        privacyPolicy: string;
        telegram: string | null;
        instagram: string | null;
        facebook: string | null;
    }>;
}
