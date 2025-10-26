import { QueryProvider } from "./context/QueryClientProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}

export default App;
