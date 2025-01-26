import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: 'Rocket Race - Courses de Fusées',
      template: 'Rocket Race | %s ',
    },
    description:
      'Plongez dans l’univers rétro de Rocket Race, suivez des courses de fusées palpitantes et explorez l’historique des plus grandes compétitions galactiques.',
    keywords: ['Rocket Race', 'Fusées', 'Courses', 'Jeux Rétro', 'Galaxie'],
    authors: [{ name: 'Rocket Race Team' }],
    creator: 'quentin beranger',
    publisher: 'Rocket Race Universe Inc.',
    openGraph: {
      title: 'Rocket Race - Courses de Fusées',
      description:
        'Découvrez l’univers de Rocket Race avec des courses de fusées en temps réel, un design rétro et une expérience immersive.',
      url: 'https://github.com/quentingit/RocketRace',
      siteName: 'Rocket Race',
      locale: 'fr_FR',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
