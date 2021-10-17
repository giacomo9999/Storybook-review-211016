import Hello, { IsLoading } from "../src/components/Hello";

function App() {
  return (
    <div className="container-outer">
      <Hello name="Jim G" />
      <IsLoading condition={true} />
    </div>
  );
}

export default App;
