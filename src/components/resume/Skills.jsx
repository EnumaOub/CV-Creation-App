import PropTypes from 'prop-types'

export default function Skills({ info }){
    console.log("Skills")
    return (
        <>
            {info.language.length > 0 ? (
                <div id="language">
                <p>Language: </p>
                {info.language.map((lang,iter) => 
                        <p key={iter}>{lang}, </p>
                )}
                </div>
            ) : (
                <div />
            )}
            {info.technologies.length > 0 ? (
                <div id="language">
                <p>Technologies: </p>
                {info.technologies.map((tech,iter) => 
                        <p key={iter}>{tech}, </p>
                )}
                </div>
            ) : (
                <div />
            )}
        </>
    )
}

Skills.PropTypes = {
    info: PropTypes.objectOf(
        PropTypes.arrayOf(
            PropTypes.string
        )
    ).isRequired
};