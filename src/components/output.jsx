import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const Output = (editorRef, language) => {
  const [submission, setSubmission] = useState("");
  const [token, setToken] = useState(null);

  const runCode = async () => {
    const sourceCode = editorRef.editorRef.current.getValue();
    if (!sourceCode) return;

    // submitting code
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const PAYLOAD = JSON.stringify({
      source_code: sourceCode,
      language_id: "71",
      stdin: "Judge0",
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: PAYLOAD,
    };
    await fetch("http://127.0.0.1:2358/submissions/", requestOptions)
      .then((response) => response.json())
      .then((data) => setToken(data?.token))
      .catch((error) => console.error(error));

    if (!token) {
      throw new Error("Code submission did not work!");
    }

    // execution resutls
    await fetch(
      `http://127.0.0.1:2358/submissions/${token}?base64_encoded=false&fields=stdout,stderr,status_id,language_id`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => setSubmission(data?.stdout))
      .catch((error) => console.error(error));

    if (!submission) {
      throw new Error("Code execution response did not return!");
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button variant="outline" colorScheme="green" mb={4} onClick={runCode}>
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        {submission}
      </Box>
    </Box>
  );
};
export default Output;
