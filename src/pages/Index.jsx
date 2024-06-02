import { useState } from "react";
import { Container, VStack, Text, Input, Button, Textarea, IconButton, useToast } from "@chakra-ui/react";
import { FaMicrophone, FaStop } from "react-icons/fa";

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const toast = useToast();

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

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Audio to Text Converter
        </Text>
        <Text>Click the button below to start recording your audio.</Text>
        <IconButton aria-label={isRecording ? "Stop Recording" : "Start Recording"} icon={isRecording ? <FaStop /> : <FaMicrophone />} size="lg" colorScheme={isRecording ? "red" : "green"} onClick={isRecording ? handleStop : handleRecord} />
        <Textarea value={transcript} placeholder="Your transcript will appear here..." readOnly height="200px" />
      </VStack>
    </Container>
  );
};

export default Index;
