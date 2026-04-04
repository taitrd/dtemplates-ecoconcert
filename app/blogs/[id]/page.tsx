import { BlogDetailsClient } from "@/components/features/blog/BlogDetailsClient";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
}

export default function BlogDetailsPage() {
  return <BlogDetailsClient />;
}
