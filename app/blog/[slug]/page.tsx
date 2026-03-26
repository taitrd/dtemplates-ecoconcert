import { Breadcrumb } from "@/components/ui/breadcrumb"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogContent } from "@/components/blog/blog-content"
import { RelatedPosts } from "@/components/blog/related-posts"

// This would typically come from a CMS or API
const post = {
  title: "Curabitur porttitor orci eget neque accumsan venenatis",
  content: `
    <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget lorem imperdiet tempor. Sed non dui sed augue ultrices congue. Fusce id justo ac eros pellentesque pulvinar.</p>
    
    <h2>Fresh and Organic Products</h2>
    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at porta augue. Integer tincidunt metus vitae urna hendrerit varius. Nullam non tortor eros. Ut risus orci, tempus ut quam vitae, imperdiet semper justo.</p>
    
    <ul>
      <li>100% organic and fresh products</li>
      <li>Free shipping on orders over $50</li>
      <li>Always fresh and clean packaging</li>
      <li>Dedicated customer support</li>
    </ul>
    
    <h2>Quality Guarantee</h2>
    <p>Maecenas venenatis, elit vel porta congue, dolor orci pharetra nisi, nec facilisis enim lacus at nunc. Donec vitae purus eleifend, iaculis sem at, porta nisi. Nulla facilisi. Quisque sed dolor odio.</p>
    
    <blockquote>
      "The best quality organic products I've ever tried. Highly recommended for everyone who cares about their health and the environment."
    </blockquote>
    
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  `,
  image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
  category: "Food",
  author: {
    name: "Admin",
    avatar: "/placeholder.svg",
    bio: "Food enthusiast and organic living advocate."
  },
  date: "18 Nov, 2023",
  comments: 65,
  tags: ["Healthy", "Organic", "Food", "Lifestyle"]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: post.title, href: `/blog/${params.slug}` }
      ]} />
      <div className="py-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <BlogContent post={post} />
            <RelatedPosts />
          </div>
          <div className="lg:col-span-3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

