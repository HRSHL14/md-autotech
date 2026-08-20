/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, DistributorLocation, ProcessStep, BrandApplication, ManufacturingCapability } from './types';

function createB2BProduct(opts: {
  id: string;
  partNo: string;
  name: string;
  brand: 'Hero' | 'Honda' | 'Bajaj' | 'TVS' | 'Yamaha';
  vehicleModel: string;
  category?: 'Rear Shock Absorber' | 'Front Suspension' | 'Scooter Suspension' | 'Components';
  applicationType?: 'Motorcycle' | 'Scooter' | 'Commercial / Other';
  springFinish: string;
  imageFile: string;
}): Product {
  const category = opts.category || (opts.vehicleModel.toLowerCase().includes('activa') ? 'Scooter Suspension' : 'Rear Shock Absorber');
  const applicationType = opts.applicationType || (opts.vehicleModel.toLowerCase().includes('activa') ? 'Scooter' : 'Motorcycle');

  return {
    id: opts.id,
    partNo: opts.partNo,
    name: opts.name,
    brand: opts.brand,
    vehicleModel: opts.vehicleModel,
    category,
    applicationType,
    description: `Part No. ${opts.partNo} — Precision-engineered rear damper assembly designed for ${opts.vehicleModel}. ${opts.springFinish}`,
    longDescription: `MD AutoTech ${opts.name} (Part No. ${opts.partNo}) is an industrial gas-hydraulic damper built for ${opts.vehicleModel}. Manufactured with micro-honed damper tubes, multi-lip fluid seals, and heavy-duty eyelet bushings suited for high-cycle commercial & daily commuting conditions.`,
    imageUrl: `/md-auto-images/${opts.imageFile}`,
    springFinish: opts.springFinish,
    specs: [
      { label: 'Part Number', value: opts.partNo },
      { label: 'Target Vehicle', value: opts.vehicleModel },
      { label: 'Vehicle Brand', value: opts.brand },
      { label: 'Product Category', value: category },
      { label: 'Finish / Coil', value: opts.springFinish },
      { label: 'Supply Model', value: 'Wholesale / B2B Supply' },
    ],
    features: [
      `OEM dimensional compatibility for ${opts.vehicleModel}`,
      `Finished with ${opts.springFinish.toLowerCase()}`,
      'Gas-hydraulic twin-tube internal dampening architecture',
      'Heavy-duty rubber-metal eyelet mounting bushings',
      'Multi-notch step spring preload adjustment',
      'Bulk wholesale packaging and dealer dispatch options',
    ],
    technicalDetails: {
      dampingType: 'Gas-Hydraulic Twin-Tube',
      pistonDiameter: 'OEM Spec (Standard)',
      strokeLength: 'OEM Spec (Standard)',
      preloadAdjustable: true,
      mountingType: 'Eyelet to Eyelet / Clewis (OEM Fitment)',
    },
  };
}

