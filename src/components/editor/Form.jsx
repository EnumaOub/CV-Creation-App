export default function Form({ 
    label,
    name,
    data,
    callback=null,
    type,
    loc=0
 }) {
    const idName = `${name}-editor`;
    const headers = Object.keys(data);
    

    
    return (

        headers.map((cle) => 
            (Array.isArray(data[cle])) ? 
            (
                data[cle].map((elem) => 
                    <label id={idName} key={elem}>
                            {cle}
                            <input defaultValue={elem}
                                type="text"
                                />
                    </label>
                    )
            ) :

            (
                <label key={cle} id={idName}>
                    {cle}
                    <input defaultValue={data[cle]}
                        type="text"
                        />
                </label>

            )
            
        )

        
    )
    
    
}