import {Component} from "react";
// @ts-ignore
import image from "../../../image/ai1.jpg";

export class FullViewBlog extends Component {
    render() {
        return (
            <div className="min-h-full flex flex-col justify-center px-6 py-8 border-black border-2
            rounded-md mt-5 ml-5 mr-5 mb-0 ">
                {/*test Full view */}

                <div className="mx-auto">
                    <br/>
                        <h1 className="text-2xl font-bold">The top AI tools for designers in 2024</h1>
                    <br/>
                    <div className="flex adl:flex-row justify-evenly dddl:flex-col">
                        <h1 className=" place-self-center text-gray-500  px-3 py-1.5 ">11:03:14</h1>
                        <h1 className=" place-self-center text-gray-500  px-3 py-1.5 adl:ml-16">2023-01-01</h1>
                    </div>
                    <br/>
                    <div className="flex adl:flex-row justify-evenly dddl:flex-col">
                    <button className=" place-self-center rounded-md bg-black px-3 py-1.5
                             text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90"
                            type="button">Edit this Post
                    </button>
                        <br/>
                    <button className="place-self-center rounded-md bg-black px-3 py-1.5
                             text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90"
                            type="button">Remove Post
                    </button>
                    </div>
                    <br/>
                </div>

                    <div className= "w-full flex justify-center">
                        <br/>
                        <img className="image-image shadow-lg shadow-black " src={image} alt="image"/>
                    </div>


                    <div className="w-full md:w-auto lg:pl-5 place-self-center ">
                        <br/>
                        <p>The top AI tools for designers in 2024. These tools can enhance the design process,
                            improve productivity, and offer unique features. Companies like Adobe, Figma,
                            and User Testing are experimenting with AI in their design offerings.
                            The top AI tools for designers in 2024.
                        </p>
                    </div>
            </div>

        );
    }
}
