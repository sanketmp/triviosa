import Quiz from "./components/Quiz/Quiz";
import { DUMMY_QUESTIONS } from "./components/Quiz/questions";

function App() {
  // const [questions, setQuestions] = useState([]);
  // const [queIndex, setQueIndex] = useState(1);

  // let component;

  // if (questions.length && queIndex + 1 <= questions.length) {
  //   component = <Question />;
  // } else if (!questions.length) {
  //   component = <Settings />;
  // } else {
  //   component = <FinalScreen />;
  // }

  return (
    <>
      {/* <Home />
      <Start /> 
      <Question />*/}

      <Quiz questions={DUMMY_QUESTIONS.questions} />
    </>
  );
}

export default App;
