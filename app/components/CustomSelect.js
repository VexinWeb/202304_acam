import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

// CustomSelect sets select object of message in ContactForm.js
const CustomSelect = ({
  onChange,
  onBlur,
  options,
  defaultValue,
  className,
}) => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      borderRadius: state.selectProps.menuIsOpen ? "0" : "0.375rem",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      display: "none",
    }),
    container: (provided) => ({
      ...provided,
      width: "16rem",
      // width: "20rem",
      height: "2rem",
      // borderRadius: 10,
      // border: "2px solid rgb(253 224 71)",
      border: "2px solid white",
      backgroundColor: "white",
    }),
    input: (provided) => ({
      ...provided,
      // padding: "0 0 0 1rem",
      cursor: "pointer",
      height: "2rem",
      margin: 0,
      paddingBottom: 0,
      paddingTop: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "grey" : "white",
      // backgroundColor: state.isSelected ? "rgb(253 224 71)" : "white",
      // opacity: state.isSelected ? 0.6 : 1,
      // padding: 20,
      cursor: "pointer",
    }),
    control: () => ({
      height: "2rem",
      // none of react-select's styles are passed to <Control />
      // width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
    valueContainer: (provided) => ({
      ...provided,
      padding: "0px 8px",
    }),
  };

  return (
    <div className={className}>
      <Select
        defaultValue={defaultValue}
        onChange={(value) => onChange(value)}
        options={options}
        onBlur={onBlur}
        styles={customStyles}
      />
    </div>
  );
};

// PropTypes for CustomSelect
CustomSelect.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.array,
  defaultValue: PropTypes.object,
  className: PropTypes.string,
};

export default CustomSelect;
