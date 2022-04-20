import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export const AddAddress = () => {
  const [currency, setCurrency] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [number, setNumber] = useState("");
  const currencies = [
    {
      value: "A1",
      label: "Home",
    },
    {
      value: "A2",
      label: "Office",
    },
    {
      value: "A3",
      label: "Other",
    },
  ];
  const handleChange = event => {
    setCurrency(event.target.value);
  };
  const handleFirstName = event => {
    setFirstName(event.target.value);
  };
  const handleLastName = event => {
    setLastName(event.target.value);
  };
  const handleAddress1 = event => {
    setAddress1(event.target.value);
  };
  const handleAddress2 = event => {
    setAddress2(event.target.value);
  };
  const handleCity = event => {
    setCity(event.target.value);
  };
  const handleState = event => {
    setState(event.target.value);
  };
  const handleCountry = event => {
    setCountry(event.target.value);
  };
  const handlePinCode = event => {
    setPinCode(event.target.value);
  };
  const handleNumber = event => {
    setNumber(event.target.value);
  };
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
                    onChange={handleChange}
                    required
                    sx={{ width: "62ch" }}
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
                      id="FirstName"
                      label="FirstName"
                      sx={{ width: "30ch" }}
                      value={firstName}
                      onChange={handleFirstName}
                    />
                    <TextField
                      id="LastName"
                      label="LastName"
                      sx={{ width: "30ch" }}
                      value={lastName}
                      onChange={handleLastName}
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
                      value={address1}
                      onChange={handleAddress1}
                    />
                    <TextField
                      id="Address2"
                      label="Address2"
                      sx={{ width: "30ch" }}
                      value={address2}
                      onChange={handleAddress2}
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
                        value={city}
                        onChange={handleCity}
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
                        value={state}
                        onChange={handleState}
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
                        value={country}
                        onChange={handleCountry}
                      />
                    </li>
                    <li className="Pin_Code">
                      <h3>Pin Code</h3>
                      <TextField
                        id="PinCode"
                        type="number"
                        label="PinCode"
                        sx={{ width: "30ch" }}
                        value={pinCode}
                        onChange={handlePinCode}
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
                    value={number}
                    onChange={handleNumber}
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
