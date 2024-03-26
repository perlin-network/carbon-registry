export interface CompanyTableDataType {
  name?: string;
  address?: string;
  companyId?: number;
  companyRole?: string;
  country?: string;
  email?: string;
  phoneNo?: string;
  taxId?: string;
  website?: string;
  state?: string;
  logo?: string;
  creditBalance?: number;
  programmeCount?: number;
}

export class Company {
  companyId?: number;

  taxId?: string;

  name?: string;

  email?: string;

  phoneNo?: string;

  website?: string;

  address?: string;

  logo?: string;

  country?: string;

  companyRole?: string;
}

export enum CompanyState {
  SUSPENDED = 0,
  ACTIVE = 1,
}

export enum CompanyManagementColumns {
  logo = 'logo',
  name = 'name',
  taxId = 'taxId',
  companyRole = 'companyRole',
  programmeCount = 'programmeCount',
  creditBalance = 'creditBalance',
}
