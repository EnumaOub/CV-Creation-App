export default function Input({ 
    label,
    name,
    data,
    callback=null,
    type,
    loc=0
 }) {
    const idName = `${name}-editor`;

    if (Array.isArray(data[name])) {
        console.log(data[name])
        return (
            data[name].map((elem) => 
            <label id={idName} key={elem}>
                    {label}
                    <input value={elem}
                        onChange={(e) => callback(e, data, name, loc)}
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
                        onChange={(e) => callback(e, data, name, loc)}
                        type={type}
                        />
            </label>
        )
    }
    
}