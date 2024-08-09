import Input from "./Input"
import ShowData from "./ShowData";

const emptyData = {
    "title": "",
    "name": "",
    "date": "",
    "tasks": [
        ""
    ]
}

const convertKey = {
    firstName: "First Name",
    lastName: "Last Name",
    mail: "Mail Adress",
    address: "Adress",
    linkedin: "LinkedIn",
    github: "Github",
    summary: "Summary"
}

export default function Work({data, setData}) {
    const headers = Object.keys(data.work[0]);
    
    function changeInfo(work, loc) {
        
        data["work"][loc] = work;

        setData({
            ...data,
            work: [
                ...data["work"]
            ]
        })
    }
    
    return ( 

        <ShowData
            label="work"
            data={data.work}
            callback={changeInfo}
            emptyData={emptyData}
        >

        </ShowData>

    )

}