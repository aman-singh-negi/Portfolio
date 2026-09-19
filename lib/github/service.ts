// GitHub API service for fetching profile data
// Currently using static data - live integration can be added later

export interface GitHubProfile {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
}

export interface GitHubContribution {
  date: string;
  count: number;
}

export async function getGitHubProfile(username: string): Promise<GitHubProfile | null> {
  try {
    // Placeholder for live API integration
    // const response = await fetch(`https://api.github.com/users/${username}`);
    // if (!response.ok) throw new Error('Failed to fetch GitHub profile');
    // return await response.json();
    
    return null; // Return null for now, use static data in UI
  } catch (error) {
    console.error('GitHub API error:', error);
    return null;
  }
}

export async function getGitHubContributions(username: string): Promise<GitHubContribution[]> {
  try {
    // Placeholder for live API integration
    // GitHub contributions API requires authentication
    return [];
  } catch (error) {
    console.error('GitHub contributions error:', error);
    return [];
  }
}
