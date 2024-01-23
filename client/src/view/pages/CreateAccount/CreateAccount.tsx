import {Component} from "react";
import {Link} from "react-router-dom";

export class CreateAccount extends Component {
    render() {
        return (
            <div className="flex min-h-full flex-col justify-center px-6 py-8 border-black border-2 rounded-md mt-5 ml-5 mr-5 mb-0 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9
                         text-black">Create New Account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold leading-6 text-black">Email</label>
                            <div className="mt-2">
                                <input className="block w-full rounded-md border-2 border-black py-1.5 text-black shadow-lg shadow-black
                                placeholder:text-gray-40 sm:text-sm sm:leading-6" type="email" required/>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold leading-6 text-black">Name</label>
                            <div className="mt-2">
                                <input className="block w-full rounded-md border-2 border-black py-1.5 text-black shadow-lg shadow-black
                                placeholder:text-gray-40 sm:text-sm sm:leading-6" type="text" required/>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold leading-6 text-black">Username</label>
                            <div className="mt-2">
                                <input className="block w-full rounded-md border-2 border-black py-1.5 text-black shadow-lg shadow-black
                                placeholder:text-gray-40 sm:text-sm sm:leading-6" type="text" required/>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold leading-6 text-black">Password</label>
                            <div className="mt-2">
                                <input className="block w-full rounded-md border-2 border-black py-1.5 text-black shadow-lg shadow-black
                                placeholder:text-gray-40 sm:text-sm sm:leading-6" type="password" required/>
                            </div>
                        </div>

                        <div>
                            <button className="flex w-32 mt-10 mx-auto justify-center rounded-md bg-black px-3 py-1.5
                             text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90" type="button">Submit
                            </button>
                        </div>
                    </form>

                    <h1 className="mt-5 font-bold text-center text-sm text-black">Or</h1>
                    <h1 className=" mt-3 font-bold text-center text-sm text-black hover:cursor-pointer">
                        <Link to="/Login">Have an account? Login.</Link>
                    </h1>
                </div>
            </div>
        );
    }
}