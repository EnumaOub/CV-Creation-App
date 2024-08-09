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
    const [dataShow, setDataShow] = useState({...data});
    const headers = Object.keys(dataShow);


    function addElem(e) {
        const cle = e.target.parentElement.className;
        
        setDataShow({
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
                let cle = input.className;
                if (cle.includes("-")){
                    const i = parseInt(cle.split("-")[1])
                    cle = cle.split("-")[0]
                    dataShow[cle][i] = input.value;
                }
                else {
                    dataShow[cle] = input.value;
                }
            }
            
          });

        callback(dataShow, loc, name);
        if (reset !== null) {
            reset();
        }
        
    }

    
    return (
        <form className={"form "+label} onSubmit={SubmitChange}>
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