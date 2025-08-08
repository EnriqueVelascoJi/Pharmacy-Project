import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
}

export default function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="py-3 px-4">
      <div className="max-w-4xl mx-auto flex items-center bg-white rounded-full shadow-md overflow-hidden border border-gray-200">
        <Search className="text-gray-400 ml-3" size={20} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Buscar medicamentos, productos o servicios..."
          className="flex-1 px-3 py-2 outline-none text-sm md:text-base"
        />
        <button
          onClick={onSubmit}
          className="bg-orange-600 text-white px-4 py-2 text-sm md:text-base font-medium hover:bg-orange-700 transition cursor-pointer"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
