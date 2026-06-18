const GITHUB_USER = "JayPTucker";

export async function getRepo(repoName) {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USER}/${repoName}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repository");
  }

  return response.json();
}

export async function getLatestCommit(repoName) {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USER}/${repoName}/commits?per_page=1`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch commits");
  }

  const commits = await response.json();
  return commits[0];
}