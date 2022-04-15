import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Footer } from "../Footer/Footer";

export const ChangePassword = () => {
  return (
    <section className=" Description_wrapper Wishlist_Wrapper AddAddress_Wrapper ChangePass_Wrapper">
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
              <div className="PhneNumber_Wrapper">
                <h3>Old Password</h3>
                <TextField
                  id="oldpassword"
                  type="text"
                  label="OldPassword"
                  sx={{ width: "62ch" }}
                />
              </div>
              <div className="PhneNumber_Wrapper">
                <h3>New Password</h3>
                <TextField
                  id="NewPass"
                  type="text"
                  label="NewPassword"
                  sx={{ width: "62ch" }}
                />
              </div>
              <div className="PhneNumber_Wrapper">
                <h3>Repeat Password</h3>
                <TextField
                  id="RepeatPassword"
                  type="text"
                  label="RepeatPassword"
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
