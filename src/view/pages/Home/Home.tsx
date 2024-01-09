import {Component} from "react";
import image from "../../../image/ai1.jpg";

export class Home extends Component {
    render() {
        return (
            <div>
               {/*test blog 01*/}
            <div className="w-[1000px] mx-auto flex justify-column">

                <div className=" w-23 h-26">
                    <br/>
                <img src={image} alt="image"/>
                </div>
                <div className=" w-23 h-26 ml-14">
                    <br/>
                <h1 className="text-2xl font-bold">The top AI tools for designers in 2024</h1>
                    <br/>
                <div className="flex justify-column ">
                    <h1 className="font-bold">test</h1>
                    <h1 className="text-gray-500 ml-10">11:03:14</h1>
                    <h1 className="text-gray-500 ml-10">2023-01-01</h1>
                </div>
                    <br/>
                <p>The top AI tools for designers in 2024. These tools can enhance the design process,<br/>
                    improve productivity, and offer unique features. Companies like Adobe, Figma,<br/>
                    and User Testing are experimenting with AI in their design offerings.
                </p>
                </div>

            </div>

                {/*test blog 02*/}
                <div className="w-[1000px] mx-auto flex justify-column">

                    <div className=" w-23 h-26">
                        <br/>
                        <img src={image} alt="image"/>
                    </div>
                    <div className=" w-23 h-26 ml-14">
                        <br/>
                        <h1 className="text-2xl font-bold">The top AI tools for designers in 2024</h1>
                        <br/>
                        <div className="flex justify-column ">
                            <h1 className="font-bold">test</h1>
                            <h1 className="text-gray-500 ml-10">11:03:14</h1>
                            <h1 className="text-gray-500 ml-10">2023-01-01</h1>
                        </div>
                        <br/>
                        <p>The top AI tools for designers in 2024. These tools can enhance the design process,<br/>
                            improve productivity, and offer unique features. Companies like Adobe, Figma,<br/>
                            and User Testing are experimenting with AI in their design offerings.
                        </p>
                    </div>

                </div>

                {/*test blog 03*/}
                <div className="w-[1000px] mx-auto flex justify-column">

                    <div className=" w-23 h-26">
                        <br/>
                        <img src={image} alt="image"/>
                    </div>
                    <div className=" w-23 h-26 ml-14">
                        <br/>
                        <h1 className="text-2xl font-bold">The top AI tools for designers in 2024</h1>
                        <br/>
                        <div className="flex justify-column ">
                            <h1 className="font-bold">test</h1>
                            <h1 className="text-gray-500 ml-10">11:03:14</h1>
                            <h1 className="text-gray-500 ml-10">2023-01-01</h1>
                        </div>
                        <br/>
                        <p>The top AI tools for designers in 2024. These tools can enhance the design process,<br/>
                            improve productivity, and offer unique features. Companies like Adobe, Figma,<br/>
                            and User Testing are experimenting with AI in their design offerings.
                        </p>
                    </div>

                </div>

            </div>

        );
    }
}