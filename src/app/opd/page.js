import SobatiContent from '@/components/Sobati';

export const metadata = {
  title: 'Specialized Geriatrics & Palliative Care OPD | Sobati',
  description:
    'Sobati — Compassionate, specialized geriatrics and palliative care OPD for the elderly in Pune. Expert support for chronic illness, emotional well-being and family caregivers.',
  alternates: {
    canonical: 'https://rainbowdaycarecentre.org/opd',
  },
  openGraph: {
    title: 'Specialized Geriatrics & Palliative Care OPD | Sobati — Rainbow',
    description:
      'Expert geriatrics and palliative care OPD for seniors and their families in Pune.',
    url: 'https://rainbowdaycarecentre.org/opd',
  },
};

export default function OPD() {
  return (
    <main>
      <SobatiContent />
    </main>
  );
}
