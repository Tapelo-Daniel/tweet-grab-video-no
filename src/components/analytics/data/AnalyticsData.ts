
export const generateEngagementData = (days: number) => {
  const data = [];
  for (let i = 0; i < days; i++) {
    data.push({
      name: `Day ${i + 1}`,
      views: Math.floor(Math.random() * 500) + 200,
      clicks: Math.floor(Math.random() * 120) + 50,
      bookmarks: Math.floor(Math.random() * 20) + 5,
    });
  }
  return data;
};

export const rankingData = [
  { keyword: 'Coffee shop', position: 1, searches: 2400, change: 2 },
  { keyword: 'Pi payment cafe', position: 2, searches: 1800, change: -1 },
  { keyword: 'Best cafe downtown', position: 3, searches: 1500, change: 1 },
  { keyword: 'Local coffee', position: 5, searches: 1200, change: 0 },
  { keyword: 'Pi cryptocurrency', position: 8, searches: 900, change: 3 },
];

export const sourceDistribution = [
  { name: 'Direct Search', value: 42, color: '#3b82f6' },
  { name: 'Map Browse', value: 28, color: '#8b5cf6' },
  { name: 'Recommendations', value: 18, color: '#10b981' },
  { name: 'External Link', value: 12, color: '#f97316' },
];

export const deviceDistribution = [
  { name: 'Mobile', value: 65, color: '#3b82f6' },
  { name: 'Desktop', value: 25, color: '#8b5cf6' },
  { name: 'Tablet', value: 10, color: '#10b981' },
];
