import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export const NewsletterSection = () => {
	const [email, setEmail] = useState("");
	const [isSubscribed, setIsSubscribed] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle newsletter subscription logic here
		console.log("Newsletter subscription:", email);
		setIsSubscribed(true);
		setEmail("");
	};

	return (
		<section className="bg-blue-600 py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<EnvelopeIcon className="mx-auto h-12 w-12 text-white mb-4" />
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Stay Updated
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Subscribe to our newsletter and never miss out on the latest articles, insights, and stories.
					</p>
					{!isSubscribed ? (
						<form onSubmit={handleSubmit} className="max-w-md mx-auto">
							<div className="flex flex-col sm:flex-row gap-3">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email"
									required
									className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
								/>
								<button
									type="submit"
									className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200"
								>
									Subscribe
								</button>
							</div>
						</form>
					) : (
						<div className="bg-green-500 text-white px-6 py-3 rounded-md inline-block">
							Thank you for subscribing!
						</div>
					)}
				</div>
			</div>
		</section>
	);
}; 