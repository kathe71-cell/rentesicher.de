import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SchemaMarkupProps {
  faqItems?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
}

export default function SchemaMarkup({ faqItems, breadcrumbs }: SchemaMarkupProps) {
  const schemaList: any[] = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemaList.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((b, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': b.name,
        'item': b.item.startsWith('http') ? b.item : `https://www.rentesicher.de${b.item}`
      }))
    });
  }

  if (faqItems && faqItems.length > 0) {
    schemaList.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqItems.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  if (schemaList.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaList) }}
    />
  );
}
