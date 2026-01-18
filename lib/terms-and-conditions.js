export const legal = [
  {
    id: 'terms-and-conditions',
    type: 'legal',
    status: 'published',
    meta: {
      title: 'Terms & Conditions',
      description:
        'Terms governing the use of Munir Suri website, content, and email subscriptions.',
      slug: 'terms-and-conditions',
      tags: ['Legal', 'Website Terms'],
      category: 'Legal',
      reading_time_minutes: 6,
      published_at: '2026-01-16',
      author: {
        name: 'Munir Suri',
        bio: 'Digital strategist and technology educator.',
      },
    },
    hero: {
      heading: 'Terms & Conditions',
      subheading: 'Please read these terms carefully before using this website',
      featured_image: '/images/blog/terms-and-conditions.webp',
      image_alt: 'Terms and conditions legal page',
    },
    content: [
      {
        type: 'section',
        id: 'intro',
        title: 'Introduction',
        body: [
          'By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.',
          'If you do not agree with any part of these terms, please do not use this website.',
        ],
      },
      {
        type: 'section',
        id: 'use',
        title: 'Website Usage',
        bullets: [
          'You must be at least 13 years old to use this website.',
          'You agree to use this site only for lawful purposes.',
          'You will not attempt to harm, hack, or disrupt the website.',
        ],
        details: [
          'Any misuse may result in restricted access.',
          'Automated scraping or misuse of content is prohibited.',
        ],
      },
      {
        type: 'section',
        id: 'content',
        title: 'Content Ownership',
        body: [
          'All blog content, graphics, and materials are owned by Munir Suri unless stated otherwise.',
        ],
        bullets: [
          'No content may be copied without permission.',
          'You may share content with proper credit and backlink.',
        ],
        details: [
          'Commercial reuse is strictly prohibited.',
          'Plagiarism will be legally challenged.',
        ],
      },
      {
        type: 'section',
        id: 'subscriptions',
        title: 'Email Subscription',
        body: [
          'By subscribing, you agree to receive blog updates and newsletters.',
        ],
        bullets: [
          'You can unsubscribe anytime.',
          'We do not sell your email data.',
        ],
        details: [
          'Emails are used only for communication from this website.',
          'Unsubscribing removes you permanently from the list.',
        ],
      },
      {
        type: 'section',
        id: 'liability',
        title: 'Limitation of Liability',
        body: ['Content is provided for informational purposes only.'],
        bullets: [
          'We do not guarantee accuracy.',
          'We are not liable for any losses.',
        ],
        details: [
          'Users act on information at their own risk.',
          'No professional advice is implied.',
        ],
      },
      {
        type: 'section',
        id: 'changes',
        title: 'Changes to Terms',
        body: [
          'We reserve the right to update these terms at any time.',
          'Continued use means acceptance of updates.',
        ],
      },
      {
        type: 'section',
        id: 'contact',
        title: 'Contact',
        body: ['For any questions, please contact via website form or email.'],
      },
    ],
    cta: {
      text: 'Back to homepage',
      url: '/',
    },
  },
  {
    id: 'privacy-policy',
    type: 'legal',
    status: 'published',
    meta: {
      title: 'Privacy Policy',
      description:
        'How Munir Suri website collects, uses, and protects your data.',
      slug: 'privacy-policy',
      tags: ['Privacy', 'Data Protection'],
      category: 'Legal',
      reading_time_minutes: 6,
      published_at: '2026-01-16',
      author: {
        name: 'Munir Suri',
        bio: 'Digital strategist and technology educator.',
      },
    },
    hero: {
      heading: 'Privacy Policy',
      subheading: 'Your privacy matters. Here is how your data is handled.',
      featured_image: '/images/blog/privacy.jpg',
      image_alt: 'Privacy policy data protection',
    },
    content: [
      {
        type: 'section',
        id: 'intro',
        title: 'Introduction',
        body: [
          'This Privacy Policy explains how we collect and use your information.',
          'We only collect email addresses for blog subscriptions.',
        ],
      },
      {
        type: 'section',
        id: 'data',
        title: 'Information We Collect',
        bullets: ['Email address (only for subscriptions)'],
        details: [
          'No names, phone numbers, or personal data collected.',
          'No payment information collected.',
        ],
      },
      {
        type: 'section',
        id: 'usage',
        title: 'How We Use Your Data',
        bullets: ['Send blog updates', 'Notify about new content'],
        details: [
          'We never spam.',
          'Emails are sent only when new content is published.',
        ],
      },
      {
        type: 'section',
        id: 'sharing',
        title: 'Data Sharing',
        body: ['We do not sell or share your data with third parties.'],
        bullets: ['No marketing agencies', 'No data brokers'],
        details: ['Your email remains confidential.'],
      },
      {
        type: 'section',
        id: 'security',
        title: 'Data Security',
        body: ['We use industry-standard security practices.'],
        bullets: ['Encrypted storage', 'Secure servers'],
        details: ['No system is 100% secure, but we do our best.'],
      },
      {
        type: 'section',
        id: 'cookies',
        title: 'Cookies',
        body: ['We may use basic cookies for analytics.'],
        bullets: ['No tracking ads', 'No behavioral profiling'],
      },
      {
        type: 'section',
        id: 'rights',
        title: 'Your Rights',
        bullets: ['Unsubscribe anytime', 'Request data deletion'],
        details: [
          'Email removal is instant.',
          'We honor privacy requests promptly.',
        ],
      },
      {
        type: 'section',
        id: 'updates',
        title: 'Policy Updates',
        body: [
          'Policy may be updated periodically.',
          'Latest version always available here.',
        ],
      },
      {
        type: 'section',
        id: 'contact',
        title: 'Contact',
        body: ['For privacy concerns, reach out via website contact form.'],
      },
    ],
    cta: {
      text: 'Subscribe to blog',
      url: '/subscribe',
    },
  },
];
