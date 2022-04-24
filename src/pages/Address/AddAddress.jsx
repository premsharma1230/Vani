import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { CreateAddress, UpdateAddress } from "../../api/api";
import { useLocation, useNavigate } from "react-router-dom";

export const AddAddress = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const [addressList, setAddressList] = useState(
    location?.state?.Edit ? location?.state?.Edit?.address_type : ""
  );
  const [firstName, setFirstName] = useState(
    location?.state?.Edit ? location?.state?.Edit?.first_name : ""
  );
  const [lastName, setLastName] = useState(
    location?.state?.Edit ? location?.state?.Edit?.last_name : ""
  );
  const [address1, setAddress1] = useState(
    location?.state?.Edit ? location?.state?.Edit?.address_line_1 : ""
  );
  const [address2, setAddress2] = useState(
    location?.state?.Edit ? location?.state?.Edit?.address_line_2 : ""
  );
  const [city, setCity] = useState(
    location?.state?.Edit ? location?.state?.Edit?.city : ""
  );
  const [state, setState] = useState(
    location?.state?.Edit ? location?.state?.Edit?.state : ""
  );
  const [country, setCountry] = useState(
    location?.state?.Edit ? location?.state?.Edit?.country : ""
  );
  const [pinCode, setPinCode] = useState(
    location?.state?.Edit ? location?.state?.Edit?.pin : ""
  );
  const [number, setNumber] = useState(
    location?.state?.Edit ? Number(location?.state?.Edit?.phone_number) : ""
  );

  const AddressList = [
    {
      value: "home",
      label: "Home",
    },
    {
      value: "office",
      label: "Office",
    },
  ];
  const handleChange = event => {
    setAddressList(event.target.value);
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

  const handleUpdateSubmit = () => {
    const body = {
      first_name: firstName,
      last_name: lastName,
      address_line_1: address1,
      address_line_2: address2,
      city: city,
      state: state,
      pin: pinCode,
      phone_number: number,
      is_default: true,
      address_type: addressList,
    };
    // console.log(body, "EEEEEEEEEEEEEEEEEEEEEEEEE+++++++++++++++++");
    const id = location?.state?.Edit?.id;

    UpdateAddress(body, id,token).then(elem => {
      console.log(elem, "updated++++++++++++");
      navigate("/Address", {
        state: {
          saved: "saved",
        },
      });
    });
  };

  const handleSubmit = e => {
    const body = {
      first_name: firstName,
      last_name: lastName,
      address_line_1: address1,
      address_line_2: address2,
      city: city,
      state: state,
      pin: pinCode,
      phone_number: number,
      is_default: true,
      address_type: addressList,
    };
    // console.log(body, "EEEEEEEEEEEEEEEEEEEEEEEEE+++++++++++++++++");

    CreateAddress(body,token).then(elem => {
      console.log(elem, "AddSubmitApi++++++++++++");
      navigate("/Address");
    });
  };

  return (
    <>
      <section className=" Description_wrapper Wishlist_Wrapper AddAddress_Wrapper">
        <div className="container">
          <div className="Whishlist_header">
            <h2>{location?.state?.Edit ? "Update Address" : "Add Address"}</h2>
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
                    value={addressList}
                    required
                    sx={{ width: "62ch" }}
                    onChange={handleChange}
                  >
                    {AddressList.map(option => (
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
                  {location?.state?.Edit ? (
                    <Button
                      variant="contained"
                      sx={{ width: "30ch" }}
                      onClick={handleUpdateSubmit}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{ width: "30ch" }}
                      onClick={handleSubmit}
                    >
                      Save
                    </Button>
                  )}
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
