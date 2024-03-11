import { getGithubStats } from "@/lib/github"
import getAnalytics from "@/lib/umami"
import { getCodingHours } from "@/lib/wakatime"
import PageHeading from "@/components/page-heading"
import StartCard from "@/components/stat-card"
import Stats from "@/components/stats"
import GithubContributor from "@/components/stats/github-contributor"

export default function StatsPage() {
  // const [githubStats, codingHours, pageStats] = await Promise.all([
  //   getGithubStats(),
  //   getCodingHours(),
  //   getAnalytics(),
  // ])

  // const { user, repos, starsCount } = githubStats || {}

  // const statCards = [
  //   {
  //     title: "Github Repositories",
  //     value: repos,
  //     description: "Public repositories",
  //     link: `${user?.html_url}?tab=repositories`,
  //   },
  //   {
  //     title: "Github Stars",
  //     value: starsCount,
  //     description: "Total stars received",
  //     link: user?.html_url,
  //   },
  //   {
  //     title: "Github Followers",
  //     value: user?.followers,
  //     description: "People following me",
  //     link: user?.html_url,
  //   },
  //   {
  //     title: "Coding Hours",
  //     value: codingHours,
  //     description: "Total hours spent coding",
  //     link: "https://wakatime.com/",
  //   },
  //   {
  //     title: "Blog Views",
  //     value: pageStats?.pageviews.value,
  //     description: "Total blog views",
  //     link: "https://us.umami.is/share/1hfu7snOAr7VkPJj/taitd.io.vn",
  //   },
  // ]

  return (
    <>
      <PageHeading
        title="Statistics"
        description="Insights into my digital life"
      />

      <Stats />
      <GithubContributor />
    </>
  )
}
