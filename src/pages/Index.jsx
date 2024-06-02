import { useState } from "react";
import { Container, VStack, Text, Input, Button, Textarea, IconButton, useToast, Box } from "@chakra-ui/react";
import { FaMicrophone, FaStop } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleRecord = () => {
    setIsRecording(true);
    toast({
      title: "Recording started.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
    // Add logic to start recording audio
  };

  const handleStop = () => {
    setIsRecording(false);
    toast({
      title: "Recording stopped.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
    // Add logic to stop recording and process audio to text
    setTranscript("This is a sample transcript of the recorded audio."); // Placeholder for actual transcript
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "File uploaded.",
        description: `You have uploaded ${file.name}.`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Audio to Text Converter
        </Text>
        <Text>Click the button below to start recording your audio.</Text>
        <IconButton aria-label={isRecording ? "Stop Recording" : "Start Recording"} icon={isRecording ? <FaStop /> : <FaMicrophone />} size="lg" colorScheme={isRecording ? "red" : "green"} onClick={isRecording ? handleStop : handleRecord} />
        <Box width="100%">
          <Input type="file" accept="audio/*" onChange={handleFileUpload} />
          {uploadedFile && <Text mt={2}>Uploaded file: {uploadedFile.name}</Text>}
        </Box>
        <Textarea value={transcript} placeholder="Your transcript will appear here..." readOnly height="200px" />
      </VStack>
    </Container>
  );
};

export default Index;
