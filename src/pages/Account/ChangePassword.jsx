import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Classes from "../Login/login.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import { Footer } from "../Footer/Footer";
import { ChangePasswordApi } from "../../api/api";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Redirection } from "../../actions";
import Login from "../../pages/Login";
import { useSelector, useDispatch } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    borderRadius: "26px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export const ChangePassword = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loginModal, setLoginModal] = useState(false);
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
  });
  const [showError, setShowError] = React.useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = () => {
    setState({
      open: true,
      vertical: "top",
      horizontal: "right",
    });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ ...state, open: false });
  };
  const onSubmit = data => {
    if (data.newPassword === data.repeatPassword) {
      const Body = {
        current_password: data.oldPassword,
        new_password: data.newPassword,
      };
      if (token) {
        ChangePasswordApi(Body, token)
          .then(res => {
            if (res?.status == true) {
              setShowError(res?.msg);
              handleClick();
              navigate("/Account");
            } else {
              setShowError(res?.data?.non_field_errors[0]);
              handleClick();
            }
          })
          .catch(err => {});
      } else {
        dispatch(Redirection("/ChangePassword"));
        setLoginModal(!loginModal);
        // navigate("/Login")
      }
    }
  };
  const handLogout = e => {
    setLoginModal(false);
  };
  return (
    <>
      <section className=" Description_wrapper Wishlist_Wrapper AddAddress_Wrapper ChangePass_Wrapper">
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`${classes.root} ${Classes.formMain}`}
              >
                <div className="PhneNumber_Wrapper">
                  <h3>Old Password</h3>
                  <TextField
                    type="text"
                    // label="OldPassword"
                    variant="outlined"
                    placeholder="Old Password"
                    className={Classes.passwordField}
                    name="oldPassword"
                    {...register("oldPassword", {
                      required: "Old Password is required",
                    })}
                    error={Boolean(errors?.oldPassword)}
                    helperText={errors.oldPassword?.message}
                  />
                </div>
                <div className="PhneNumber_Wrapper">
                  <h3>New Password</h3>
                  <TextField
                    type="text"
                    // label="NewPassword"
                    placeholder="New Password"
                    variant="outlined"
                    className={Classes.passwordField}
                    name="newPassword"
                    {...register("newPassword", {
                      required: "New Password is required",
                    })}
                    error={Boolean(errors?.newPassword)}
                    helperText={errors.newPassword?.message}
                  />
                </div>
                <div className="PhneNumber_Wrapper">
                  <h3>Repeat Password</h3>
                  <TextField
                    type="text"
                    // label="RepeatPassword"
                    placeholder="Repeat Password"
                    variant="outlined"
                    className={Classes.passwordField}
                    {...register("repeatPassword", {
                      required: "Repeat Password is required",
                    })}
                    error={Boolean(errors?.repeatPassword)}
                    helperText={errors.repeatPassword?.message}
                  />
                </div>
                <div className="Submit_Wrapper">
                  <Button
                    variant="contained"
                    style={{
                      background: "#0298BF",
                      height: "30px",
                      width: "130px",
                      borderRadius: "8px",
                    }}
                    type="submit"
                    color="primary"
                  >
                    Save
                  </Button>
                </div>
              </form>
              {/* </Box> */}
            </div>
          </div>
        </div>
        <Footer />
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={3000}
          message={showError}
          key={vertical + horizontal}
          onClose={handleClose}
        >
          <Alert severity="error">{showError}</Alert>
        </Snackbar>
      </section>
      {loginModal ? (
        <div className="Login_Wrapper">
          <Login Logout={handLogout} />
        </div>
      ) : null}
    </>
  );
};
