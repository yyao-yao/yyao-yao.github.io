import type { Metadata } from 'next';
import { getPhotography } from '@/lib/photography';
import PhotographyPage from '@/components/photography/PhotographyPage';

export function generateMetadata(): Metadata {
  const gallery = getPhotography();
  return {
    title: gallery.title,
    description: gallery.description,
    alternates: { canonical: '/photography/' },
  };
}

export default function Photography() {
  return <PhotographyPage gallery={getPhotography()} />;
}
