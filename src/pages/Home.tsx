import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/ui/HeroSection";
import { FeaturedPosts } from "../components/ui/FeaturedPosts";
import { NewsletterSection } from "../components/ui/NewsletterSection";
import { LoginModal } from "../components/ui/LoginModal";
import { SignupModal } from "../components/ui/SignupModal";

export const Home = () => {
	const { t, i18n } = useTranslation();
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("es");
		} else {
			await i18n.changeLanguage("en");
		}
	};

	const handleLoginClick = () => {
		setIsLoginModalOpen(true);
	};

	const handleSignupClick = () => {
		setIsSignupModalOpen(true);
	};

	const handleGetStartedClick = () => {
		setIsSignupModalOpen(true);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<Header onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
			
			<main>
				<HeroSection onGetStartedClick={handleGetStartedClick} />
				<FeaturedPosts />
				<NewsletterSection />
			</main>

			<Footer />

			{/* Language toggle button - keeping the original functionality */}
			<div className="fixed bottom-4 right-4">
				<button
					onClick={onTranslateButtonClick}
					className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-colors duration-200"
					title="Toggle language"
				>
					{i18n.resolvedLanguage === "en" ? "ES" : "EN"}
				</button>
			</div>

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
