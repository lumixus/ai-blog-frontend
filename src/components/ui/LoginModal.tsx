import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "./Modal";

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle login logic here
		console.log("Login attempt:", formData);
		onClose();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={t("auth.login")}>
			<form onSubmit={handleSubmit} className="space-y-4">
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
						placeholder="Enter your password"
					/>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
						/>
						<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
							Remember me
						</label>
					</div>
					<div className="text-sm">
						<a href="#" className="font-medium text-blue-600 hover:text-blue-500">
							Forgot your password?
						</a>
					</div>
				</div>
				<div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						Sign in
					</button>
				</div>
			</form>
		</Modal>
	);
}; 