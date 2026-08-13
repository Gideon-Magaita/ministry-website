const defaultNews = [
  { id: 1, date: '12 AUG 2026', category: 'MINISTRY NEWS', title: 'Strengthening water security for communities across Tanzania', image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1000&q=80', excerpt: 'The Ministry continues to strengthen water security through coordinated investments, improved planning and community-focused programmes.', content: 'The Ministry of Water is advancing a coordinated programme to strengthen water security across Tanzania. The programme brings together water resource management, infrastructure development and stronger community participation.\n\nThe initiative prioritises reliable water services, protection of water sources and improved monitoring of water infrastructure. Implementation will continue in partnership with regional and local authorities.' },
  { id: 2, date: '08 AUG 2026', category: 'PROJECTS', title: 'New water infrastructure projects enter implementation phase', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80', excerpt: 'Several priority water infrastructure projects have moved into implementation across selected regions.', content: 'Several priority projects have entered implementation following completion of planning and procurement activities. The projects are expected to improve access to reliable water services while supporting local economic development.' },
  { id: 3, date: '04 AUG 2026', category: 'ANNOUNCEMENT', title: 'Public notice on sustainable water resource management', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80', excerpt: 'The Ministry has issued a public notice encouraging responsible use and protection of water resources.', content: 'The Ministry reminds communities, institutions and water users of the importance of protecting water sources and using water responsibly. Stakeholders are encouraged to participate in local water resource management activities.' },
  { id: 4, date: '30 JUL 2026', category: 'POLICY', title: 'Water sector planning priorities for 2026/27', image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=1000&q=80', excerpt: 'The Ministry has outlined key priorities for the coming planning cycle.', content: 'Planning priorities focus on expanding water access, strengthening infrastructure, improving resource monitoring and building institutional capacity.' },
]

const defaultAnnouncements = [
  { id: 1, date: '12 AUG 2026', priority: 'IMPORTANT', title: 'Public notice on sustainable water resource management', body: 'Members of the public are encouraged to protect water sources and use water resources responsibly.' },
  { id: 2, date: '10 AUG 2026', priority: 'NOTICE', title: 'Call for applications for water sector opportunities', body: 'Eligible applicants are invited to review the published requirements and application procedures.' },
  { id: 3, date: '02 AUG 2026', priority: 'GENERAL', title: 'Ministry service hours and public enquiries', body: 'The Ministry remains available during official working hours for public enquiries and service support.' },
]

export function getStored(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback } catch { return fallback }
}

export function saveStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
  window.dispatchEvent(new Event('content-updated'))
}

export function getNews() { return getStored('mw_news', defaultNews) }
export function getAnnouncements() { return getStored('mw_announcements', defaultAnnouncements) }
export { defaultNews, defaultAnnouncements }
