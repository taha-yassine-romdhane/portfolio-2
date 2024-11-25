'use server'

interface ContributionDay {
  contributionCount: number
  date: string
}

interface ContributionWeek {
  contributionDays: ContributionDay[]
}

interface ContributionsResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number
          weeks: ContributionWeek[]
        }
      }
    }
  }
}

export async function getGithubContributions(username: string) {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub contributions')
    }

    const data: ContributionsResponse = await response.json()
    return data.data.user.contributionsCollection.contributionCalendar
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    return null
  }
}
