import {Component} from "react";

export class CreateBlog extends Component {
    render() {
        return (
            <div className="flex min-h-full flex-col justify-center px-6 py-8 border-black border-2 rounded-md
             mt-5 ml-5 mr-5 mb-0 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9
                      text-black">Create New Post</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">

                        <div>
                            <label className="block text-sm font-bold leading-6 text-black">Title</label>
                            <div className="mt-2">
                                <input className="block w-full rounded-md border-2 border-black py-1.5 text-black
                                shadow-md shadow-black placeholder:text-gray-40 sm:text-sm sm:leading-6"
                                       type="text" required/>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-bold leading-6 text-black">Cover photo</label>
                            <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-black
                               px-6 py-10">
                                    <div className="flex flex-col mt-4 flex text-sm leading-6 mt-0">
                                        <div className="flex adl:flex-row flex-col">
                                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md
                                        bg-white font-bold text-black hover:text-white hover:bg-black hover:px-2
                                        hover:border-2 hover:border-black place-self-center">Upload a file</label>
                                            <input id="file-upload" type="file" className="sr-only" />
                                            <h5 className="pl-1 place-self-center">or</h5>
                                        <p className="pl-1 place-self-center">drag and drop</p>
                                        </div>
                                    <p className="text-xs leading-5 text-black place-self-center">
                                        PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold leading-6 text-black">Description</label>
                            <div className="mt-2">
                                <textarea className="block w-full rounded-md border-2 border-black py-1.5 text-black
                                shadow-md shadow-black placeholder:text-gray-40 sm:text-sm sm:leading-6"
                                          required/>
                            </div>
                        </div>

                        <div>
                            <button className="flex w-32 mt-10 mx-auto justify-center rounded-md bg-black px-3 py-1.5
                             text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90"
                                    type="button">Post
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        );
    }
}
