import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center py-20 gap-12">
        {/* Hero Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Exploring technology, development, and everything in between. Join me on this journey of continuous learning and discovery.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button asChild size="lg">
              <Link href="/blog">Read Blog</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative aspect-square w-full max-w-2xl">
          <Image
            src="https://source.unsplash.com/random/800x800?coding"
            alt="Hero image"
            fill
            priority
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Featured Posts Preview */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border bg-card shadow-sm">
              <div className="relative aspect-video">
                <Image
                  src={`https://source.unsplash.com/random/800x600?technology${i}`}
                  alt={`Featured post ${i}`}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Featured Post {i}</h3>
                <p className="text-muted-foreground mb-4">
                  A preview of this amazing blog post that you should definitely read...
                </p>
                <Button variant="outline" asChild>
                  <Link href={`/blog/post-${i}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}