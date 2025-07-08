import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import ArticleIcon from "@mui/icons-material/Article";
import ListIcon from "@mui/icons-material/List";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Feedback = () => {
  const countries = ["India", "USA", "UK", "Pakistan", "China"];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    email: "",
    phone: "",
  });

  const validate = () => {
    let emailError = "";
    let phoneError = "";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(formData.email)) {
      emailError: "plaese enter valid email";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      emailError: "plaese enter valid number";
    }

    setError({ email: emailError, phone: phoneError });
    return !(emailError || phoneError);
  };

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("form data", formData);
      alert("feedback submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        email: "",
        phone: "",
      });

      setError({ email: "", phone: "" });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        p: 1,
        m: 1,
        backgroundColor: "#f5f5f5",
        overflow: "auto",
      }}
    >
      <Box>
        <Box sx={{ width: "25vw" }}>
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "#fff",
              width: "300px",
              height: "80px",
              display: "flex",
              p: 1,
              m: "auto",
            }}
          >
            <img
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                margin: "5px",
              }}
              src={
                "data:image/jpeg;base64,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"
              }
              alt={"img"}
            />
            <Box sx={{ margin: "5px" }}>
              <Typography variant="h6">Hi, Readers</Typography>
              <Typography variant="body1" component="h2">
                Here's your news!
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              width: "300px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              p: 1,
              mt: 5,
            }}
          >
            <Box sx={{ margin: "5px", m: "auto" }}>
              <Typography
                sx={{ alignContent: "center", textAlign: "center" }}
                variant="h6"
              >
                Have a Feedback?
              </Typography>

              <Button
                sx={{
                  color: "black",
                  backgroundColor: "#2ecc71",
                  "&:hover": {
                    backgroundColor: "#2ecc71",
                    boxShadow: "none",
                  },
                  fontSize: "15px",
                }}
              >
                We are Listening!
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ ml: 4 }}>
        <Typography variant="h4" sx={{ color: "black" }}>
          Thank you so muzh for taking tha time!
        </Typography>
        <Typography variant="body" sx={{ color: "black" }}>
          Please provide the below details!
        </Typography>
        <Box sx={{ overflow: "auto" }}>
          <form onSubmit={handlesubmit} style={{ overflowy: "scroll" }}>
            <Typography variant="body" sx={{ color: "black" }}>
              First Name:
            </Typography>

            <TextField
              lable="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handlechange}
              fullWidth
              margin="normal"
              size="small"
              required
            />
            <Typography variant="body" sx={{ color: "black" }}>
              Last Name:
            </Typography>

            <TextField
              lable="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handlechange}
              fullWidth
              margin="normal"
              required
              size="small"
            />
            <Typography variant="body" sx={{ color: "black" }}>
              Address:
            </Typography>

            <TextField
              lable="Address"
              name="address"
              value={formData.address}
              onChange={handlechange}
              fullWidth
              margin="normal"
              size="small"
              multiline
              rows={3}
              required
            />
            <Typography variant="body" sx={{ color: "black" }}>
              Country:
            </Typography>

            <TextField
              select
              lable="Country"
              name="country"
              value={formData.country}
              onChange={handlechange}
              fullWidth
              margin="normal"
              size="small"
              required
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </TextField>
            <Typography variant="body" sx={{ color: "black" }}>
              Email ID:
            </Typography>

            <TextField
              lable="Email ID"
              name="email"
              value={formData.email}
              onChange={handlechange}
              fullWidth
              margin="normal"
              size="small"
              required
            />
            {error.email && (
              <Typography variant="body" sx={{ color: "black" }}>
                {error.email}
              </Typography>
            )}
            <Typography variant="body" sx={{ color: "black" }}>
              Phone Number:
            </Typography>

            <TextField
              lable="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handlechange}
              fullWidth
              margin="normal"
              size="small"
              required
            />
            {error.phone && (
              <Typography variant="caption" color="error">
                {error.phone}
              </Typography>
            )}

            <Button
              size="big"
              type="submit"
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#2ecc71" }}
            >
              submit Feedback
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Feedback;
