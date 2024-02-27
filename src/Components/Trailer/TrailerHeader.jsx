import React from "react";
import { netflix_logo } from "../../utils/constants";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { toast } from "react-toastify";

const TrailerHeader = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleHome = () => {
    navigate("/browse");
  };
  const handleLangChange = () => {};
  const handleToggleGPTSearch = () => {};
  const handleSignOut = () => {
    handleClose();
    signOut(auth)
      .then(() => {
        toast.warning("Logged out !");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };
  const gptPage = true;
  const temp = null;
  return (
    <div>
      <div className="absolute flex justify-between bg-black   flex-row   w-[100%] px-4 py-1  z-10">
        <img
          className="md:w-40 w-32 cursor-pointer"
          onClick={handleHome}
          src={netflix_logo}
        />

        {
          <div className="flex py-4">
            <div className="cursor-pointer">
              <Avatar
                src={temp?.photoURL}
                sx={{ width: 45, height: 45, marginRight: 4 }}
                // onClick={handleSignOut}
                onClick={handleClickOpen}
              ></Avatar>
            </div>
          </div>
        }
      </div>
      <Dialog
        sx={{
          //You can copy the code below in your theme
          color: "white",
          "& .MuiPaper-root": {
            background: "#363636",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent", // Try to remove this to see the result
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{ textDecorationColor: "white", color: "white" }}
          id="alert-dialog-title"
        >
          Do you want to Logout?
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            No
          </Button>
          <Button onClick={handleSignOut} variant="contained" color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TrailerHeader;
