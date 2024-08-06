import Input from "./Input"

const convertKey = {
    firstName: "First Name",
    lastName: "Last Name",
    mail: "Mail Adress",
    address: "Adress",
    linkedin: "LinkedIn",
    github: "Github",
    summary: "Summary"
}

export default function Personal({data, setData}) {
    const headers = Object.keys(data.info);
    function changeInfo(e, info, name) {
        setData({
            ...data,
            info: {
                ...info,
                [name]: e.target.value
            }
        })
    }
    

    return (
        <>{
            headers.map((key) => 
                <Input
                label={convertKey[key]}
            key={key}
            name={key}
            data={data.info}
            callback={changeInfo}
            type="text"
            >
            
            </Input>
            )
        }</>
    )
}