import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
	onLoginClick: () => void;
	onSignupClick: () => void;
}

export const Header = ({ onLoginClick, onSignupClick }: HeaderProps) => {
	const { t } = useTranslation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navigation = [
		{ name: t("nav.home"), href: "/" },
		{ name: t("nav.blog"), href: "/blog" },
		{ name: t("nav.about"), href: "/about" },
		{ name: t("nav.contact"), href: "/contact" },
	];

	return (
		<header className="bg-white shadow-sm border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<h1 className="text-2xl font-bold text-gray-900">BlogAI</h1>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
							>
								{item.name}
							</a>
						))}
					</nav>

					{/* Desktop Auth Buttons */}
					<div className="hidden md:flex items-center space-x-4">
						<button
							onClick={onLoginClick}
							className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
						>
							{t("auth.login")}
						</button>
						<button
							onClick={onSignupClick}
							className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
						>
							{t("auth.signup")}
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="text-gray-700 hover:text-gray-900 p-2"
						>
							{isMobileMenuOpen ? (
								<XMarkIcon className="h-6 w-6" />
							) : (
								<Bars3Icon className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
								>
									{item.name}
								</a>
							))}
							<div className="pt-4 space-y-2">
								<button
									onClick={onLoginClick}
									className="text-gray-700 hover:text-gray-900 block w-full text-left px-3 py-2 text-base font-medium"
								>
									{t("auth.login")}
								</button>
								<button
									onClick={onSignupClick}
									className="bg-blue-600 hover:bg-blue-700 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
								>
									{t("auth.signup")}
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}; 