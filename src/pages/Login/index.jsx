import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Classes from "./login.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useForm, Controller } from "react-hook-form";
import Logo from "../../assets/vaani-logo.png";
import Close from "../../assets/Close.png";
import GooglePic from "../../assets/google_logo.png";
import FacebookPic from "../../assets/facebook_logo.png";
import { useHistory, useNavigate } from "react-router-dom";
import { getCartList, LoginApi } from "../../api/api";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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
export default function Login() {
  let navigate = useNavigate();
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
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
  useEffect(() => {
    const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
    if (token) {
      navigate("/");
    }
  }, [window.location.pathname]);
  const onSubmit = (data) => {
    const Body = {
      email: data.username,
      password: data.password,
    };
    LoginApi(Body)
      .then((res) => {
        if (res?.status == true) {
          sessionStorage.setItem("LoginData", JSON.stringify(res));
          getCartList(res?.token).then((elem) => {
            sessionStorage.setItem(
              "cartIdWithToken",
              JSON.stringify(elem?.cart_id)
            );
            navigate("/");
          });
        } else {
          setShowError(res?.data?.non_field_errors[0]);
          handleClick();
        }
      })
      .catch((err) => {});
  };
  const handleNewRegister = () => {
    navigate("/Registeration");
  };
  return (
    <div className={Classes.loginContainer + " logContainter"}>
      <Card className={classes.root + " custom_loginroot"}>
        <CardContent className="">
          <div className={Classes.loginHeader}>
            <div className={Classes.loginMainHeader + " loginheader"}>
              <img src={Logo} alt="logo image" className="logo_img" />
              <img src={Close} alt="Close image" className="closeicon_img" />
            </div>
            <div className={Classes.loginSubheader + " login_heading"}>
              Login
            </div>
          </div>
          <div className={Classes.formContainer}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${classes.root} ${Classes.formMain} login_form`}
            >
              <div>
                <div>
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    className={classes.userField}
                    name="username"
                    {...register("username", {
                      required: "username is required",
                    })}
                    error={Boolean(errors?.username)}
                    helperText={errors.username?.message}
                  />
                  {/* <Controller
                    name="username"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        // id="outlined-basic"
                        label="Enter your Email Address"
                        variant="outlined"
                        type={email}
                        className={Classes.userField}
                      />
                    )}
                  /> */}
                </div>
                <div className={Classes.passwordFieldMargin}>
                  {/* <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        // id="outlined-basic"
                        label="Enter your Password"
                        variant="outlined"
                        className={Classes.passwordField}
                      />
                    )}
                  /> */}
                  <TextField
                    label="Password"
                    variant="outlined"
                    className={Classes.passwordField}
                    {...register("password", {
                      required: "password is required",
                    })}
                    error={Boolean(errors?.password)}
                    helperText={errors.password?.message}
                  />
                </div>
              </div>
              <div className={Classes.SignupButton}>
                <Controller
                  className={Classes.loginField}
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
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
                      {...field}
                      className="loginbtn"
                    >
                      Login
                    </Button>
                  )}
                />
              </div>
            </form>
            <div className={Classes.forgotPassword + " forgot_link"}>
              Forgot Password
            </div>
            <div className={Classes.backForgotPassword}>
              <div className={Classes.back + " other_logins"}>
                <img src={FacebookPic} alt="logo image" />
                <img src={GooglePic} alt="Close image" />
                <div onClick={handleNewRegister} className="Signuplink">
                  New User?
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
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
    </div>
  );
}
