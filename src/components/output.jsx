import { Box, Button, Text } from "@chakra-ui/react";

const Output = (editorRef, language) => {

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {

        } catch (error) {
            
        }


    }

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button variant="outline" colorScheme="green" mb={4}>
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        test
      </Box>
    </Box>
  );
};
export default Output