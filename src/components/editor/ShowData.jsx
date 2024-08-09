import { useState } from 'react'
import Form from "./Form";

function ShowWorkEduc(
    label,
    data,
    callback,
    emptyData) {
    const [pos, setPos] = useState(null);


    function getPos(e) {
        console.log(e.target.classList);
        setPos(parseInt(e.target.id.split("-")[1]));
    }
    function deleteByPos(e) {
        const loc = parseInt(e.target.id.split("-")[1]);
        if  (loc>0) {
            setPos(null);
            callback(emptyData, loc, label, true)
        }
        
    }
    function resetShow() {
        setPos(null);
    }

    function addElem() {
        setPos(data.length);
        callback(emptyData, data.length, label)
    }

    const classGen = "data-show "+label;
    const headers = Object.keys(data[0]);
    if (pos === null) {
            return ( 
                <>
                <div className='show-data-glob'>{
                    data.map((elem, i) => 
                        <div className={classGen} key={i+elem}>{
                            headers.map((cle) => 
                                <div className={"data-res "+cle} id={cle+"-"+i} key={cle+i}>{Array.isArray(elem[cle])? (
                                    <ul>
                                        {elem[cle].map((item,i) => 
                                        <li key={i+cle}>{item}</li>
                                        )}
                                    </ul>
                                ):(
                                    elem[cle]
                                )}
                            
                            </div>
                            
                            )
                        }
                        <button className='btn edit' id={label+"_edit-"+i}  onClick={getPos}>EDIT</button>
                        <button className='btn delete' id={label+"_delete-"+i}  onClick={deleteByPos}>DELETE</button>
                        </div>
                    )
                    }
                    
                </div>
                <button type="button" onClick={addElem}>Add</button>
                </>
            )
    }
    else {
        return (
                    <Form
                        key={label}
                        label={label}
                        name={label}
                        data={data[pos]}
                        reset={resetShow}
                        callback={callback}
                        type="text"
                        loc={pos}
                    >
                    
                    </Form>

        )
    }
    
}

function ShowTask(
    label,
    data,
    callback) {

        return (
            <Form
                key={label}
                label={label}
                name={label}
                data={data}
                reset={null}
                callback={callback}
                type="text"
                loc={0}
            >
            
            </Form>

        )
    
    
}


export default function ShowData({ 
    label,
    data,
    callback,
    emptyData
 }) {

    

    return Array.isArray(data) ? ShowWorkEduc(label, data, callback, emptyData) : ShowTask(label, data, callback);
    
 }