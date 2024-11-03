export default function Footer() {
    return (
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About</h3>
              <p className="text-sm text-muted-foreground">
                A modern blog sharing insights and experiences in technology, 
                development, and more.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/blog/category/tech" className="text-muted-foreground hover:text-primary">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="/blog/category/dev" className="text-muted-foreground hover:text-primary">
                    Development
                  </a>
                </li>
                <li>
                  <a href="/blog/category/tutorial" className="text-muted-foreground hover:text-primary">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Twitter
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Your Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }