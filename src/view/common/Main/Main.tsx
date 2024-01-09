import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";

export class Main extends Component {
    render() {
        return (
            <div className="mx-auto">
            <Routes>
            <Route path="/" Component={Home}></Route>
            </Routes>
            </div>
        );
    }
}

