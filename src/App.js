import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/elements/Navbar';
import Contacts from './components/contacts/Contacts';
import { Provider } from "react-redux";
import store from './store';
import AddContact from "./components/contacts/AddContact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditContact from './components/contacts/EditContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/add" component={AddContact} />
                <Route exact path="/edit/:id" component={EditContact} />
              </Switch>
            </div>
          </div>
        </div >
      </Router>
    </Provider>
  );
}

export default App;