export const PRODUCTS: Product[] = [
  createB2BProduct({
    id: 'md2031',
    partNo: 'MD2031',
    name: 'HR Passion Plated',
    brand: 'Hero',
    vehicleModel: 'Hero Passion',
    springFinish: 'Chrome / Plated Finish',
    imageFile: 'md2031-hr-passion-plated.png',
  }),
  createB2BProduct({
    id: 'md2032',
    partNo: 'MD2032',
    name: 'HR Passion Red',
    brand: 'Hero',
    vehicleModel: 'Hero Passion',
    springFinish: 'High-Visibility Red Powder Coating',
    imageFile: 'md2032-hr-passion-red.png',
  }),
  createB2BProduct({
    id: 'md2007',
    partNo: 'MD2007',
    name: 'HR Splendor BCG',
    brand: 'Hero',
    vehicleModel: 'Hero Splendor',
    springFinish: 'Black Coil with Chrome Accent Cover (BCG)',
    imageFile: 'md2007-hr-splendor-bcg.png',
  }),
  createB2BProduct({
    id: 'md3004',
    partNo: 'MD3004',
    name: 'Bajaj Comfortec',
    brand: 'Bajaj',
    vehicleModel: 'Bajaj Comfortec Series',
    springFinish: 'Yellow Spring on Matte Black Damper Body',
    imageFile: 'md3004-bajaj-comfortec.png',
  }),
  createB2BProduct({
    id: 'md3001',
    partNo: 'MD3001',
    name: 'Bajaj Platina',
    brand: 'Bajaj',
    vehicleModel: 'Bajaj Platina',
    springFinish: 'Orange Performance Spring with Dual-Rate Coil',
    imageFile: 'md3001-bajaj-platina.png',
  }),
  createB2BProduct({
    id: 'md4003',
    partNo: 'MD4003',
    name: 'TVS Star City + Red',
    brand: 'TVS',
    vehicleModel: 'TVS Star City+',
    springFinish: 'Red Spring Coating on Dark Damper Body',
    imageFile: 'md4003-tvs-star-city-plus.png',
  }),
  createB2BProduct({
    id: 'md4002',
    partNo: 'MD4002',
    name: 'TVS Star City + White',
    brand: 'TVS',
    vehicleModel: 'TVS Star City+',
    springFinish: 'White Spring Coating on Dark Damper Body',
    imageFile: 'md4002-tvs-star-city-plus.png',
  }),
  createB2BProduct({
    id: 'md1002',
    partNo: 'MD1002',
    name: 'Honda Shine Red',
    brand: 'Honda',
    vehicleModel: 'Honda Shine',
    springFinish: 'Red Spring with Silver Body',
    imageFile: 'md1002-honda-shine-red.png',
  }),
  createB2BProduct({
    id: 'md1001',
    partNo: 'MD1001',
    name: 'Honda Shine Black',
    brand: 'Honda',
    vehicleModel: 'Honda Shine',
    springFinish: 'Satin Black Spring with Chrome Body',
    imageFile: 'md1001-honda-shine-blk.png',
  }),
  createB2BProduct({
    id: 'md1003',
    partNo: 'MD1003',
    name: 'Honda Shine Silver',
    brand: 'Honda',
    vehicleModel: 'Honda Shine',
    springFinish: 'Full Silver Metallic Finish',
    imageFile: 'md1003-honda-shine-slvr.png',
  }),
  createB2BProduct({
    id: 'md1004',
    partNo: 'MD1004',
    name: 'Honda Dream Red',
    brand: 'Honda',
    vehicleModel: 'Honda Dream',
    springFinish: 'Red Powder Coated Coil',
    imageFile: 'md1004-honda-dream-red.png',
  }),
  createB2BProduct({
    id: 'md1005',
    partNo: 'MD1005',
    name: 'Honda Dream Black',
    brand: 'Honda',
    vehicleModel: 'Honda Dream',
    springFinish: 'Matte Black Spring Coating',
    imageFile: 'md1005-honda-dream-blk.png',
  }),
  createB2BProduct({
    id: 'md5001',
    partNo: 'MD5001',
    name: 'Yamaha Crux',
    brand: 'Yamaha',
    vehicleModel: 'Yamaha Crux',
    springFinish: 'Heavy-Duty Casing with Lower Chrome Section',
    imageFile: 'md5001-yamaha-crux.png',
  }),
  createB2BProduct({
    id: 'md5003',
    partNo: 'MD5003',
    name: 'Yamaha Rx100',
    brand: 'Yamaha',
    vehicleModel: 'Yamaha RX100',
    springFinish: 'Classic Heavy-Duty Casing for RX Geometry',
    imageFile: 'md5003-yamaha-rx100.png',
  }),
  createB2BProduct({
    id: 'md1008',
    partNo: 'MD1008',
    name: 'Honda Activa Front LH',
    brand: 'Honda',
    vehicleModel: 'Honda Activa (Front LH)',
    category: 'Scooter Suspension',
    applicationType: 'Scooter',
    springFinish: 'Dual Scooter Front Shock Assembly',
    imageFile: 'md1008-honda-act-fr-lh.png',
  }),
];

