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
import { useSelector, useDispatch } from "react-redux";
import {
  incNumber,
  OpenLoginForm,
  // OpenRegisterationForm,
  Redirection,
  UserIsLogin,
} from "../../actions";
import Modal from "@mui/material/Modal";
import Registeration from "../Registeration";

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
export default function Login(props) {
  console.log(props.closedPage, "+++LoginProps");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const RedirectSamePage = useSelector(state => state.RedirectSamePage);
  // const OpenRegisterationModel = useSelector(
  //   state => state.OpenRegisterationPage
  // );
  const classes = useStyles();
  const [loginModal, setLoginModal] = useState(false);
  const [newRegister, setNewRegister] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const handleOpenModel = () => setOpenModel(true);
  const handleCloseModel = () => setOpenModel(false);

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
  const onSubmit = data => {
    const Body = {
      email: data.username,
      password: data.password,
    };
    LoginApi(Body)
      .then(res => {
        if (res?.status == true) {
          const LoginUserData = {
            firstName: res?.first_name,
            lastName: res?.last_name,
            phoneNumber: res?.phone_number,
          };
          dispatch(UserIsLogin(true));
          sessionStorage.setItem(
            "LoginUserData",
            JSON.stringify(LoginUserData)
          );
          sessionStorage.setItem("LoginData", JSON.stringify(res));
          sessionStorage.setItem(
            "LoginUserData",
            JSON.stringify(LoginUserData)
          );
          getCartList(res?.token).then(elem => {
            sessionStorage.setItem(
              "cartIdWithToken",
              JSON.stringify(elem?.cart_id)
            );
            navigate(RedirectSamePage);
          });
          props.closedPage();
          getCartList(res?.token).then(ele => {
            dispatch(incNumber(ele?.count));
          });
        } else {
          setShowError(res?.data?.non_field_errors[0]);
          handleClick();
        }
      })
      .catch(err => {});
  };

  const handleNewRegister = () => {
    // dispatch(OpenLoginForm(false));
    // dispatch(OpenRegisterationForm(true));

    props.closedPage();
    // setNewRegister(true);
  };
  const closeLogin = () => {
    props.closedPage();
    navigate("/");
  };
  // console.log(props, "props+++++++++++++++++");
  return (
    <>
      <Modal
        open={props.openPage}
        onClose={handleCloseModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={`${Classes.loginContainer} logContainter`}>
          <Card className={classes.root + " custom_loginroot"}>
            <CardContent className="">
              <div className={Classes.loginHeader}>
                <div className={Classes.loginMainHeader + " loginheader"}>
                  <img src={Logo} alt="logo image" className="logo_img" />
                  <img
                    onClick={closeLogin}
                    src={Close}
                    alt="Close image"
                    className="closeicon_img"
                  />
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
                      Login
                    </Button>
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
        </div>
      </Modal>
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
      {newRegister ? <Registeration openRegistationPage={newRegister} /> : null}
    </>
  );
}
