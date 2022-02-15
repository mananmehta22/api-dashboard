import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://studio.apollographql.com/sandbox/explorer',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <NavBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
    </ApolloProvider>
  );
}

export default App;
