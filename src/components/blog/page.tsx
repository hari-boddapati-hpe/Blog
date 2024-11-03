import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    date: "2024-11-03",
    imageUrl: "https://source.unsplash.com/random/800x600?developer",
    slug: "getting-started-with-nextjs"
  },
  {
    id: 2,
    title: "Building with Tailwind CSS",
    excerpt: "A comprehensive guide to styling with Tailwind CSS",
    date: "2024-11-03",
    imageUrl: "https://source.unsplash.com/random/800x600?coding",
    slug: "building-with-tailwind-css"
  },
  {
    id: 3,
    title: "Modern Web Development",
    excerpt: "Exploring the latest trends in web development",
    date: "2024-11-03",
    imageUrl: "https://source.unsplash.com/random/800x600?computer",
    slug: "modern-web-development"
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className="rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-video">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            
            <div className="p-4">
              <time className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString()}
              </time>
              
              <h2 className="text-xl font-semibold mt-2">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              
              <p className="mt-2 text-muted-foreground">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:underline"
              >
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}