import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Login} from "../../pages/Login/Login";
import {CreateAccount} from "../../pages/CreateAccount/CreateAccount";

export class Main extends Component {
    render() {
        return (
            <div className="mx-auto">
            <Routes>
             <Route path="/" Component={Home}></Route>
            <Route path="/Login" Component={Login}></Route>
            <Route path="/CreateAccount" Component={CreateAccount}></Route>
            </Routes>
            </div>
        );
    }
}

