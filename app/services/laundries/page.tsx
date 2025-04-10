import { Metadata } from 'next';
import HalfHorizontalHero from '@/components/HalfHorizontalHero';
import ServiceFeatures from '@/components/pages/ServicesFeatures';
import { laundryGalleryImages } from '@/data/galleryImages';

export const metadata: Metadata = {
  title: "Custom Laundry Renovations Melbourne | Perfect Kitchen Robes",
  description: "Transform your laundry into a functional, efficient space. Expert design and installation services across Melbourne.",
};

export default function LaundryServicesPage() {
  return (
    <main>
      <HalfHorizontalHero
        imagePath="/assets/images/laundries/laundries-hero-page.webp"
        text="Laundries"
      />
      <ServiceFeatures
        serviceTitle="Our Laundry Solutions"
        serviceDescription="Turn your laundry into a functional, organised space that makes daily chores more efficient and even enjoyable."
        features={[
          {
            title: "Smart Design",
            description: "Clever layouts that maximise efficiency in even the most compact spaces."
          },
          {
            title: "Moisture-Resistant Materials",
            description: "Australian-tested materials that stand up to our humid conditions and frequent use."
          },
          {
            title: "Integrated Solutions",
            description: "Seamless integration of appliances, sinks, and storage for a polished look."
          }
        ]}
        galleryImages={laundryGalleryImages}
        galleryTitle="Our Laundry Transformations"
      />
    </main>
  );
}