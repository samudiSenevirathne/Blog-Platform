import {Component} from "react";
import image from "../../../image/ai1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

export class Home extends Component {
    render() {
        return (
            <div className="min-h-full flex flex-col justify-center px-6 py-8 border-black border-2 rounded-md mt-5 ml-5 mr-5 mb-0 ">
               {/*test blog 01*/}
                <div className=" flex flex-col lg:flex lg:flex-row mb-5 ">

                    <div className= "w-full flex justify-center">
                        <br/>
                            <img className="image-image shadow-lg shadow-black " src={image} alt="image"/>

                            <button className="absolute self-center flex flex-row rounded-md bg-black px-3 py-1.5
                                 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90 more-btn
                                    animate-bounce dddl:block ddl:hidden" type="button">Read More
                                <FontAwesomeIcon className="ml-2 my-auto" icon={faReadme} />
                            </button>

                    </div>

                    <div className="w-full md:w-auto lg:pl-5  dddl:hidden ddl:block">
                        <br/>
                        <div className="flex flex-row">
                            <h1 className="text-2xl font-bold">The top AI tools for designers in 2024</h1>
                            <button className="ml-auto flex flex-row rounded-md bg-black px-3 py-1.5
                             text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90" type="button">Read More
                                <FontAwesomeIcon className="ml-2 my-auto" icon={faReadme} />
                            </button>
                        </div>
                        <br/>
                        <div className="flex flex-row">
                            <h1 className="font-bold">@test</h1>
                            <h1 className="text-gray-500 ml-10">11:03:14</h1>
                            <h1 className="text-gray-500 ml-10">2023-01-01</h1>
                        </div>
                        <br/>
                        <p>The top AI tools for designers in 2024. These tools can enhance the design process,
                            improve productivity, and offer unique features. Companies like Adobe, Figma,
                            and User Testing are experimenting with AI in their design offerings.
                            The top AI tools for designers in 2024.
                        </p>
                    </div>

                </div>



                {/*test blog 02*/}
                <div className=" flex flex-col lg:flex lg:flex-row mb-5 ">

                    <div className= "w-full flex justify-center">
                        <br/>
                        <img className="image-image shadow-lg shadow-black " src={image} alt="image"/>

                        <button className="absolute self-center flex flex-row rounded-md bg-black px-3 py-1.5
                                 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90 more-btn
                                    animate-bounce dddl:block ddl:hidden" type="button">Read More
                            <FontAwesomeIcon className="ml-2 my-auto" icon={faReadme} />
                        </button>

                    </div>

                    <div className="w-full md:w-auto lg:pl-5  dddl:hidden ddl:block">
                        <br/>
                        <div className="flex flex-row">
                            <h1 className="text-2xl font-bold">The top AI tools for designers in 2024</h1>
                            <button className="ml-auto flex flex-row rounded-md bg-black px-3 py-1.5
                             text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90" type="button">Read More
                                <FontAwesomeIcon className="ml-2 my-auto" icon={faReadme} />
                            </button>
                        </div>
                        <br/>
                        <div className="flex flex-row">
                            <h1 className="font-bold">@test</h1>
                            <h1 className="text-gray-500 ml-10">11:03:14</h1>
                            <h1 className="text-gray-500 ml-10">2023-01-01</h1>
                        </div>
                        <br/>
                        <p>The top AI tools for designers in 2024. These tools can enhance the design process,
                            improve productivity, and offer unique features. Companies like Adobe, Figma,
                            and User Testing are experimenting with AI in their design offerings.
                            The top AI tools for designers in 2024.
                        </p>
                    </div>

                </div>


            </div>

        );
    }
}





