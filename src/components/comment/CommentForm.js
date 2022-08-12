import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("تمام فیلد ها رو پر کن", {
        position: "top-center",
      });
    }
  };

  if (data && pressed) {
    toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
      position: "top-center",
    });
    setPressed(false);
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="#757575">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2} display="flex" flexDirection="column">
        <label style={{ color: "gray", margin: "7px" }}>نام کاربری</label>
        <input
          type="text"
          style={{
            outline: "none",
            padding: "20px",
            border: "0.8px solid gray",
            borderRadius: "5px",
            fontFamily: "yekanbakh",
            fontSize: "16px",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
      </Grid>
      <Grid item xs={12} m={2} display="flex" flexDirection="column">
        <label style={{ color: "gray", margin: "7px" }}>ایمیل</label>
        <input
          type="email"
          style={{
            outline: "none",
            padding: "20px",
            border: "0.8px solid gray",
            borderRadius: "5px",
            fontFamily: "yekanbakh",
            fontSize: "16px",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
      </Grid>
      <Grid item xs={12} m={2} display="flex" flexDirection="column">
        <label style={{ color: "gray", margin: "7px" }}>متن کامنت</label>
        <textarea
          style={{
            outline: "none",
            padding: "35px",
            border: "0.8px solid gray",
            borderRadius: "5px",
            fontFamily: "yekanbakh",
            fontSize: "16px",
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        /> */}
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال ...
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={sendHandler}
            style={{ backgroundColor: "#757575", width: "100px" }}
          >
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
