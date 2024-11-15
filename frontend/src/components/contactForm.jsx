import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { addContact, updateContact } from "../api/tableContent";

const RegisterForm = ({ data, setOpenForm, mode, setRefetchData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setJobTitle("");
  };

  useEffect(() => {
    if (mode === "edit" && data) {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setPhone(data.phone);
      setCompany(data.company);
      setJobTitle(data.job_title);
    }
  }, [mode, data]);

  const CloseForm = () => {
    resetForm();
    setOpenForm(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const finalData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      company: company,
      job_title: jobTitle,
    };
    if (mode === "edit") {
      await updateContact(data._id, finalData);
    } else {
      addContact(finalData);
    }
    setRefetchData((val) => !val);


    CloseForm();
  };

  return (
    <div className="absolute w-6/12  bg-[#e7e7e7] z-10 top-[0%] left-1/2 transform -translate-x-1/2 border border-1 p-10">
      <div className=" absolute right-2 top-2" onClick={() => CloseForm()}>
        <CloseIcon />
      </div>
      <div className=" flex w-full justify-center items-center pb-2 roboto-medium">
        {mode === "edit" ? "Update Contact Details" : "Add Contact Details"}
      </div>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            size="small"
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            size="small"
            required
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          size="small"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="number"
            size="small"
            variant="outlined"
            color="secondary"
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            sx={{
              mb: 4,
              width: "48%",
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              "& input[type='number']": {
                MozAppearance: "textfield",
              },
            }}
          />
          <TextField
            type="text"
            variant="outlined"
            size="small"
            color="secondary"
            label="Company"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            fullWidth
            required
            sx={{
              mb: 4,
              width: "48%",
            }}
          />
        </Stack>

        <TextField
          type="text"
          variant="outlined"
          size="small"
          color="secondary"
          onChange={(e) => setJobTitle(e.target.value)}
          value={jobTitle}
          label="Job Title"
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <div className=" flex justify-center">
          <Button variant="outlined" color="secondary" type="submit">
            {mode === "edit" ? "Update" : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
