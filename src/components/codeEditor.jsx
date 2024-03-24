import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import Output from "./output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Box>
      <HStack>
        <Box w="50%" marginBottom="-95px">
          <Editor
            height="75vh"
            
            theme="vs-dark"
            defaultLanguage="python"
            defaultValue=" # some comment"
            value={value}
            onMount={onMount}
            onChange={(value, event) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language="python"/>
      </HStack>
    </Box>
  );
};

export default CodeEditor;
