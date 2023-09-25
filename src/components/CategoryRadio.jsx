import React from "react";

const CategoryRadio = ({
  name,
  value,
  className,
  selectedCategory,
  handleRadioChange,
}) => {

  return (
    <div className="flex items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedCategory === value}
        onChange={handleRadioChange}
        className={className}
      />
      <label
        htmlFor={`${value}-radio`}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {value}
      </label>
    </div>
  );
};

export default CategoryRadio;
