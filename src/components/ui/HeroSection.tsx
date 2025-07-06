import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface HeroSectionProps {
	onGetStartedClick: () => void;
}

export const HeroSection = ({ onGetStartedClick }: HeroSectionProps) => {
	return (
		<section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Discover Amazing Stories
					</h1>
					<p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
						Explore insightful articles, thought-provoking content, and engaging stories from writers around the world.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={onGetStartedClick}
							className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
						>
							Get Started
							<ArrowRightIcon className="ml-2 h-5 w-5" />
						</button>
						<button className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}; 