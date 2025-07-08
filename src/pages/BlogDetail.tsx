import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { NewsletterSection } from "../components/ui/NewsletterSection";
import { LoginModal } from "../components/ui/LoginModal";
import { SignupModal } from "../components/ui/SignupModal";
import { useParams } from "@tanstack/react-router";
import { mockBlogPosts } from "../content/mockBlogPosts";

// Mock data for blog posts (copy from Blog.tsx)

export const BlogDetail = () => {
  const { t } = useTranslation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const params = useParams({from: '/blog-detail/$blogId'})

  // For demo, just pick the first post
  const post = mockBlogPosts[Number(params.blogId) - 1];

  const handleLoginClick = () => setIsLoginModalOpen(true);
  const handleSignupClick = () => setIsSignupModalOpen(true);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-md p-8">
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover rounded-md mb-6"
            />
          )}
          <div className="mb-4 flex items-center space-x-4 text-sm text-gray-500">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-lg text-gray-700 mb-8">{post.excerpt}</p>
          <div className="prose max-w-none text-gray-800">
            {post.content}
          </div>
        </article>
        <div className="mt-12">
          <NewsletterSection />
        </div>
      </main>
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <SignupModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />
    </div>
  );
}; 