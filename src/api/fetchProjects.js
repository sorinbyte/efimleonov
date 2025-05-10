const CMS_URL = 'http://localhost:3000'; // or your deployed CMS URL

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${CMS_URL}/api/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    const json = await res.json();
    return json.docs; // Payload returns results under .docs
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
};