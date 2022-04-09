import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Classes from "./registeration.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useForm, Controller } from "react-hook-form";
import axios from "axios"
import Logo from "../../assets/vaani-logo.png";
import Close from "../../assets/Close.png";
import GooglePic from "../../assets/google_logo.png";
import FacebookPic from "../../assets/facebook_logo.png";
import { useHistory, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    borderRadius: '26px',
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
export default function Registeration() {
  let navigate = useNavigate();
  const classes = useStyles();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName : "",
      email : "",
      password: "",

    },
  });
  const onSubmit = (data) => {
    // const Body = {
    //   email: data.email,
    //   password: data.password,
    //   provider : "",
    //   first_name : data.firstName,
    //   last_name : data.lastName
    // }
    // console.log(Body,"Body++++++++++++++++++++++++++")
    // axios({
    //   method: 'post',
    //   url: 'http://admin.vaniprakashan.in/auth/user/register',
    //   data: Body
    // }).then((e) => {
    //   console.log(e, "register api")
    //   navigate("/Login")
    // })

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("provider", "");
    formData.append("first_name", data.firstName);
    formData.append("last_name", data.lastName);
  
    axios.post("http://admin.vaniprakashan.in/auth/user/register/", formData).then(res => {
      navigate("/Login")
    }).catch((error)=>{
    })

  }
  return (
    <div className={Classes.loginContainer}>
      <Card className={classes.root}>
        <CardContent>
          <div className={Classes.loginHeader}>

            <div className={Classes.loginMainHeader}>
              <img src={Logo} alt="logo image" />
              <img src={Close} alt="Close image" />
            </div>
            <div className={Classes.loginSubheader}>
              Sign up
            </div>
          </div>
          <div className={Classes.formContainer}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${classes.root} ${Classes.formMain}`}
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
                        background: "#0298BF", height: '30px',
                        width: '130px',
                        borderRadius: '8px'
                      }}
                      type="submit"
                      color="primary"
                      {...field}
                    >
                      SIGN UP
                    </Button>
                  )}
                />
              </div>
            </form>
            <div className={Classes.backForgotPassword}>
              <div className={Classes.back}>
                <img src={FacebookPic} alt="logo image" />
              </div>
              <div className={Classes.back}>
                <img src={GooglePic} alt="Close image" />
              </div>
              <div className={Classes.back}>
                Sign In?
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
