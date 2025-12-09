import { LandingLayout } from '@/components/layouts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Omar Dev Portfolio',
  description: 'Omar Dev Portfolio',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <LandingLayout>{children}</LandingLayout>;
};

export default layout;
