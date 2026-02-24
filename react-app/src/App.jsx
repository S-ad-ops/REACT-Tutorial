import Student from "./Student";
function App() {
  return (
    <>
      <Student name="Alice" age ={20} isStudent={true}/>
      <Student name="Patrik" age ={22} isStudent={false}/>
      <Student name="Bob" age ={19} isStudent={true}/>
      <Student name="Eve" age ={21} isStudent={false}/>
      <Student name= "Charlie" />
    </>
  );
}

export default App
