interface ShopFiltersProps {
  priceFilter: string;
  onPriceFilterChange: (value: string) => void;
  categoryFilter: string;
  onCategoryFilterChange: (value: string) => void;
  diseaseFilter: string;
  onDiseaseFilterChange: (value: string) => void;
}

export default function ShopFilters({
  priceFilter,
  onPriceFilterChange,
  categoryFilter,
  onCategoryFilterChange,
  diseaseFilter,
  onDiseaseFilterChange,
}: ShopFiltersProps) {
  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>

      {/* Categoría */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2">Categoría</h4>
        <ul className="space-y-2">
          {["Todos", "Medicamentos", "Vitaminas", "Cuidado personal"].map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={categoryFilter === cat}
                  onChange={() => onCategoryFilterChange(cat)}
                  className="accent-orange-600"
                />
                <span className="text-gray-600">{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Precio */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2">Precio</h4>
        <ul className="space-y-2">
          {[
            { label: "Todos", value: "all" },
            { label: "Hasta $50", value: "0-50" },
            { label: "$51 - $100", value: "51-100" },
            { label: "$101 - $200", value: "101-200" },
            { label: "Más de $200", value: "201+" },
          ].map((p) => (
            <li key={p.value}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  value={p.value}
                  checked={priceFilter === p.value}
                  onChange={() => onPriceFilterChange(p.value)}
                  className="accent-orange-600"
                />
                <span className="text-gray-600">{p.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Enfermedad */}
      <div>
        <h4 className="font-medium text-gray-700 mb-2">Enfermedad</h4>
        <ul className="space-y-2">
          {["Todas", "Insomnio", "Articulaciones y piel", "Protección solar"].map((disease) => (
            <li key={disease}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="disease"
                  value={disease}
                  checked={diseaseFilter === disease}
                  onChange={() => onDiseaseFilterChange(disease)}
                  className="accent-orange-600"
                />
                <span className="text-gray-600">{disease}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
