import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export const AddAddress = () => {
  const [currency, setCurrency] = useState("");
  const currencies = [
    {
      value: "A1",
      label: "A1",
    },
    {
      value: "A2",
      label: "A2",
    },
    {
      value: "A3",
      label: "A3",
    },
  ];
  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleAddresSelect = () => {};

  return (
    <>
      <section className=" Description_wrapper Wishlist_Wrapper AddAddress_Wrapper">
        <div className="container">
          <div className="Whishlist_header">
            <h2>Add Address</h2>
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
                <div className="Address-Select ">
                  <h3>Save Address as</h3>
                  <TextField
                    id="Address"
                    select
                    label="Address"
                    value={currency}
                    required
                    sx={{ width: "62ch" }}
                    onClick={handleAddresSelect}
                    // helperText="Please select your currency"
                  >
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
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
                <div className="Address_field">
                  <h3>Address</h3>
                  <div className="FName_wrp">
                    <TextField
                      id="Address1"
                      label="Address1"
                      sx={{ width: "30ch" }}
                    />
                    <TextField
                      id="Address2"
                      label="Address2"
                      sx={{ width: "30ch" }}
                    />
                  </div>
                </div>
                <div className="Group_detail1_Wrapper">
                  <ul>
                    <li className="City1">
                      <h3>City</h3>
                      <TextField
                        id="City"
                        label="city"
                        sx={{ width: "30ch" }}
                      />
                    </li>
                    <li className="State_Wrp">
                      <h3>State</h3>
                      <TextField
                        id="state"
                        select
                        label="state"
                        // helperText="Please select your state"
                        sx={{ width: "30ch" }}
                      >
                        <MenuItem key="#" value="Delhi">
                          Delhi
                        </MenuItem>
                        <MenuItem key="#" value="Delhi">
                          Delhi
                        </MenuItem>
                      </TextField>
                    </li>
                  </ul>
                </div>
                <div className="Group_detail1_Wrapper">
                  <ul>
                    <li className="Country">
                      <h3>Country</h3>
                      <TextField
                        id="Country"
                        label="Country"
                        sx={{ width: "30ch" }}
                      />
                    </li>
                    <li className="Pin_Code">
                      <h3>Pin Code</h3>
                      <TextField
                        id="PinCode"
                        type="number"
                        label="PinCode"
                        sx={{ width: "30ch" }}
                      />
                    </li>
                  </ul>
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
    </>
  );
};
