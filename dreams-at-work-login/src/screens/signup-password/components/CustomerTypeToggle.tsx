type CustomerType = "personal" | "business"

interface CustomerTypeToggleProps {
  value: CustomerType | null
  onChange: (type: CustomerType) => void
}

export default function CustomerTypeToggle({ value, onChange }: CustomerTypeToggleProps) {
  return (
    <div className="mb-6">
      <p className="mb-3 text-center text-sm font-semibold text-[#0D0D0D]">
        What type of customer are you?
      </p>
      <div className="flex gap-2">
        {(["personal", "business"] as CustomerType[]).map((type) => {
          const isSelected = value === type
          return (
            <button
              key={type}
              type="button"
              onClick={() => onChange(type)}
              style={{
                borderColor: isSelected ? "#CCFF00" : "#E5E7EB",
              }}
              className={[
                "flex-1 rounded-full border-2 py-3 text-sm font-semibold capitalize transition-all duration-150",
                isSelected
                  ? "bg-white text-[#0D0D0D]"
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600",
              ].join(" ")}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
