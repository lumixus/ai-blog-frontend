import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { BlogCard } from "../components/ui/BlogCard";
import { LoginModal } from "../components/ui/LoginModal";
import { SignupModal } from "../components/ui/SignupModal";
import { mockBlogPosts, type BlogPost } from "../content/mockBlogPosts";

export const Blog = () => {
	const { t } = useTranslation();
	const categories = [t("blog.categoryAll"), "Technology", "Lifestyle", "Productivity", "Health"];
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(t("blog.categoryAll"));
	const [sortBy, setSortBy] = useState("latest");

	const handleLoginClick = () => {
		setIsLoginModalOpen(true);
	};

	const handleSignupClick = () => {
		setIsSignupModalOpen(true);
	};

	// Filter and sort blog posts
	const filteredPosts = mockBlogPosts
		.filter((post: BlogPost) => {
			const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.author.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesCategory = selectedCategory === t("blog.categoryAll") || post.category === selectedCategory;
			return matchesSearch && matchesCategory;
		})
		.sort((a: BlogPost, b: BlogPost) => {
			if (sortBy === "latest") {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			} else if (sortBy === "oldest") {
				return new Date(a.date).getTime() - new Date(b.date).getTime();
			} else if (sortBy === "title") {
				return a.title.localeCompare(b.title);
			}
			return 0;
		});

	return (
		<div className="min-h-screen bg-gray-50">
			<Header onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
			
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Page Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						{t("blog.title")}
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						{t("blog.subtitle")}
					</p>
				</div>

				{/* Search and Filter Section */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
					<div className="flex flex-col lg:flex-row gap-4">
						{/* Search */}
						<div className="flex-1">
							<div className="relative">
								<MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
								<input
									type="text"
									placeholder={t("blog.searchPlaceholder")}
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
							</div>
						</div>

						{/* Category Filter */}
						<div className="flex flex-col sm:flex-row gap-3">
							<div className="relative">
								<FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
								<select
									value={selectedCategory}
									onChange={(e) => setSelectedCategory(e.target.value)}
									className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
								>
									{categories.map((category) => (
										<option key={category} value={category}>
											{category}
										</option>
									))}
								</select>
							</div>

							{/* Sort */}
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
							>
								<option value="latest">{t("blog.sortLatest")}</option>
								<option value="oldest">{t("blog.sortOldest")}</option>
								<option value="title">{t("blog.sortAlphabetical")}</option>
							</select>
						</div>
					</div>
				</div>

				{/* Results Count */}
				<div className="mb-6">
					<p className="text-gray-600">
						{t("blog.resultsCount", { count: filteredPosts.length, total: mockBlogPosts.length })}
						{searchTerm && ` for "${searchTerm}"`}
						{selectedCategory !== t("blog.categoryAll") && ` in ${selectedCategory}`}
					</p>
				</div>

				{/* Blog Posts Grid */}
				{filteredPosts.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredPosts.map((post: BlogPost) => (
							<BlogCard key={post.id} post={post} />
						))}
					</div>
				) : (
					<div className="text-center py-12">
						<div className="text-gray-400 mb-4">
							<svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
						</div>
						<h3 className="text-lg font-medium text-gray-900 mb-2">{t("blog.noResults")}</h3>
						<p className="text-gray-600">
							{t("blog.noResultsMessage")}
						</p>
					</div>
				)}

				{/* Load More Button */}
				{filteredPosts.length > 0 && (
					<div className="text-center mt-12">
						<button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
							{t("blog.loadMore")}
						</button>
					</div>
				)}
			</main>

			<Footer />

			{/* Modals */}
			<LoginModal 
				isOpen={isLoginModalOpen} 
				onClose={() => setIsLoginModalOpen(false)} 
			/>
			<SignupModal 
				isOpen={isSignupModalOpen} 
				onClose={() => setIsSignupModalOpen(false)} 
			/>
		</div>
	);
}; 