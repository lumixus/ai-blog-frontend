import { BlogCard } from "./BlogCard";

// Mock data for featured posts
const featuredPosts = [
	{
		id: "1",
		title: "The Future of Artificial Intelligence in Everyday Life",
		excerpt: "Explore how AI is transforming our daily routines and what we can expect in the coming years as technology continues to evolve at an unprecedented pace.",
		author: "Sarah Johnson",
		date: "Dec 15, 2024",
		category: "Technology",
		readTime: "5 min read",
		imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
	},
	{
		id: "2",
		title: "Sustainable Living: Small Changes, Big Impact",
		excerpt: "Discover practical ways to reduce your environmental footprint and live a more sustainable lifestyle without completely changing your routine.",
		author: "Michael Chen",
		date: "Dec 12, 2024",
		category: "Lifestyle",
		readTime: "4 min read",
		imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
	},
	{
		id: "3",
		title: "The Art of Mindful Productivity",
		excerpt: "Learn how to be more productive while maintaining your mental well-being through mindfulness techniques and intentional work habits.",
		author: "Emma Davis",
		date: "Dec 10, 2024",
		category: "Productivity",
		readTime: "6 min read",
		imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
	}
];

export const FeaturedPosts = () => {
	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Featured Posts
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Discover our most popular and trending articles that readers love
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredPosts.map((post) => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>
			</div>
		</section>
	);
}; 