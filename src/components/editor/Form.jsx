import { useState } from 'react'
export default function Form({ 
    label,
    name,
    data,
    reset,
    callback,
    type,
    loc=0
 }) {
    const [dataShow, setData] = useState(data);
    const idName = `${name}-editor`;
    const headers = Object.keys(dataShow);
    console.log("dataShow")
    console.log(dataShow)


    function addElem(e) {
        const cle = e.target.parentElement.className;
        
        setData({
            ...dataShow,
            [cle]: [
                ...dataShow[cle],
                ""
            ]

        });
    }

    function SubmitChange(e) {
        e.preventDefault();
        Array.from(e.target.elements).forEach((input) => {
            if (input.type ==="text") {
                console.log(input.className);
                let cle = input.className
                if (cle.includes("-")){
                    const i = parseInt(cle.split("-")[1])
                    cle = cle.split("-")[0]
                    data[cle][i] = input.value;
                }
                else {
                    data[cle] = input.value;
                }
            }
            
          });

        callback(data, loc, name);
        reset();
    }

    
    return (
        <form className={"form-"+label} onSubmit={SubmitChange}>
            {
                headers.map((cle) => 
                    (Array.isArray(dataShow[cle])) ? 
                    (
                        <div className={cle} key={cle} >
                            {
                            dataShow[cle].map((elem, i) => 
                                <label key={elem}>
                                        {cle}
                                        <input 
                                            defaultValue={elem}
                                            className={cle+"-"+i}
                                            type="text"
                                            />
                                </label>
                                )
                            }
                            <button type="button" onClick={addElem}>Add</button>
                        </div>
                    ) :

                    (
                        <label key={cle}>
                            {cle}
                            <input 
                                defaultValue={dataShow[cle]}
                                className={cle}
                                type="text"
                                />
                        </label>

                    )
                    
                )
            }
            <input id={"submit-"+label} type="submit" value="Submit" />
        </form>

        
    )
    
    
}