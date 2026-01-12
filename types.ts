import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SlideData {
  id: number;
  subtitle: string;
  title: string;
}

export interface ContactInfo {
  phone: string;
  whatsappLink: string;
  address: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  date?: string;
}