import {Component} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReadme} from "@fortawesome/free-brands-svg-icons";

interface PublishProps {
    data: any
}

export class Publish extends Component<PublishProps> {

    render() {

        const {data} = this.props;
        const image = require('../../../image/' + data.image)

        return (
            <div className=" flex flex-col lg:flex lg:flex-row mb-5 ">

                <div className= "w-full flex justify-center">
                    <br/>
                    <img className="image-image shadow-lg shadow-black " src={image} alt="image"/>

                    <button className="absolute self-center flex flex-row rounded-md bg-black px-3 py-1.5
                                 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90 more-btn
                                    animate-bounce dddl:block ddl:hidden" type="button">
                        <Link to="/FullViewBlog">Read More</Link>
                        <FontAwesomeIcon className="ml-2 my-auto" icon={faReadme} />
                    </button>

                </div>

                <div className="w-full md:w-auto lg:pl-5  dddl:hidden ddl:block">
                    <br/>
                    <div className="flex flex-row">
                        <h1 className="text-2xl font-bold">{data.title}</h1>
                        <button className="ml-auto flex flex-row rounded-md bg-black px-3 py-1.5
                             text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/90" type="button">
                            <Link to="/FullViewBlog">Read More</Link>
                            <FontAwesomeIcon className="ml-2 my-auto" icon={faReadme} />
                        </button>
                    </div>
                    <br/>
                    <div className="flex flex-row">
                        <h1 className="font-bold">{data.writer}</h1>
                        <h1 className="text-gray-500 ml-10">{data.time}</h1>
                        <h1 className="text-gray-500 ml-10">{data.date}</h1>
                    </div>
                    <br/>
                    <p>{data.description}</p>
                </div>

            </div>
        );
    }
}