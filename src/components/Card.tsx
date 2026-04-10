type Props = {
  title: string;
  price: number;
};

const Card = ({ title, price }: Props) => {
  return (
    <div className="min-w-[180px] bg-slate-900 border border-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition">

      <img
        src={`https://source.unsplash.com/300x200/?${title},luxury`}
        className="w-full h-[120px] object-cover"
      />

      <div className="p-3">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-yellow-400">₹{price}</p>
      </div>
    </div>
  );
};

export default Card;
