import { CalendarIcon, UserIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";

interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	author: string;
	date: string;
	category: string;
	readTime: string;
	imageUrl?: string;
}

interface BlogCardProps {
	post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<Link params={{blogId: post.id}} to={`/blog-detail/$blogId`}>
		<article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
			{post.imageUrl && (
				<div className="aspect-video overflow-hidden">
					<img
						src={post.imageUrl}
						alt={post.title}
						className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
					/>
				</div>
			)}
			<div className="p-6">
				<div className="flex items-center space-x-2 mb-3">
					<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
						{post.category}
					</span>
					<span className="text-gray-500 text-sm">{post.readTime}</span>
				</div>
				<h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
					{post.title}
				</h3>
				<p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4 text-sm text-gray-500">
						<div className="flex items-center space-x-1">
							<UserIcon className="h-4 w-4" />
							<span>{post.author}</span>
						</div>
						<div className="flex items-center space-x-1">
							<CalendarIcon className="h-4 w-4" />
							<span>{post.date}</span>
						</div>
					</div>
					<button className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
						<span>Read more</span>
						<ArrowRightIcon className="h-4 w-4" />
					</button>
				</div>
			</div>
		</article>
		</Link>
	);
}; 