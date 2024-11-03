export async function getFeaturedPosts() {
    // Temporary mock data until we set up the full MDX system
    return [
      {
        slug: "getting-started",
        title: "Getting Started with Next.js",
        date: "2024-11-03",
        excerpt: "Learn how to build modern web applications with Next.js",
        coverImage: "/placeholder.jpg"
      },
      {
        slug: "tailwind-css",
        title: "Styling with Tailwind CSS",
        date: "2024-11-03",
        excerpt: "A guide to using Tailwind CSS in your Next.js projects",
        coverImage: "/placeholder.jpg"
      }
    ]
  }