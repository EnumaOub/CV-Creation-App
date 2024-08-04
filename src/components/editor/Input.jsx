export default function Input({ 
    name,
    data,
    callback=null,
    type
 }) {
    const idName = `${name}-editor`
    console.log("Inputs")
    console.log(name)
    console.log(data)
    console.log(data[name])
    if (callback === null) {
        return (
            <label id={idName}>
                    {name}
                    <input value={data[name]}
                        type={type}
                        />
            </label>
        )
    }
    else {
        return (
            <label id={idName}>
                    {name}
                    <input value={data[name]}
                        onChange={callback}
                        type={type}
                        />
            </label>
        )
    }
    
}