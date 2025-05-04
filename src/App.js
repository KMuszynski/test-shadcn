import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, HStack } from "@chakra-ui/react";
import SideBar from "./components/sideBar/SideBar";
import MainView from "./components/mainView/MainView";

function App() {
  return (
    <ChakraProvider>
      <HStack spacing={0} height="100vh" align="start">
        <SideBar />
        <MainView />
      </HStack>
    </ChakraProvider>
  );
}

export default App;
