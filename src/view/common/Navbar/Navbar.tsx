import {Component} from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="flex justify-between">
                  <h1 className="text-black text-2xl font-bold">MyBlog</h1>

                <ul className="flex list-none mt-1">
                    <li className="inline-block mr-5 text-1xl text-black cursor-pointer">
                    <Link to="/">Home</Link>
                    </li>

                    {/*for future below li*/}
                    {/*<li className="inline-block mr-5 text-1xl text-black cursor-pointer ">Create New Post</li>*/}
                    {/*<li className="inline-block  text-1xl text-black ">(Samudi)</li>*/}

                    {/*for future below button*/}
                    {/*<button*/}
                    {/*    className="text-1xl text-white bg-black pl-4 pr-4 mr-5 hover:bg-black/70 font-bold rounded-b-lg rounded-t-lg text-center">SignIn*/}
                    {/*</button>*/}

                    <button
                        className="text-1xl text-white bg-black pl-4 pr-4 mr-5 hover:bg-black/70 font-bold rounded-b-lg rounded-t-lg text-center">
                        <Link to="/Login">SignIn</Link>
                    </button>

                </ul>


            </div>
        );
    }
}