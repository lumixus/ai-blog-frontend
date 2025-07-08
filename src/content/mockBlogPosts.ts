export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  content: string;
};

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Artificial Intelligence in Everyday Life",
    excerpt: "Explore how AI is transforming our daily routines and what we can expect in the coming years as technology continues to evolve at an unprecedented pace.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    category: "Technology",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `Artificial Intelligence (AI) is no longer a concept of the future—it's a reality shaping our present. From smart assistants like Siri and Alexa to personalized recommendations on streaming platforms, AI is seamlessly integrating into our daily lives. In the coming years, we can expect even more advancements: AI-powered healthcare diagnostics, autonomous vehicles, and smarter home automation. As technology evolves, ethical considerations and responsible development will be crucial to ensure AI benefits everyone. The future holds exciting possibilities, and staying informed will help us adapt and thrive in an AI-driven world.`
  },
  {
    id: "2",
    title: "Sustainable Living: Small Changes, Big Impact",
    excerpt: "Discover practical ways to reduce your environmental footprint and live a more sustainable lifestyle without completely changing your routine.",
    author: "Michael Chen",
    date: "Dec 12, 2024",
    category: "Lifestyle",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    content: `Sustainable living doesn't require a complete lifestyle overhaul. Simple changes—like reducing single-use plastics, conserving water, and choosing public transportation—can make a significant difference. Start by being mindful of your consumption habits and supporting local, eco-friendly businesses. Composting, recycling, and using energy-efficient appliances are other effective ways to minimize your environmental impact. Remember, every small step counts, and collectively, our actions can lead to a healthier planet for future generations.`
  },
  {
    id: "3",
    title: "The Art of Mindful Productivity",
    excerpt: "Learn how to be more productive while maintaining your mental well-being through mindfulness techniques and intentional work habits.",
    author: "Emma Davis",
    date: "Dec 10, 2024",
    category: "Productivity",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `Mindful productivity is about working smarter, not harder. By incorporating mindfulness practices—such as meditation, deep breathing, and regular breaks—into your routine, you can boost focus and reduce stress. Set clear intentions for your workday, prioritize tasks, and avoid multitasking. Remember to celebrate small wins and reflect on your progress. Balancing productivity with self-care leads to sustainable success and improved mental well-being.`
  },
  {
    id: "4",
    title: "Digital Nomad Lifestyle: Pros and Cons",
    excerpt: "Is the digital nomad lifestyle right for you? We explore the benefits and challenges of working remotely while traveling the world.",
    author: "Alex Rodriguez",
    date: "Dec 8, 2024",
    category: "Lifestyle",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `The digital nomad lifestyle offers freedom, adventure, and the opportunity to work from anywhere. However, it also comes with challenges: time zone differences, unreliable internet, and the need for self-discipline. On the plus side, you can explore new cultures, build a global network, and enjoy a flexible schedule. Before making the leap, consider your work style, financial stability, and personal goals. With the right preparation, the digital nomad life can be both rewarding and sustainable.`
  },
  {
    id: "5",
    title: "Machine Learning for Beginners: A Comprehensive Guide",
    excerpt: "Start your journey into machine learning with this beginner-friendly guide that covers the fundamentals and practical applications.",
    author: "Dr. Lisa Wang",
    date: "Dec 5, 2024",
    category: "Technology",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `Machine learning (ML) is a branch of artificial intelligence that enables computers to learn from data and make predictions. Beginners should start with the basics: supervised vs. unsupervised learning, common algorithms (like linear regression and decision trees), and practical tools such as Python and scikit-learn. Real-world applications include image recognition, recommendation systems, and fraud detection. With curiosity and practice, anyone can begin their ML journey and unlock new possibilities in tech.`
  },
  {
    id: "6",
    title: "The Psychology of Habit Formation",
    excerpt: "Understanding how habits work and how to build positive ones that stick. Science-backed strategies for lasting behavior change.",
    author: "Dr. James Wilson",
    date: "Dec 3, 2024",
    category: "Health",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `Habits are powerful drivers of behavior. According to psychology, habits form through a cue-routine-reward loop. To build positive habits, start small and be consistent. Identify your triggers, set achievable goals, and reward yourself for progress. If you slip up, don't be discouraged—focus on getting back on track. Over time, positive habits become automatic, leading to lasting change and improved well-being.`
  },
  {
    id: "7",
    title: "Remote Team Management: Best Practices",
    excerpt: "Effective strategies for managing remote teams, building culture, and maintaining productivity in a distributed work environment.",
    author: "Maria Garcia",
    date: "Nov 30, 2024",
    category: "Productivity",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `Managing remote teams requires clear communication, trust, and the right tools. Set expectations early, use video calls for face-to-face interaction, and encourage regular check-ins. Foster a sense of belonging by celebrating achievements and supporting team members. Invest in collaboration platforms and provide opportunities for professional growth. With thoughtful leadership, remote teams can be just as productive and engaged as in-person ones.`
  },
  {
    id: "8",
    title: "The Rise of Web3: What You Need to Know",
    excerpt: "An overview of Web3 technology, blockchain applications, and how they're reshaping the internet and digital ownership.",
    author: "David Kim",
    date: "Nov 28, 2024",
    category: "Technology",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `Web3 represents the next evolution of the internet, built on decentralized technologies like blockchain. Unlike Web2, where data is controlled by a few large companies, Web3 empowers users with greater ownership and privacy. Key applications include cryptocurrencies, NFTs, and decentralized finance (DeFi). As Web3 grows, it promises to reshape digital identity, online communities, and the way we interact with technology.`
  },
  {
    id: "9",
    title: "Mental Health in the Digital Age",
    excerpt: "How technology affects our mental well-being and strategies for maintaining a healthy relationship with digital devices.",
    author: "Dr. Sarah Thompson",
    date: "Nov 25, 2024",
    category: "Health",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    content: `Digital technology has transformed how we connect, work, and relax—but it also brings challenges for mental health. Excessive screen time, social media comparison, and information overload can increase stress and anxiety. To maintain balance, set boundaries for device use, prioritize offline activities, and seek support when needed. Mindful engagement with technology can help you enjoy its benefits while protecting your well-being.`
  }
]; 