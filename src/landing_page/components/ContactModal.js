import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Form from "./Form/ModalForm"
const ContactModal = (props) => {
  const [open, setOpen] = useState(false);
  const { handleFormSubmitted } = props;
    useEffect(() => {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <Dialog open={open} onClose={handleClose}>
        <Form handleClose={handleClose} handleFormSubmitted={handleFormSubmitted}/>
      </Dialog>
    );
  };
  
  export default ContactModal;
  