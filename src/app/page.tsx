import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const featuredPosts = [
  {
    id: 1,
    title: "Featured Post 1",
    excerpt: "A preview of this amazing blog post that you should definitely read...",
    image: "https://source.unsplash.com/random/800x600?tech",
    date: "2024-11-03",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Featured Post 2",
    excerpt: "A preview of this amazing blog post that you should definitely read...",
    image: "https://source.unsplash.com/random/800x600?coding",
    date: "2024-11-03",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Featured Post 3",
    excerpt: "A preview of this amazing blog post that you should definitely read...",
    image: "https://source.unsplash.com/random/800x600?developer",
    date: "2024-11-03",
    readTime: "4 min read"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Welcome to My Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Exploring technology, development, and everything in between. 
              Join me on this journey of continuous learning and discovery.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/blog">Read Blog</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article 
                key={post.id} 
                className="rounded-lg border bg-card shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <time>{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" asChild className="p-0">
                    <Link href={`/blog/post-${post.id}`}>
                      Read More →
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get notified when I publish new posts and content.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border bg-background px-4 py-2"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm">
              © 2024 Your Blog. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/blog" className="text-muted-foreground hover:text-primary">
                Blog
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}