import { InformationService } from "./information.service";
import { CreateInformationDto } from "./dto/create-information.dto";
import { UpdateInformationDto } from "./dto/update-information.dto";
export declare class InformationController {
    private readonly informationService;
    constructor(informationService: InformationService);
    getInformation(): Promise<{
        id: string;
        about: string;
        privacyPolicy: string;
        email: string;
        phone: string;
        telegram: string | null;
        instagram: string | null;
        facebook: string | null;
    }>;
    createInformation(createInformationDto: CreateInformationDto): Promise<{
        id: string;
        about: string;
        privacyPolicy: string;
        email: string;
        phone: string;
        telegram: string | null;
        instagram: string | null;
        facebook: string | null;
    }>;
    updateInformation(updateInformationDto: UpdateInformationDto): Promise<{
        id: string;
        about: string;
        privacyPolicy: string;
        email: string;
        phone: string;
        telegram: string | null;
        instagram: string | null;
        facebook: string | null;
    }>;
}
