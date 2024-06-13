
export default function Mainbutton({ text, icon }) {
  return (
    <div className="relative my-10  group">

      <button className="text-xl z-[25] rounded-lg bg-secondary-0 px-6 py-4 flex relative items-center gap-x-5 uppercase font-sans from-optional-0">
        {text} {icon}
      </button>
      <div className="transition-all duration-500 rounded-lg   border-2 w-full  h-full border-optional-0 left-4 group-hover:left-0  group-hover:border-secondary-0 group-hover:bottom-0 bottom-4  absolute ">

      </div>

    </div>
  );
}
