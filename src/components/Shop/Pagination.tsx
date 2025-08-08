interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-3 mt-10">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-orange-600 text-white hover:bg-orange-700"
        }`}
      >
        Anterior
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 rounded cursor-pointer ${
            currentPage === i + 1
              ? "bg-orange-700 text-white"
              : "bg-orange-200 hover:bg-orange-400"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-4 py-2 rounded cursor-pointer ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-orange-600 text-white hover:bg-orange-700"
        }`}
      >
        Siguiente
      </button>
    </div>
  );
}
