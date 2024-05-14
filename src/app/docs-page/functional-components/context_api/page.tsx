import { NewContextProvider } from "./components/NewContextProvider";
import SampleButton from "./components/SampleButton";

const ContextApi = () => {
  return (
    <NewContextProvider>
      <SampleButton />
    </NewContextProvider>
  );
};

export default ContextApi;