export const BRAND_APPLICATIONS: BrandApplication[] = [
  {
    brand: 'Hero MotoCorp',
    logo: '/logos/hero.svg',
    models: [
      { name: 'Hero Passion (Plated)', partNo: 'MD2031', fitment: 'Rear Suspension', productId: 'md2031' },
      { name: 'Hero Passion (Red)', partNo: 'MD2032', fitment: 'Rear Suspension', productId: 'md2032' },
      { name: 'Hero Splendor (BCG)', partNo: 'MD2007', fitment: 'Rear Suspension', productId: 'md2007' },
    ],
  },
  {
    brand: 'Honda Motorcycles',
    logo: '/logos/honda.svg',
    models: [
      { name: 'Honda Shine (Red)', partNo: 'MD1002', fitment: 'Rear Suspension', productId: 'md1002' },
      { name: 'Honda Shine (Black)', partNo: 'MD1001', fitment: 'Rear Suspension', productId: 'md1001' },
      { name: 'Honda Shine (Silver)', partNo: 'MD1003', fitment: 'Rear Suspension', productId: 'md1003' },
      { name: 'Honda Dream (Red)', partNo: 'MD1004', fitment: 'Rear Suspension', productId: 'md1004' },
      { name: 'Honda Dream (Black)', partNo: 'MD1005', fitment: 'Rear Suspension', productId: 'md1005' },
      { name: 'Honda Activa Front LH', partNo: 'MD1008', fitment: 'Front Scooter Fork', productId: 'md1008' },
    ],
  },
  {
    brand: 'Bajaj Auto',
    logo: '/logos/bajaj.svg',
    models: [
      { name: 'Bajaj Comfortec', partNo: 'MD3004', fitment: 'Rear Suspension', productId: 'md3004' },
      { name: 'Bajaj Platina', partNo: 'MD3001', fitment: 'Rear Suspension', productId: 'md3001' },
    ],
  },
  {
    brand: 'TVS Motor Company',
    logo: '/logos/tvs.svg',
    models: [
      { name: 'TVS Star City+ (Red)', partNo: 'MD4003', fitment: 'Rear Suspension', productId: 'md4003' },
      { name: 'TVS Star City+ (White)', partNo: 'MD4002', fitment: 'Rear Suspension', productId: 'md4002' },
    ],
  },
  {
    brand: 'Yamaha India',
    logo: '/logos/yamaha.svg',
    models: [
      { name: 'Yamaha Crux', partNo: 'MD5001', fitment: 'Rear Suspension', productId: 'md5001' },
      { name: 'Yamaha RX100', partNo: 'MD5003', fitment: 'Rear Suspension', productId: 'md5003' },
    ],
  },
];

export const MANUFACTURING_CAPABILITIES: ManufacturingCapability[] = [
  {
    id: 'cap-1',
    title: 'Robotic Pulse Welding & Fabrication',
    category: 'Structural Assembly',
    description: 'Robotic MIG/TIG welding cells for eyelet joints and mounting brackets, ensuring uniform bead geometry, structural strength, and zero cold-lap defects.',
    specs: ['Automated 3-Axis Robots', 'Argon-Shielded Arc Process', '100% Weld Seam Visual & Ultrasonic Audit'],
    bgImage: '/robotic.jpg',
  },
  {
    id: 'cap-2',
    title: 'CNC High-Speed Coil Spring Winding',
    category: 'Spring Forming',
    description: 'Multi-axis CNC spring coiling machines utilizing high-tensile chrome-silicon spring steel wire for consistent pitch, free length, and load rates.',
    specs: ['Cold & Hot Coiling Capacities', 'Shot-Peened Surface Treatment', 'Precision End Grinding & Scragging'],
    bgImage: '/spring-cnc.jpg',
  },
  {
    id: 'cap-3',
    title: 'Damper Tube CNC Precision Honing',
    category: 'Machining & Finishing',
    description: 'Internal bore honing of seamless steel damper tubes achieving mirror surface finishes (< 0.2 µm Ra) for reduced seal wear and consistent fluid flow.',
    specs: ['Sub-Micron Bore Honing', 'Hard Chrome Plated Piston Rods', 'Induction Hardened Shaft Surfaces'],
    bgImage: '/honing.jpg',
  },
  {
    id: 'cap-4',
    title: 'Hydraulic Dynamometer Performance Testing',
    category: 'Testing & Validation',
    description: 'Computer-controlled servo-hydraulic dynamometer testing for force-velocity and force-displacement damping evaluation across operating temperatures.',
    specs: ['Dual-Axis Velocity Profiles', 'Automated Damping Curve Capture', '100% End-of-Line Production Verification'],
    bgImage: '/EngineDyno-header-1-1.jpg',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Raw Material Inspection & Spectrometry',
    description: 'Incoming steel tubing, spring wire, and synthetic oil batches undergo chemical spectrometry analysis and tensile testing before production authorization.',
    inspectionDetail: 'ISO 9001 Material Certificate Verification & Hardness Testing',
  },
  {
    id: 2,
    title: 'Precision Machining & Chrome Plating',
    description: 'Piston rods are induction hardened, micro-ground, and hard-chrome plated to resist scoring, rust, and oil seal degradation over long service cycles.',
    inspectionDetail: 'Surface Roughness Measurement (< 0.2 µm Ra) & Thickness Check',
  },
  {
    id: 3,
    title: 'Automated Sub-Assembly & Fluid Charging',
    description: 'Piston stacks, multi-lip seals, and hydraulic damper fluid are assembled under cleanroom conditions with automated vacuum fluid filling.',
    inspectionDetail: 'De-aerated Oil Dosing & Nitrogen Gas Pre-charge Calibration',
  },
  {
    id: 4,
    title: 'End-of-Line Dynamometer Damping Verification',
    description: 'Every damper is dynamically cycled on a computerized test rig measuring compression and rebound resistance against target engineering envelopes.',
    inspectionDetail: '100% Force vs Velocity Damping Curve Pass/Fail Audit',
  },
  {
    id: 5,
    title: 'Corrosion & Endurance Fatigue Testing',
    description: 'Sample units undergo continuous salt spray chamber testing (500+ hours) and multi-million cycle durability rigs to validate long-term life.',
    inspectionDetail: 'ASTM B117 Salt Spray Standard & Cyclic Fatigue Verification',
  },
  {
    id: 6,
    title: 'Final Audit & Bulk Protective Packaging',
    description: 'Cleaned units receive final visual inspection, batch coding, protective end-caps, and heavy-duty cardboard master packing for dealer logistics.',
    inspectionDetail: 'Traceable Lot Coding & Protective Seal Packaging',
  },
];

