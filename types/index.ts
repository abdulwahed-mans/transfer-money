// Core Types
export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: Address;
  identificationNumber: string;
  documentType: 'passport' | 'nationalId' | 'driverLicense';
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface Transfer {
  id: string;
  senderId: string;
  receiverId: string;
  amount: number;
  sourceCurrency: string;
  targetCurrency: string;
  exchangeRate: number;
  fee: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  transferCode: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface TransferRequest {
  sender: {
    fullName: string;
    email: string;
    phone: string;
  };
  receiver: {
    fullName: string;
    email: string;
    phone: string;
  };
  amount: number;
  sourceCurrency: string;
  targetCurrency: string;
}