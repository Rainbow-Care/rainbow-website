import HeroSection from '@/components/HeroSection';
import TrustMarkers from '@/components/TrustMarkers';
import MediaCoverage from '@/components/MediaCoverage';
import Services from '@/components/Services';
import ReasonToChoose from '@/components/ReasonToChoose';
import Reviews from '@/components/Review';
import Overview from '@/components/Overview';
import dynamic from 'next/dynamic';

const Team = dynamic(() => import('@/components/Team'));
const Questions = dynamic(() => import('@/components/Questions'));
const Contact = dynamic(() => import('@/components/Contact'));

export const metadata = {
  title: 'Rainbow Day Care Centre | Elderly Day Care in Pune',
  description:
    'A safe, engaging day care for senior citizens in Pune. Rainbow Day Care Centre offers daily activities, nutritious meals, health monitoring and compassionate staff for your elderly parents.',
  alternates: {
    canonical: 'https://rainbowdaycarecentre.org',
  },
  openGraph: {
    title: 'Rainbow Day Care Centre | Elderly Day Care in Pune',
    description:
      'A safe, engaging day care for senior citizens in Pune. Daily activities, nutritious meals, and compassionate care for the elderly.',
    url: 'https://rainbowdaycarecentre.org',
    images: [
      {
        url: '/images/RainbowDayCareHeroSectionImage1.webp',
        width: 1200,
        height: 630,
        alt: 'Rainbow Day Care Centre, Pune',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Rainbow Day Care Centre',
      image:
        'https://rainbowdaycarecentre.org/images/RainbowDayCareHeroSectionImage1.webp',
      url: 'https://rainbowdaycarecentre.org',
      telephone: '+918605003575',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'MH',
        addressCountry: 'IN',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '5',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services do you provide for seniors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rainbow Day Care Centre provides comprehensive elderly day care services in Pune, including daily structured activities like art, music, and games, nutritious meals tailored to dietary needs, continuous health monitoring by trained staff, and a safe environment for socialisation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I enroll my loved one?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Enrolling your loved one at Rainbow Day Care Centre is easy. You can schedule an initial visit with our admissions team by calling us at 8605003575 or by filling out the online contact form on our website.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are your operating hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our day care centre in Kothrud, Pune is open Monday through Friday from 8:00 AM to 6:00 PM.',
          },
        },
        {
          '@type': 'Question',
          name: 'What safety and medical measures are in place?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We prioritize the safety and well-being of our seniors with dedicated, trained caregivers, continuous health monitoring, emergency response protocols, and a secure, mobility-friendly environment specially designed for the elderly.',
          },
        },
      ],
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Swati Deshpande' },
      reviewBody:
        'बाबा सेंटर जायला लागल्यापासून खूप खुश असतात. आनंदी असतात. आम्ही दोघे पण आपल्या कामात १००% देऊ शकतो कारण बाबांची काळजी घेण्यासाठी rainbow chi team असते',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Archana Shintre' },
      reviewBody:
        'They provide exceptional care and support to my mother-in-law. The environment they have created over the years was warm, engaging and happy. The centre has helped boost my mother-in-law\'s confidence.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
  ],
};

export default function Home() {
  return (
    <div className='mx-auto pb-8 px-4'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroSection />
        <TrustMarkers />
        <MediaCoverage className='mt-20' />
        <Services className='col-span-12 mt-20' />
        <ReasonToChoose className='col-span-12 mt-20' />
        <Reviews className='col-span-12 mt-20' />
        <Overview className='col-span-12 mt-20' />
        <Team className='col-span-12 mt-20' />
        <Questions className='col-span-12 mt-20' />
        <Contact className='col-span-12 mt-20' />
      </main>
    </div>
  );
}
