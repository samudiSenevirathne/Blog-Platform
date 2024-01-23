import {Component} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export class Navbar extends Component {
    render() {
        return (
            <nav className="flex ddl:flex-row justify-between dddl:flex-col ">

              <div className="flex flex-row justify-between">
                   <h1 className=" text-black text-2xl font-bold ml-5">MyBlog</h1>

                    <button
                        className=" text-1xl text-white bg-black pl-4 pr-4 mr-5 hover:bg-black/70 font-bold
                        rounded-b-lg rounded-t-lg text-center mt-1 dddl:block ddl:hidden "
                        onClick={this.setBarOnClick} type="button">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
             </div>

                <ul className=" ddl:flex list-none mt-1 dddl:mx-5 dddl:flex-col ddl:flex-row dddl:hidden nav ">

                    <li className="mr-5 text-1xl text-black font-dancing cursor-pointer ">
                    <Link to="/">Home</Link>
                    </li>

                    <li className="mr-5 text-1xl text-black font-dancing cursor-pointer dddl:block ddl:hidden">
                        <Link to="/Login">SignIn</Link>
                    </li>

                    {/*for future below li*/}
                    <li className=" mr-5 text-1xl text-black font-dancing cursor-pointer ">
                        <Link to="/CreateBlog">Create New Post</Link>
                    </li>

                    <button
                        className="text-1xl text-white bg-black pl-4 pr-4 mr-5 hover:bg-black/70 font-bold
                        rounded-b-lg rounded-t-lg text-center ddl:block dddl:hidden ">
                        <Link to="/Login">SignIn</Link>
                    </button>

                    {/*for future below button*/}
                    {/*<button*/}
                    {/*    className="text-1xl text-white bg-black pl-4 pr-4 hover:bg-black/70 font-bold*/}
                    {/*    rounded-b-lg rounded-t-lg text-center ddl:block dddl:hidden ">*/}
                    {/*    <Link to="/Login">SignUp</Link>*/}
                    {/*</button>*/}

                    {/*for future below button*/}
                    {/*<li className=" text-1xl text-black font-dancing ">(Samudi)</li>*/}

                </ul>

            </nav>
        );
    }

    private setBarOnClick = () => {
        const navbars = document.querySelectorAll('.nav');
        //@ts-ignore
        for (const navbar of navbars) {
            navbar.classList.toggle('dddl:hidden');
        }
    }


}