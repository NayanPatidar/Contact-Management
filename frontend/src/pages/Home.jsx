import { useEffect, useState } from "react";
import ContactTable from "../components/table";
import { FetchTableContent } from "../api/tableContent";
import RegisterForm from "../components/contactForm";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Button } from "@mui/material";

const Home = () => {
  const [contacts, setContacts] = useState("");
  const [refetchData, setRefetchData] = useState(false);
  const [OpenForm, setOpenForm] = useState(false);
  const [totalContacts, setTotalContacts] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const FetchData = async () => {
    const data = await FetchTableContent(page, pageSize);

    setContacts(data.contacts);

    setTotalContacts(data.totalContacts);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    FetchData();
  }, [refetchData, OpenForm, page]);

  return (
    <div className="p-4 relative">
      <div className=" flex justify-end mr-5 mb-5 items-center gap-5">
        <Button
          style={{ color: "black" }} 
          className="p-1 rounded-full hover:bg-slate-100 border border-black"
          onClick={() => setRefetchData((prevVal) => !prevVal)}
        >
          <RefreshIcon />
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
          onClick={() => setOpenForm(true)}
        >
          Add Contact
        </Button>
      </div>
      <ContactTable data={contacts} setRefetchData={setRefetchData} />

      <div className="flex justify-center mt-4 items-center">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="mx-4 roboto-medium">Page {page}</span>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handlePageChange(page + 1)}
          disabled={contacts.length < pageSize || totalContacts <= pageSize}
        >
          Next
        </Button>
      </div>

      {OpenForm ? (
        <RegisterForm
          setOpenForm={setOpenForm}
          mode={"add"}
          setRefetchData={setRefetchData}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
