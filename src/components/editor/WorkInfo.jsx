import Input from "./Input"
import ShowData from "./ShowData";

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
    
    function changeInfo(e, work, name, loc) {
        
        data["work"][loc] = {
            ...work,
            [name]: e.target.value
        };

        setData({
            ...data,
            work: [
                ...data["work"]
            ]
        })
    }
    console.log( data.work.map((elem, i) => 
        <div key={i}>{
            headers.map((cle) => 
                <Input
                label={cle}
            key={cle}
            name={cle}
            data={elem[cle]}
            callback={(changeInfo)}
            type="text"
            >
            
            </Input>
            )
        }</div>
    )
)
    
    return ( 
        <>
        {data.work.map((elem, i) => 
        <div key={i}>{
            headers.map((cle) => 
                <Input
                label={cle}
            key={cle}
            name={cle}
            data={elem}
            callback={changeInfo}
            type="text"
            loc={i}
            >
            
            </Input>
            )
        }</div>
    )}

    <ShowData
        label="work"
        data={data.work}
    
    ></ShowData>
    </>
)

}