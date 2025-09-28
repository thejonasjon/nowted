export default function Button({ text, Icon }) {
  return (
    <button className="w-full h-10 flex items-center justify-center gap-2 text-base rounded-sm text-white bg-white/10 cursor-pointer">
      {Icon ? <Icon className="w-4 h-4" /> : null}
      {text}
    </button>
  );
}
