import { useState } from "react";
import { Heart, MessageCircle, MapPin, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Mobile swipe ke liye

// Sample Posts Data
const posts = [
  {
    id: 1,
    user: "Aarav",
    avatar: "https://i.pravatar.cc/100?img=12",
    images: [
      "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976540?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    ],
    location: "Udaipur",
    time: "2h ago",
    caption: "Royal vibes in Udaipur ✨",
    likes: 128,
  },
  {
    id: 1,
    user: "Aarav",
    avatar: "https://i.pravatar.cc/100?img=12",
    images: [
      "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=900&q=80",
    ],
    location: "Udaipur",
    time: "2h ago",
    caption: "Royal vibes in Udaipur ✨",
    likes: 128,
  },
];

const PostCard = ({ post }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe logic handle karne ke liye function
  const handleDragEnd = (info:any) => {
    const swipeThreshold = 50; // Kitna swipe hone par change ho
    if (info.offset.x < -swipeThreshold) {
      // Swiped Left -> Next Image
      setCurrentIndex((prev) => (prev + 1) % post.images.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swiped Right -> Previous Image
      setCurrentIndex(
        (prev) => (prev - 1 + post.images.length) % post.images.length,
      );
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl mb-6">
      {/* Header */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={post.avatar}
          className="w-10 h-10 rounded-full border-2 border-indigo-500 p-0.5"
          alt="user"
        />
        <div className="flex-1">
          <p className="font-bold text-sm text-slate-100 text-start">{post.user}</p>
          <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase tracking-wider">
            <MapPin className="w-3 h-3 text-indigo-400" /> {post.location}
          </div>
        </div>
      </div>

      {/* Main Image Slider with Swipe */}
      <div className="relative px-4 overflow-hidden">
        <div className="relative h-60 w-full aspect-square overflow-hidden rounded-2xl bg-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={post.images[currentIndex]}
              // Framer motion drag props
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-60 object-cover cursor-grab active:cursor-grabbing"
              alt="post content"
            />
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
            {post.images.map((_:string, idx:any) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {post.images.length > 1 && (
        <div className="flex gap-2 px-4 mt-4 overflow-x-auto no-scrollbar">
          {post.images.map((img:any, idx:any) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? "border-indigo-500 scale-105"
                  : "border-transparent opacity-50"
              }`}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt="thumb"
              />
            </button>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-4 text-slate-300">
          <button className="flex items-center gap-1 hover:text-white">
            <Heart className="w-5 h-5" /> {post.likes}
          </button>

          <button className="flex items-center gap-1 hover:text-white">
            <MessageCircle className="w-5 h-5" /> 12
          </button>

          <button className="flex items-center gap-1 hover:text-white">
            <Share2 className="w-5 h-5" /> Share
          </button>
        </div>

        <p className="text-sm text-slate-200 text-start">
          <span className="font-semibold mr-2">{post.user}</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
};
export default function SocialPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 max-w-lg mx-auto pb-20">
      <header className="py-2 px-1 flex justify-between items-center">
        <h2 className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          MOMENTS
        </h2>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
