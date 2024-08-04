import Input from "./Input"

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