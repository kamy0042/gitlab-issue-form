import { FC } from "react";
import { Form } from "~/components/Form";
import { RadioInputProps } from "~/components/RadioInput";
import { TextInputProps } from "~/components/TextInput";
import { CheckInputProps } from "~/components/CheckInput";
import { useFormState } from "~/container/formContainer/useFormState";

type FormState = (
    | (RadioInputProps & { value: string })
    | (TextInputProps & { value: string })
    | (CheckInputProps & { value: string })
)[];

export const FormConteiner: FC = () => {
    const { formState, handleChange } = useFormState();

    const submitState = () => {
        const token = "your token";
        const url = `https://gitlab.com/api/v4/projects/:id/issues?private_token=${token}`;
        const method = "POST";
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        const [title, ...contents] = formState;
        const renderIssueContents = (_contents: FormState) =>
            _contents
                .map((item) => `### ${item.label ? item.label : item.name}\n\`\`\` \n${item.value}\n\`\`\` \n`)
                .join("");

        const body = JSON.stringify({
            title: title.value,
            description: renderIssueContents(contents),
        });

        fetch(url, { method, headers, body })
            .then((res) => res.json())
            .then(console.log)
            .catch(console.error);
    };

    return <Form state={formState} handleChange={handleChange} handleClick={submitState} />;
};
