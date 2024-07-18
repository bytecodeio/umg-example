import React, {
  Fragment,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import {
  Accordion,
  Col,
  Form,
  Row,
  Button,
  Nav,
  AccordionCollapse,
} from "react-bootstrap";
import { ExtensionContext } from "@looker/extension-sdk-react";
import { Switch } from "@mui/material";

const Radio = ({
  fieldOptions,
  setFieldOptions,
  selectedFields,
  setSelectedFields,
  fieldNameSuggestions2,
  setFieldNameSuggestions2,
  selectedCheckboxes,
  setSelectedCheckboxes,
  boardTitle,
  setBoardTitle,
  filter,
  expression,
  onChange,
}) => {
  const { core40SDK: sdk, extensionSDK } = useContext(ExtensionContext);

    console.log("fuck you");

  const handleFieldSelection = (field, value) => {
    let _selectedCheckboxes = { ...selectedCheckboxes };
    let { title } = field;
    if (!_selectedCheckboxes.hasOwnProperty(title)) {
      _selectedCheckboxes[title] = [];
    }
    if (_selectedCheckboxes[title]?.includes(value)) {
      let index = _selectedCheckboxes[title].indexOf(value);
      _selectedCheckboxes[title].splice(index, 1);
      console.log(_selectedCheckboxes);
    } else {
      _selectedCheckboxes[title].push(value);
    }
    if (_selectedCheckboxes[title].length == 0) {
      delete _selectedCheckboxes[title];
    }
    setSelectedCheckboxes(_selectedCheckboxes);
  };

  useEffect(() => {
    console.log("fuck you", fieldNameSuggestions2);
  }, [fieldNameSuggestions2]);


  console.log("fuck you", fieldNameSuggestions2);


  const handleSelectAll = (field) => {
    const allOptions = field.suggestions;
    const allSelected = allOptions.every((option) =>
      selectedCheckboxes[field.name]?.includes(option)
    );
    setSelectedCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [field.name]: allSelected ? [] : [...allOptions],
    }));
  };

  const [show5, setShow5] = React.useState();

   const wrapperRef = React.useRef(null);

   React.useEffect(() => {
     document.addEventListener("click", handleClickOutside, false);
     return () => {
       document.removeEventListener("click", handleClickOutside, false);
     };
   }, []);

   const handleClickOutside = (event) => {
     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
       setShow5(true);

     }
   };

  const [open, setOpen] = React.useState(false);




  return (
  <Fragment>
    <div className="d-flex justify-content-start align-items-center flex-wrap custom">

      {fieldNameSuggestions2.map((field, index) => (
        <Row key={index}>


          <div className="d-flex flex-wrap one">
            <p className="buttonP">{field.name}</p>
            {field.field?.enumerations?.map((option, optionIndex) => ( // Check for nested field object
              <Form.Group key={optionIndex}>
                <Form.Check
                  onClick={() => handleFieldSelection(field, option.value)} // Use value for selection
                  type="radio" // Use radio buttons
                  className=""
                  label={option.label}
                  checked={selectedCheckboxes[field.title]?.includes(option.value)}
                  name={field.title} // Use field title as name
                  id={`id_${index}_${optionIndex}`}
                  value={option.value}
                />
              </Form.Group>
            ))}
          </div>
        </Row>
      ))}
    </div>
  </Fragment>
);
};

export default Radio;
