import { Breadcrumb } from "@/components/ui/breadcrumb"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogPosts } from "@/components/blog/blog-posts"

export default function BlogPage() {
  return (
    <div className="container py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' }
      ]} />
      <div className="py-8">
        <h1 className="mb-8 text-2xl font-bold">Blog</h1>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <BlogSidebar />
          </div>
          <div className="lg:col-span-9">
            <BlogPosts />
          </div>
        </div>
      </div>
    </div>
  )
}

