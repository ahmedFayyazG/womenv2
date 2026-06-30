export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Home 2', href: '/home-2' },
  { label: 'About', href: '/about' },
  { label: 'Reports & Publications', href: '/reports-publications' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Upcoming Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  { id: 1, title: 'Education & ESOL', description: 'Accessible learning that builds language skills, communication confidence, and daily independence for women from diverse linguistic backgrounds.', iconColor: '#059669', iconBg: '#D1FAE5' },
  { id: 2, title: 'Wellbeing & Mental Health', description: 'Safe, supportive sessions where women strengthen emotional resilience, reduce isolation, and improve mental wellbeing through peer connection.', iconColor: '#CA8A04', iconBg: '#FEF9C3' },
  { id: 3, title: 'Employability & Skills', description: 'Practical digital skills, CV preparation, interview readiness, and pathways into volunteering and employment for sustained independence.', iconColor: '#2563EB', iconBg: '#DBEAFE' },
  { id: 4, title: 'Leadership & Empowerment', description: 'Mentoring, confidence-building, and personal development that encourage women to lead in their families, workplaces, and communities.', iconColor: '#EA580C', iconBg: '#FED7AA' },
];

export const PARTNERS = [
  { name: 'National Lottery Community Fund', abbr: 'NLCF' },
  { name: 'Manchester City Council', abbr: 'MCC' },
  { name: 'Comic Relief', abbr: 'CR' },
  { name: 'Henry Smith Charity', abbr: 'HSC' },
  { name: 'Tudor Trust', abbr: 'TT' },
  { name: 'Lloyds Bank Foundation', abbr: 'LBF' },
];

export const MISSION_TABS = [
  {
    id: 'mission', label: 'MISSION',
    eyebrow: 'EMPOWERING WOMEN\'S VOICES',
    heading: 'Building Stronger Communities',
    body: 'Women\'s Voices was established to strengthen the voice, confidence, and influence of women within their communities. We work alongside Black, Asian, minority ethnic, refugee, asylum-seeking, and migrant women to create safe and accessible spaces for support, learning, and connection.',
    counters: [
      { value: 500, suffix: '+', label: 'WOMEN SUPPORTED' },
      { value: 12, suffix: '+', label: 'YEARS SERVING' },
      { value: 20, suffix: '+', label: 'WEEKLY ACTIVITIES' },
    ],
  },
  {
    id: 'vision', label: 'VISION',
    eyebrow: 'INSPIRING CHANGE',
    heading: 'A World Where Every Woman Thrives',
    body: 'We are committed to challenging inequality, social isolation, discrimination, and the barriers that prevent women from reaching their full potential through education, wellbeing support, mentoring, and collective action.',
    bars: [
      { label: 'WOMEN EMPOWERED', percent: 80 },
      { label: 'COMMUNITY REACH', percent: 90 },
    ],
  },
  {
    id: 'values', label: 'VALUES',
    eyebrow: 'WHAT WE STAND FOR',
    heading: 'Equality, Inclusion & Collective Strength',
    body: 'Our work encourages resilience, independence, leadership, and community participation by supporting women to develop skills, find their voice, and create positive change within their families and communities.',
  },
];

export const ACCORDION_ITEMS = [
  { id: 1, title: 'Support Women from Diverse Communities', body: 'As a Women\'s Voices volunteer, your contributions directly support women from refugee, asylum-seeking, migrant, and minoritised communities, ensuring they have access to the care, guidance, and opportunities they need.' },
  { id: 2, title: 'Help Break Down Barriers', body: 'Join our passionate team and become a force for positive change. Your time and skills help women overcome language barriers, isolation, and inequality, building bridges across cultures and communities.' },
  { id: 3, title: 'Champion Equality & Inclusion', body: 'Women\'s Voices volunteers are ambassadors of equality and inclusion. By joining our mission, you help challenge discrimination and promote a more just and equitable society for all women.' },
  { id: 4, title: 'Grow Through Giving Back', body: 'Volunteering with Women\'s Voices is a journey of personal growth — building empathy, cultural awareness, leadership skills, and lifelong friendships while making a meaningful difference.' },
];

export const TESTIMONIALS = [
  { id: 1, quote: "Women's Voices gave me a place where I felt supported and understood. I gained confidence and found a community.", name: 'Building Confidence Again', role: 'Community Story' },
  { id: 2, quote: 'The training and support helped me improve my English, meet people, and feel more independent.', name: 'Learning and Independence', role: 'Community Story' },
  { id: 3, quote: 'I no longer feel isolated. I found friendship, support, and hope for the future.', name: 'Healing Through Community', role: 'Community Story' },
  { id: 4, quote: 'Being part of this group has changed my life. I finally feel like I belong somewhere.', name: 'A Sense of Belonging', role: 'Community Story' },
];

export const BLOG_POSTS = [
  { id: 1, categories: ['Wellbeing'], date: 'APRIL 12, 2026', title: 'How Community Connection Supports Women\'s Mental Health', slug: 'community-connection-mental-health', gradient: 'linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 100%)' },
  { id: 2, categories: ['Education'], date: 'APRIL 4, 2026', title: 'ESOL Classes: More Than Language — Building Confidence and Independence', slug: 'esol-classes-confidence', gradient: 'linear-gradient(135deg, #E5097F 0%, #ff6b9d 50%, #1a0a0f 100%)' },
  { id: 3, categories: ['Leadership', 'Empowerment'], date: 'MARCH 29, 2026', title: 'Women Leading Change in Their Communities', slug: 'women-leading-change', gradient: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a5c 100%)' },
];

export const FOOTER_LINKS = {
  useful: [
    { label: 'About Us', href: '/about' },
    { label: 'Reports & Publications', href: '/reports-publications' },
    { label: 'Upcoming Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Education & ESOL', href: '/programmes/education' },
    { label: 'Wellbeing & Mental Health', href: '/programmes/wellbeing' },
    { label: 'Employability & Skills', href: '/programmes/employability' },
    { label: 'Leadership & Empowerment', href: '/programmes/leadership' },
  ],
};
