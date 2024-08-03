import PropTypes from 'prop-types'

export default function Header({info}){
    console.log("Header")
    return (
        <>
            <div className="header main">
                <div className="loc">
                    <p>{info.address}</p>
                    <p>{info.mail}</p>
                </div>
                <h1>
                    {info.firstName} <span id='lastName'>{info.lastName.toUpperCase()}</span>
                </h1>
                <div className="links">
                    {info.linkedin ? (
                        <p id='linkedin'>{info.linkedin}</p>
                    ) : (
                        <div />
                    )}
                    {info.github ? (
                        <p id='github'>{info.github}</p>
                    ) : (
                        <div />
                    )}
                    
                </div>
            </div>
            <p id='summary'>{info.summary}</p>
        </>
    )
}

Header.PropTypes = {
    info: PropTypes.object
};