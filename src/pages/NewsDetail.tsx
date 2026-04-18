import { useParams, useNavigate } from "react-router-dom";
import { newsData } from "../data/mockData";
import { Calendar, User, ArrowLeft, Share2, Tag } from "lucide-react";

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = newsData[Number(id)];

  if (!item) {
    return <div className="text-white text-center mt-20">News Not Found</div>;
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-4 sticky top-0 bg-slate-950/80 backdrop-blur-md z-10">
        <button onClick={() => navigate(-1)} className="p-2 bg-slate-900 rounded-full">
          <ArrowLeft size={20} />
        </button>
        <button className="p-2 bg-slate-900 rounded-full">
          <Share2 size={20} />
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-10">
        {/* Category Tag */}
        <span className="bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {item.category || "General"}
        </span>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-4 leading-tight">{item.title}</h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mt-6 py-4 border-y border-slate-900 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <User size={14} className="text-yellow-400" />
            <span>By {item.author || "Team Travel"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-yellow-400" />
            <span>{item.time}</span>
          </div>
        </div>

        {/* Main Image */}
        <div className="mt-6 rounded-3xl overflow-hidden shadow-2xl">
          <img src={item.img} alt={item.title} className="w-full h-auto object-cover" />
        </div>

        {/* Full Content */}
        <div className="mt-8">
          {/* Pehla paragraph thoda bada (Lead text) */}
          <p className="text-lg text-gray-300 font-medium leading-relaxed mb-6">
            {item.desc}
          </p>

          {/* Detailed Content */}
          <div className="text-gray-400 leading-8 space-y-4 whitespace-pre-line">
            {item.content || "Full story coming soon..."}
          </div>
        </div>

        {/* Footer Tags */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex items-center gap-2">
          <Tag size={16} className="text-gray-500" />
          <div className="flex gap-2">
            <span className="text-xs bg-slate-900 px-3 py-1 rounded-lg text-gray-400">#Rajasthan</span>
            <span className="text-xs bg-slate-900 px-3 py-1 rounded-lg text-gray-400">#TravelNews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;