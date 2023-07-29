import "./Error.css";


const Error = ({error}) => {
    console.log(error)
    return (
        <>
            <div className="errorContainer genericFont">
                <p style={{fontSize: '300px', margin: '0', padding:'0', paddingBottom: '24px'}}>{':('}</p>
                Your WebAPP ran into a problem and needs to restart. 
                We're just cleaning up some things, so the service will be up shortly:
                <h2 className="errorh1">{error}</h2>
            </div>
        </>
    )
}

export default Error;