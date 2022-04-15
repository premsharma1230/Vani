import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Footer } from "../Footer/Footer";

export const PersonalEdit = () => {
  return (
    <section className=" Description_wrapper Wishlist_Wrapper AddAddress_Wrapper PersonalEdit_Wrapper">
      <div className="container">
        <div className="Whishlist_header">
          <h2>Personal Details</h2>
        </div>
        <div className="Wishlist_content AddAddress_Content">
          <div className="Address_Form">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="Name_field address-cmn">
                <h3>Name</h3>
                <div className="FName_wrp">
                  <TextField
                    id="First-Name"
                    label="FirstName"
                    sx={{ width: "30ch" }}
                  />
                  <TextField
                    id="Last-Name"
                    label="LastName"
                    sx={{ width: "30ch" }}
                  />
                </div>
              </div>

              <div className="PhneNumber_Wrapper">
                <h3>Phone Number</h3>
                <TextField
                  id="Number"
                  type="number"
                  label="PhoneNumber"
                  sx={{ width: "62ch" }}
                />
              </div>
              <div className="Submit_Wrapper">
                <Button variant="contained" sx={{ width: "30ch" }}>
                  Save
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
