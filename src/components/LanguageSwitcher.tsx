import { useTranslation } from "react-i18next";
import { FaCloudSun } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex items-center justify-between bg-white/10 px-3 py-1.5 rounded-lg border border-gray-700">
      
      {/* 🌐 Language */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-300 whitespace-nowrap">
          Language
        </span>

        <div className="flex overflow-hidden rounded-md border border-gray-600">
          <button
            onClick={() => changeLang("en")}
            className={`px-2 py-1 text-xs transition ${
              currentLang === "en"
                ? "bg-yellow-400 text-black"
                : "text-gray-300 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            English
          </button>

          <button
            onClick={() => changeLang("hi")}
            className={`px-2 py-1 text-xs transition ${
              currentLang === "hi"
                ? "bg-yellow-400 text-black"
                : "text-gray-300 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            हिंदी
          </button>

          <button
            onClick={() => changeLang("gu")}
            className={`px-2 py-1 text-xs transition ${
              currentLang === "gu"
                ? "bg-yellow-400 text-black"
                : "text-gray-300 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            ગુજરાતી
          </button>
        </div>
      </div>

      {/* 🌤 Weather (Custom UI) */}
      <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-lg">
        
        {/* Icon */}
        <FaCloudSun className="text-yellow-400 text-sm" />

        {/* Info */}
        <div className="flex flex-col leading-tight">
          <span className="text-xs text-white font-medium">32°C</span>
          <span className="text-[10px] text-gray-400">Jodhpur</span>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
