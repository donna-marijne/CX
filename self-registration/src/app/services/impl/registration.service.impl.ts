import { Injectable } from 'ng-metadata/core';
import { RegistrationInfo, RegistrationService } from '../registration.service';

@Injectable()
export class RegistrationServiceImpl implements RegistrationService {

    private registrationInfo: RegistrationInfo;

    constructor() {
        this.registrationInfo = new RegistrationInfo();

        // Just use dummy data, for now.
        this.registrationInfo.name = 'Mr Jonathan Smithsonian';
        this.registrationInfo.jobTitle = 'Marketing Development Specialist';
        this.registrationInfo.email = 'jon.smithsonian@companyxyz.com';
        this.registrationInfo.birthDate = new Date('March 17, 1990');
        this.registrationInfo.location = {
            name: 'Cambridge',
            id: 'cambridge'
        };
    }

    getRegistrationInfo() {
        return this.registrationInfo;
    }
}