export const DISTRIBUTORS: DistributorLocation[] = [
  {
    id: 'nasik-hq',
    city: 'Nasik',
    state: 'Maharashtra',
    country: 'India',
    address: 'E 31, MIDC Satpur, Nasik - 422007, Maharashtra, India',
    phone: '+91 70307 27770',
    email: 'contact@mdautotech.com',
    type: 'NASIK CORE PLANT (HQ)',
    coordinates: { lat: 19.9975, lng: 73.7498 },
  },
  {
    id: 'pune-facility',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    address: 'Plot 42, MIDC Automotive Zone, Bhosari, Pune - 411026, MH, India',
    phone: '+91 70307 27770',
    email: 'factory@mdautotech.com',
    type: 'Regional Facility (Pune)',
    coordinates: { lat: 18.6265, lng: 73.8475 },
  },
];

export const B2B_FAQS = [
  {
    question: 'How can an automotive spare-parts dealer or workshop become an MD AutoTech partner?',
    answer: 'Automotive retailers, spare-parts distributors, and workshop owners can submit an enquiry via our "Become a Dealer" or Wholesale Quote Builder page. Our commercial sales team will review your business requirements, discuss minimum order quantities, and share trade discount structures.',
  },
  {
    question: 'What vehicle applications are supported in the MD AutoTech catalog?',
    answer: 'MD AutoTech manufactures replacement and performance suspension units for major Indian two-wheeler platforms including Hero (Splendor, Passion), Honda (Shine, Dream, Activa Scooter), Bajaj (Platina, Comfortec), TVS (Star City+), and Yamaha (Crux, RX100).',
  },
  {
    question: 'Are MD AutoTech suspension products direct OEM-fit replacements?',
    answer: 'Yes. All MD AutoTech shock absorbers are designed with factory dimensional compatibility — matching eyelet centers, mounting pin diameters, spring stroke, and overall lengths for straightforward installation without modification.',
  },
  {
    question: 'What quality certifications and testing procedures govern production?',
    answer: 'MD AutoTech operates under ISO 9001:2015 and IATF 16949 quality management frameworks. Production involves raw material spectrometry, sub-micron damper tube honing, induction-hardened rod plating, and 100% computerized dynamometer testing prior to packaging.',
  },
  {
    question: 'What are the bulk ordering options and dispatch timelines?',
    answer: 'We cater to batch wholesale orders starting from 50 units up to 500+ unit distributor shipments. standard catalogue orders are dispatched from our Pune and Nasik logistics centers with regional freight support across India.',
  },
  {
    question: 'How can I request a formal product catalogue or wholesale price sheet?',
    answer: 'You can request a formal commercial quotation and product catalogue through our Wholesale Quote form or direct WhatsApp business support channel (+91 70307 27770).',
  },
];
