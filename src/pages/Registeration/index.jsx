import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Classes from "./registeration.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Logo from "../../assets/vaani-logo.png";
import Close from "../../assets/Close.png";
import GooglePic from "../../assets/google_logo.png";
import FacebookPic from "../../assets/facebook_logo.png";
import { useHistory, useNavigate } from "react-router-dom";
import { RegisterApi } from "../../api/api";

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
export default function Registeration(props) {
  let navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
    if (token) {
      navigate("/");
    }
  }, [window.location.pathname]);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = data => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("provider", "");
    formData.append("first_name", data.firstName);
    formData.append("last_name", data.lastName);
    RegisterApi(formData).then(ele => {
      navigate("/Login");
    });
  };
  const handleLogin = () => {
    navigate("/Login");
  };
  return (
    <div className={Classes.loginContainer + " logContainter"}>
      <Card className={classes.root + " custom_loginroot"}>
        <CardContent>
          <div className={Classes.loginHeader}>
            <div className={Classes.loginMainHeader + " loginheader"}>
              <img src={Logo} alt="logo image" className="logo_img" />
              <img
                src={Close}
                alt="Close image"
                className="closeicon_img"
                onClick={props.Logout}
              />
            </div>
            <div className={Classes.loginSubheader + " login_heading"}>
              Sign up
            </div>
          </div>
          <div className={Classes.formContainer}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${classes.root} ${Classes.formMain} login_form`}
            >
              <div>
                <div className={Classes.passwordFieldMargin}>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        // id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        className={Classes.userField}
                      />
                    )}
                  />
                </div>
                <div className={Classes.passwordFieldMargin}>
                  <Controller
                    name="lastName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        // id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        className={Classes.userField}
                      />
                    )}
                  />
                </div>
                <div className={Classes.passwordFieldMargin}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        // id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        className={Classes.userField}
                      />
                    )}
                  />
                </div>
                <div className={Classes.passwordFieldMargin}>
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        // id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        className={Classes.passwordField}
                      />
                    )}
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
                      SIGN UP
                    </Button>
                  )}
                />
              </div>
            </form>
            <div className={Classes.backForgotPassword + " other_logins"}>
              <div className={Classes.back}>
                <img src={FacebookPic} alt="logo image" />
              </div>
              <div className={Classes.back}>
                <img src={GooglePic} alt="Close image" />
              </div>
              <div
                onClick={handleLogin}
                className={Classes.back + " Signuplink"}
              >
                Sign In?
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
