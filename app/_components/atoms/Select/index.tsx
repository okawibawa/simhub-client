import {
  ComponentProps,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/app/_utils/cn";
import { IconChevronDown } from "@tabler/icons-react";

const selectVariants = cva(
  [
    "p-3",
    "flex",
    "gap-2",
    "cursor-pointer",
    "text-sm",
    "font-medium",
    "leading-[18px]",
    "text-zinc-100",
  ],
  {
    variants: {
      type: {
        filled: [],
      },
    },
    defaultVariants: {
      type: "filled",
    },
  }
);

interface SelectProps
  extends VariantProps<typeof selectVariants>,
    Omit<ComponentProps<"div">, "onChange"> {
  placeholder: string;
  leftIcon?: ReactNode;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const Select = ({
  placeholder,
  leftIcon,
  options,
  onChange,
  className,
  type,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      if (isOpen && focusedOptionIndex !== -1) {
        console.log({ opt: options[focusedOptionIndex] });
        handleSelectOptions(options[focusedOptionIndex].value);
        return;
      }

      toggleDropdown();
    }

    if (event.key === "Escape") {
      setFocusedOptionIndex(-1);
      setIsOpen(false);
      return;
    }

    if (event.key === "Tab") {
      if (isOpen) {
        setFocusedOptionIndex(-1);
        setIsOpen(false);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setFocusedOptionIndex((prev) =>
        prev === 0 ? options.length - 1 : prev - 1
      );
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setFocusedOptionIndex((prev) =>
        prev === options.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleSelectOptions = (value: string) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-max select-none" ref={selectRef}>
      <div
        className={cn(selectVariants({ className, type }))}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={isOpen ? "custom-select-dropdown" : undefined}
        tabIndex={0}
        {...props}
      >
        {leftIcon && leftIcon}
        <p>{placeholder}</p>
        <IconChevronDown color="#F4F4F5" size={20} />
      </div>

      {isOpen && (
        <div className="absolute top-full mt-1 bg-white rounded-md overflow-hidden">
          {options.map((option, index) => (
            <p
              key={option.label}
              className={`py-3 px-4 hover:bg-[#f3f4f6] cursor-pointer ${
                focusedOptionIndex === index ? "bg-[#f3f4f6]" : ""
              }`}
              onClick={() => handleSelectOptions(option.value)}
              role="option"
              aria-selected={selectedOption === option.value}
              tabIndex={focusedOptionIndex === index ? 0 : -1}
              onMouseEnter={() => setFocusedOptionIndex(index)}
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
