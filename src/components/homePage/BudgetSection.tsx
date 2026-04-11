import Skeleton from "../Skeleton";
import { images } from "../../data/images";
import { useTranslation } from "react-i18next";

const BudgetSection = ({ loading }: { loading: boolean }) => {
  const { t } = useTranslation();
  if (loading) return <Skeleton className="w-full h-[120px] rounded-xl" />;

  return (
    <div className="relative rounded-xl overflow-hidden">
      <img src={images.budget} className="w-full h-[120px] object-cover" />

      <div className="absolute inset-0 bg-black/60 p-4">
        <h3 className="text-yellow-400 font-semibold">{t("budget.title")}</h3>
        <p className="text-sm text-gray-300">{t("budget.desc")}</p>
      </div>
    </div>
  );
};

export default BudgetSection;
