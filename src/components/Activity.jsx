const Activity = ({ title, desc, image }) => {
  return (
    <li className="flex gap-2">
      <img className="w-6 h-6 rounded-full" src={image} />
      <div>
        <p className="truncate">{title}</p>
        <p className="text-xs text-white/[0.4]">{desc}</p>
      </div>
    </li>
  );
};

export default Activity;
