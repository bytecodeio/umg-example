import React, { Fragment, useState, useContext, useEffect } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Button, Container, Nav, Navbar, Header } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import defaultLogo from "../../assets/BytecodeLogo.png";
import { defaultLogoHeight } from "../../utils/constants";
import { CompanyLogo } from "../_lowLevel/CompanyLogo";
import { ExtensionContext } from "@looker/extension-sdk-react";
import Checkbox from "../../components/_lowLevel/Checkbox.js";

import Radio from "../../components/_lowLevel/Radio.js";

export const TopAppBar = ({ appConfig, onMenuClick, toolbarHeight,props, ref, boardTitle, filter, expression, onChange,fieldNameSuggestions,fieldNameSuggestions2,setSelectedCheckboxes,selectedCheckboxes }) => {
  const { core40SDK } = useContext(ExtensionContext);
  const [message, setMessage] = useState();

  useEffect(() => {
    const initialize = async () => {
      try {
        const value = await core40SDK.ok(core40SDK.me());
        setMessage(`${value.display_name}`);
      } catch (error) {
        setMessage("Error occured getting information about me!");
        console.error(error);
      }
    };
    initialize();
  }, []);

// console.log(fieldNameSuggestions2, "fieldNameSuggestions")
// //  if (fieldNameSuggestions?.ui_config.type == "checkboxes") {
// //
// // console.log(fieldNameSuggestions, "fieldNameSuggestions")
// //
// //
// // }
    let filters = JSON.parse(JSON.stringify(fieldNameSuggestions));




console.log(filters,fieldNameSuggestions2, "hellllllll")



  return (
<Fragment>
    <Container fluid className="padding-0">
        <div className="inner_page_block white_option"></div>

        <Navbar collapseOnSelect expand="lg">
          <Container fluid>


<div class="backgroundimage"></div>

          </Container>
        </Navbar>
      </Container>

//I would like to put the checkboxes filters here for all 13 dashboards

      {/*<Checkbox
          fieldNameSuggestions={props.fieldNameSuggestions}
          setSelectedCheckboxes={props.setSelectedCheckboxes}
          selectedCheckboxes={props.selectedCheckboxes}
          // filter={props.filter}
          // expression={props.expression}
          // onChange={props.onChange}

        />*/}



    </Fragment>
  );
};
