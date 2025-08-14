interface TabProps {
  isSelected: boolean;
  onClick(): void;
  icon: string;
  name: string;
}

function Tab(props: TabProps) {
  const { onClick, isSelected, icon, name } = props;

  return (
    <div
      className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${isSelected
        ? 'bg-yellow-600 border-2 border-yellow-400 shadow-lg'
        : 'bg-gray-700 border-2 border-gray-600 hover:bg-gray-600 hover:border-gray-500'
        }`}
      onClick={onClick}
    >
      <img
        className="w-8 h-8 mb-2 "
        src={icon}
        alt={name}
      />
      <span className={`font-minecraft text-xs ${isSelected ? 'text-black font-bold' : 'text-white'}`}>
        {name}
      </span>
    </div>
  );
}

export default Tab;
