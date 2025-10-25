
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}