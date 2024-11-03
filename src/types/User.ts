export interface StaffInfo {
  status: boolean;
  surname: string;
  permissions: string[];
}

export interface User {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  house?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  image?: string;
  hash: string;
  salt: string;
  isAdmin: boolean;
  isStaff?: StaffInfo;
  emailVerified?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}
