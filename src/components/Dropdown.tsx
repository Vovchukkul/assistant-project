import { useState } from "react";
import './Dropdown.scss';

type Props = {
  options: { label: string, value: string }[];
  selectedOption: string;
  onSelect: (option: string) => void;
  droptext: string;
  legend: string;
}

const Dropdown: React.FC<Props> = ({ options, selectedOption, onSelect, droptext, legend }) => {
  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const fieldsetStyles = {
    padding: '0',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(28, 27, 31, 1)',
    fontFamily: 'Montserrat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <div className="dropdown">
        <fieldset style={fieldsetStyles}>
          <legend className="legend">{legend}</legend>
          <div className="dropdown-content">
            <button onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle">
              {selectedOption ? selectedOption : droptext}
              {!isOpen
                ? (
                  <div className="toogle_open"></div>
                ) : (
                  <div className="toogle_close"></div>
                )}
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                {options.map((option) => (
                  <li key={option.value} onClick={() => handleOptionClick(option.value)}>
                    {option.label}
                  </li>
                ))}
              </ul>
            )}  
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Dropdown;