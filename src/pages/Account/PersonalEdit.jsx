import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Footer } from "../Footer/Footer";
import { useForm } from "react-hook-form";
import { UpdatePersonalDetailsApi } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

export const PersonalEdit = () => {
  let navigate = useNavigate();
  const userDetails = JSON.parse(sessionStorage?.getItem("LoginData"));
  console.log(userDetails,"userDetails++++++++++++++++++++++++=")
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    first_name : '',
    last_name : '',
    phone_number : ''
  });
  const onSubmit = data => {
    const body = {
      first_name : data.fName,
      last_name : data.lName,
      phone_number : data.number
    }
    if(userDetails?.token){
    UpdatePersonalDetailsApi(body,userDetails).then((ele) => {
      console.log(ele,"============================")
      navigate('/PersonalDetail')
    })
  }else{
    navigate('/Login')
  }
  }
  return (
    <section className=" Description_wrapper Wishlist_Wrapper AddAddress_Wrapper PersonalEdit_Wrapper">
      <div className="container">
        <div className="Whishlist_header">
          <h2>Personal Details</h2>
        </div>
        <div className="Wishlist_content AddAddress_Content">
          <div className="Address_Form">
            {/* <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            > */}
             <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Name_field address-cmn">
                <h3>Name</h3>
                <div className="FName_wrp">
                  <TextField
                   type="text"
                   variant="outlined"
                   placeholder="First Name"
                   sx={{ width: "30ch" }}
                   name="fName"
                   {...register("fName", {
                     required: "First Name is required",
                   })}
                   error={Boolean(errors?.fName)}
                   helperText={errors.fName?.message}
                  />
                  <TextField
                    type="text"
                    variant="outlined"
                    placeholder="Last Name"
                    sx={{ width: "30ch" }}
                    name="lName"
                    {...register("lName", {
                      required: "Last Name is required",
                    })}
                    error={Boolean(errors?.lName)}
                    helperText={errors.lName?.message}
                  />
                </div>
              </div>

              <div className="PhneNumber_Wrapper">
                <h3>Phone Number</h3>
                <TextField
                  type="text"
                  variant="outlined"
                  placeholder="Phone Number"
                  sx={{ width: "30ch" }}
                  name="number"
                  {...register("number", {
                    required: "Phone Number is required",
                  })}
                  error={Boolean(errors?.number)}
                  helperText={errors.number?.message}
                />
              </div>
              <div className="Submit_Wrapper">
                <Button type="submit" variant="contained" sx={{ width: "30ch" }}>
                  Save
                </Button>
              </div>
              </form>
            {/* </Box> */}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
