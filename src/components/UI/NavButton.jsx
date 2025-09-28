export default function NavButton({ title, Icon, ActiveIcon, active, onClick }) {
    return (
        <button
        className={`${
            active ? "text-white bg-[#1f1f1f]" : "text-white/60"
        } w-full flex items-center gap-4 text-base px-5 py-2.5 cursor-pointer`}
        onClick={onClick}
        >
        {active && ActiveIcon ? (
            <ActiveIcon className="text-white" size={20} />
        ) : Icon ? (
            <Icon className="text-white/60" size={20} />
        ) : null}
        {title}
        </button>
  );
}
