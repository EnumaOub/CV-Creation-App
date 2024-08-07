export default function Input({ 
    label,
    name,
    data,
    callback=null,
    type
 }) {
    const idName = `${name}-editor`;
    console.log("Input")
    console.log(data)
    console.log(name)
    if (Array.isArray(data[name])) {
        console.log(data[name])
        return (
            data[name].map((elem) => 
            <label id={idName} key={elem}>
                    {label}
                    <input value={elem}
                        onChange={(e) => callback(e, data, name)}
                        type={type}
                        />
            </label>
            )
        )
    }
    else {
        return (
            <label id={idName}>
                    {label}
                    <input value={data[name]}
                        onChange={(e) => callback(e, data, name)}
                        type={type}
                        />
            </label>
        )
    }
    
}