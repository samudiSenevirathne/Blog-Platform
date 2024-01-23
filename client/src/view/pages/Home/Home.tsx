import {Component} from "react";
import {Publish} from "../../common/Publish/Publish";

export class Home extends Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData()
            .then(r => console.log("data fetch completed!"+r));
    }

    fetchData = async ()=> {
        try {
            const response = await fetch('./publish-data.json');
            const jsonData = await response.json();
            this.setState({data: jsonData});
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }


    render() {

        // @ts-ignore
        const {data} = this.state;

        return (
            <div className="min-h-full flex flex-col justify-center px-6 py-8 border-black border-2 rounded-md mt-5 ml-5 mr-5 mb-0 ">

                {
                    data.map((publish: any) => (
                        <Publish key={publish.id} data={publish}/>
                    ))
                }

            </div>

        );
    }
}





