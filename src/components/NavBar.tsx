import EntriesIcon from "../assets/icons/EntriesIcon.png";
import HomeIcon from "../assets/icons/HomeIcon.png";
import InsightsIcon from "../assets/icons/InsightsIcon.png";
import SearchIcon from "../assets/icons/SearchIcon.png";
import SettingsIcon from "../assets/icons/SettingsIcon.png";
import SittingBrain from "../assets/brains/SittingBrain.png"
const NavBar = () => {
  return (
    <div className="border-black border rounded-2xl h-180 min-w-20 max-w-55 flex flex-col bg-[#E8E8D5] p-3 ml-5 my-2">
      <h1 className=" martel-sans-extrabold font-bold text-4xl pb-10">
        DayVault
      </h1>
      <div className="flex flex-col gap-6">
        <button className="flex justify-baseline items-center gap-4 h-10 hover:border-black hover:border rounded py-7 px-3 font-semibold hover:bg-[#DEB7E8]">
          <img src={HomeIcon} alt="HomeIcon" className="h-10" />
          <p className="block">Home</p>
        </button>
        <button className="flex justify-baseline items-center gap-4 h-10 hover:border-black hover:border rounded py-7 px-3 font-semibold hover:bg-[#DEB7E8]">
          <img src={EntriesIcon} alt="EntriesIcon" className="h-10" />
          <p>Entries</p>
        </button>
        <button className="flex justify-baseline items-center gap-4 h-10 hover:border-black hover:border rounded py-7 px-3 font-semibold hover:bg-[#DEB7E8]">
          <img src={InsightsIcon} alt="InsightsIcon" className="h-10" />
          <p>Insights</p>
        </button>
        <button className="flex justify-baseline items-center gap-4 h-10 hover:border-black hover:border rounded py-7 px-3 font-semibold hover:bg-[#DEB7E8]">
          <img src={SearchIcon} alt="SearchIcon" className="h-10" />
          <p>Search</p>
        </button>
        <button className="flex justify-baseline items-center gap-4 h-10 hover:border-black hover:border rounded py-7 px-3 font-semibold hover:bg-[#DEB7E8]">
          <img src={SettingsIcon} alt="SettingsIcon" className="h-10" />
          <p>Settings</p>
        </button>
      </div>
      <div className="flex items-end">
        <img src={SittingBrain} alt="SittingBrain" />
      </div>
    </div>
  );
};

export default NavBar;
