/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  partNo: string;
  name: string;
  brand: 'Hero' | 'Honda' | 'Bajaj' | 'TVS' | 'Yamaha';
  vehicleModel: string;
  category: 'Rear Shock Absorber' | 'Front Suspension' | 'Scooter Suspension' | 'Components';
  applicationType: 'Motorcycle' | 'Scooter' | 'Commercial / Other';
  description: string;
  longDescription: string;
  imageUrl: string;
  springFinish: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  technicalDetails: {
    dampingType: string;
    pistonDiameter: string;
    strokeLength: string;
    preloadAdjustable: boolean;
    mountingType?: string;
  };
}

export interface QuoteRequest {
  id: string;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  businessType: 'Distributor' | 'Dealer' | 'Retailer' | 'Workshop / Service Centre' | 'Other';
  vehicleModel: string;
  productInterest: string;
  quantityTier: '50' | '100' | '500+';
  message?: string;
  status: 'pending' | 'reviewed' | 'approved';
  createdAt: string;
}

export interface DistributorLocation {
  id: string;
  city: string;
  state: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  type: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  inspectionDetail: string;
}

export interface BrandApplication {
  brand: string;
  logo: string;
  models: {
    name: string;
    partNo: string;
    fitment: string;
    productId: string;
  }[];
}

export interface ManufacturingCapability {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  bgImage?: string;
}
