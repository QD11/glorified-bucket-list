import { Box } from "components/styled/elements/box";
import { Form } from "components/styled/elements/form";
import { useState } from "react";

export const AddForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        completed: false,
        expectedDate: "",
    });

    return (
        <Box outline={"1px solid black"}>
            <Form>
                <label>
                    Title:
                    <input></input>
                </label>
                <label>
                    Description:
                    <input></input>
                </label>
                <label>
                    Date:
                    <input></input>
                </label>
            </Form>
        </Box>
    );
};
