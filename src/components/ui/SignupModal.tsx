import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "./Modal";

interface SignupModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle signup logic here
		console.log("Signup attempt:", formData);
		onClose();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={t("auth.signup")}>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
							placeholder="First name"
						/>
					</div>
					<div>
						<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
							placeholder="Last name"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
						placeholder="Enter your email"
					/>
				</div>
				<div>
					<label htmlFor="password" className="block text-sm font-medium text-gray-700">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
						placeholder="Create a password"
					/>
				</div>
				<div>
					<label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
						Confirm Password
					</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleChange}
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
						placeholder="Confirm your password"
					/>
				</div>
				<div className="flex items-center">
					<input
						id="terms"
						name="terms"
						type="checkbox"
						required
						className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
					/>
					<label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
						I agree to the{" "}
						<a href="#" className="text-blue-600 hover:text-blue-500">
							Terms of Service
						</a>{" "}
						and{" "}
						<a href="#" className="text-blue-600 hover:text-blue-500">
							Privacy Policy
						</a>
					</label>
				</div>
				<div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						Create Account
					</button>
				</div>
			</form>
		</Modal>
	);
}; 