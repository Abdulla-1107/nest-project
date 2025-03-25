import { InformationService } from "./information.service";
import { CreateInformationDto } from "./dto/create-information.dto";
import { UpdateInformationDto } from "./dto/update-information.dto";
export declare class InformationController {
    private readonly informationService;
    constructor(informationService: InformationService);
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
    createInformation(createInformationDto: CreateInformationDto): Promise<{
        email: string;
        phone: string;
        id: string;
        about: string;
        privacyPolicy: string;
        telegram: string | null;
        instagram: string | null;
        facebook: string | null;
    }>;
    updateInformation(updateInformationDto: UpdateInformationDto): Promise<{
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
