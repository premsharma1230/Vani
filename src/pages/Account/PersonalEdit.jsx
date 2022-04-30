import React,{useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Footer } from "../Footer/Footer";
import { useForm } from "react-hook-form";
import { UpdatePersonalDetailsApi } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PersonalEdit = () => {
  let navigate = useNavigate();
  const userDetails = JSON.parse(sessionStorage?.getItem("LoginData"));
  const { register, handleSubmit, reset } = useForm();
  const [user, setUser] = useState(null);
  useEffect(() => {
    // simulate async api call with set timeout
    setTimeout(() => setUser({ number: "", firstName: userDetails?.first_name, lastName: userDetails?.last_name }), 1000);
  }, []);
  useEffect(() => {
    // reset form with user data
    reset(user);
  }, [user]);
  function onSubmit(data) {
    const body = {
      first_name: data.firstName,
      last_name: data.lastName,
      phone_number: data.number
    }
    if (userDetails?.token) {
      UpdatePersonalDetailsApi(body, userDetails).then((ele) => {
        const LoginUserData = {
          firstName : ele?.data?.first_name,
          lastName : ele?.data?.last_name,
          phoneNumber: ele?.data?.phone_number
        }
        sessionStorage.setItem("LoginUserData", JSON.stringify(LoginUserData));
        navigate('/PersonalDetail')
      })
    } 
    else {
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
                    name="firstName"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                  />
                  <TextField
                    type="text"
                    variant="outlined"
                    placeholder="Last Name"
                    sx={{ width: "30ch" }}
                    name="lastName"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
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
