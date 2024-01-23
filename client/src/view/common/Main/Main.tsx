import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Login} from "../../pages/Login/Login";
import {CreateAccount} from "../../pages/CreateAccount/CreateAccount";
import {FullViewBlog} from "../../pages/FullViewBlog/FullViewBlog";
import {CreateBlog} from "../../pages/CreateBlog/CreateBlog";

export class Main extends Component {
    render() {
        return (
            <div className="mx-auto">
            <Routes>
             <Route path="/" Component={Home}></Route>
            <Route path="/Login" Component={Login}></Route>
            <Route path="/CreateAccount" Component={CreateAccount}></Route>
            <Route path="/FullViewBlog" Component={FullViewBlog}></Route>
            <Route path="/CreateBlog" Component={CreateBlog}></Route>
            </Routes>
            </div>
        );
    }
}

