import "./Error.css";


const NotFound = () => {
    return (
        <>
            <div className="errorContainer genericFont">
                <p style={{fontSize: '300px', margin: '0', padding:'0', paddingBottom: '24px'}}>{':('}</p>
                Your WebAPP ran into a problem and needs to restart. 
                We're just cleaning up some things, so the service will be up shortly:
                <h1>404 PATH NOT FOUND</h1>
            </div>
        </>
    )
}

export default NotFound;