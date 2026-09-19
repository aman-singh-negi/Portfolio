import { Metadata } from 'next';

export function generateProjectMetadata(project: {
  title: string;
  description: string;
  slug: string;
}): Metadata {
  return {
    title: `${project.title} - Aman Singh Negi`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Aman Singh Negi`,
      description: project.description,
      type: "website",
    },
  };
}
