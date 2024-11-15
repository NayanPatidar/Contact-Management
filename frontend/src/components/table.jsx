import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteContact } from "../api/tableContent";
import RegisterForm from "./contactForm";

const ContactTable = ({ data, setRefetchData }) => {
  const [currentContact, setCurrentContact] = useState("");
  const [OpenForm, setOpenForm] = useState(false);

  const DeleteContacts = async (id) => {
    await DeleteContact(id);
    setRefetchData((val) => !val);
  };

  return (
    <TableContainer component={Paper} className=" w-full">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>First Name</strong>
            </TableCell>
            <TableCell>
              <strong>Last Name</strong>
            </TableCell>
            <TableCell>
              <strong>Email</strong>
            </TableCell>
            <TableCell>
              <strong>Phone</strong>
            </TableCell>
            <TableCell>
              <strong>Company</strong>
            </TableCell>
            <TableCell>
              <strong>Job Title</strong>
            </TableCell>
            <TableCell>Updates</TableCell>
          </TableRow>
        </TableHead>
        {data && data.length > 0 ? (
          <TableBody>
            {data.map((contact) => (
              <TableRow key={contact._id || contact.email}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.job_title}</TableCell>
                <TableCell>
                  <div className=" flex gap-2">
                    <DeleteIcon onClick={() => DeleteContacts(contact._id)} />
                    <EditIcon
                      onClick={() => {
                        setOpenForm(true), setCurrentContact(contact);
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={7}
                style={{ textAlign: "center", padding: "20px" }}
              >
                No contacts!!
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
      {OpenForm ? (
        <RegisterForm
          setOpenForm={setOpenForm}
          mode={"edit"}
          data={currentContact}
          setRefetchData={setRefetchData}
        />
      ) : (
        ""
      )}
    </TableContainer>
  );
};

export default ContactTable;
