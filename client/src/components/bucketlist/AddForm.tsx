import { Box, TextField } from "@mui/material";
import { useState } from "react";

export const AddForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        completed: false,
        expectedDate: "",
    });

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="outlined-required"
                label="Title"
                defaultValue=""
            />
            <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="outlined-search"
                label="Search field"
                type="search"
            />
            <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
            />
        </Box>
    );
};
