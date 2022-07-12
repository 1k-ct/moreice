import * as React from "react";
import Title from "./Title";
import { Box, TextField } from "@mui/material";

export default function Content() {
    const [valueContent, setValueContent] = React.useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueContent(event.target.value);
    };


    return (
        <React.Fragment>
            <Title>Decrypt the ciphertext.</Title>
            <Title>bcfgjklmnprsuxz</Title >
            <Box>
                <TextField value={valueContent} onChange={handleChange}
                    id="standard-basic" label="answer" variant="standard" fullWidth
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            setValueContent(valueContent);
                            if (valueContent === 'abcdefghijklmnopqrstuvwxyz') {
                                alert("correct")
                            }
                        }
                    }}
                />
            </Box>
        </React.Fragment>
    );
}
