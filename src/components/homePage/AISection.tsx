import Skeleton from "../Skeleton";
import { images } from "../../data/images";
import { FaRobot } from "react-icons/fa";

const AISection = ({ loading }: { loading: boolean }) => {
  if (loading) return <Skeleton className="w-full h-[120px] rounded-xl" />;

  return (
    <div className="relative rounded-xl overflow-hidden">
      <img src={images.ai} className="w-full h-[120px] object-cover" />

      <div className="absolute inset-0 bg-black/60 flex items-center justify-between px-4">
        <div>
          <h3 className="font-bold">AI Travel Assistant</h3>
          <p className="text-xs text-gray-300">Plan smart trips instantly</p>
        </div>

        <FaRobot size={22} className="text-yellow-400" />
      </div>
    </div>
  );
};

export default AISection;
