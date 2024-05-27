"use client";

import {
  Children,
  KeyboardEvent,
  ReactElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { IconChevronDown } from "@tabler/icons-react";

// cva
import { selectVariants, SelectProps } from "@/app/_types/cva";

// utils
import { cn } from "@/app/_utils";

export const Select = ({
  leftIcon,
  onChange,
  className,
  type,
  children,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);

  const validChildren = Children.toArray(children).filter(
    (child) => isValidElement(child) && child.type === "option"
  ) as ReactElement<HTMLOptionElement>[];

  useEffect(() => {
    if (!selectedOption && validChildren.length > 0) {
      setSelectedOption(validChildren[0].props.value);
      return;
    }
  }, [validChildren, selectedOption]);

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
    const optionsArray = Children.toArray(children).filter(
      (child) => isValidElement(child) && child.type === "option"
    );

    if (event.key === "Enter" || event.key === " ") {
      if (isOpen && focusedOptionIndex !== -1) {
        const selectedChild = optionsArray[
          focusedOptionIndex
        ] as ReactElement<HTMLOptionElement>;
        handleSelectOptions(selectedChild.props.value);
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
        prev === 0 ? optionsArray.length - 1 : prev - 1
      );
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedOptionIndex((prev) =>
        prev === optionsArray.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleSelectOptions = (value: string) => {
    setSelectedOption(value);
    onChange?.(value);
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
        <p>{selectedOption.toUpperCase()}</p>
        <IconChevronDown color="#F4F4F5" size={20} />
      </div>

      {isOpen && (
        <div className="absolute top-full mt-1 bg-white rounded-md overflow-hidden">
          {validChildren.map((child, index) => (
            <p
              key={child.props.value}
              className={`py-3 px-4 hover:bg-[#f3f4f6] cursor-pointer ${
                focusedOptionIndex === index ? "bg-[#f3f4f6]" : ""
              }`}
              onClick={() => handleSelectOptions(child.props.value)}
              role="option"
              aria-selected={selectedOption === child.props.value}
              tabIndex={focusedOptionIndex === index ? 0 : -1}
              onMouseEnter={() => setFocusedOptionIndex(index)}
            >
              {/* TODO: Investigate why this is not working */}
              {/* @ts-ignore */}
              {child.props.children}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
