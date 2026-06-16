import starIcon from "../assets/icons/StarIcon.png"
export const JournalDot = () => {
  return (
    <div className="bg-green-600 border border-black rounded-full h-2.5 w-2.5"></div>
  );
};
export const TodoDot = () => {
  return <div className="bg-blue-400 border border-black rounded-full h-2.5 w-2.5 "></div>;
};
export const DiaryDot = () => {
  return <div className="bg-purple-900 border border-black rounded-full h-2.5 w-2.5"></div>;
};
export const AllDot = () => {
  return (
    <div>
     <img src={starIcon} alt="starIcon" className="h-5" />
    </div>
  );
};