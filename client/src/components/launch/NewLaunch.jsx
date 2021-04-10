import React, { useState } from 'react';


const NewLaunch = () => {

    const [ flightNumber, setFlightNumber ] = useState(0);
    const [ missionName, setMissionName ] = useState("");
    const [ launchYear, setLaunchYear ] = useState(0);
    const [ launchDateLocal, setLaunchDateLocal ] = useState("");
    const [ launchSuccess, setLaunchSuccess ] = useState(false);

    const handleLaunch = event => {

        event.preventDefault();

        const newLaunch = {
            flightNumber,
            missionName,
            launchYear,
            launchDateLocal,
            launchSuccess
        }
        console.log(newLaunch);
    }
    return (
        <div className="d-flex justify-content-center text-center">
            <form onSubmit={handleLaunch}>
                <div className="form-group col-lg-12 mt-3">
                    <label className="my-1">Flight Number</label>
                    <input required type="number" className="form-control" placeholder="Flight Number" value={flightNumber} onChange={ e => { setFlightNumber(e.target.value)}}/>
                </div>
                <div className="form-group col-lg-12 mt-3">
                    <label className="my-1">Mission Name</label>
                    <input required type="text" className="form-control my-2" placeholder="Mission Name" value={missionName} onChange={e => { setMissionName(e.target.value)}}/>
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group col-lg-12 mt-3">
                    <label className="my-1">launch Year</label>
                    <input required type="number" className="form-control" placeholder="launch Year" value={launchYear} onChange={e => { setLaunchYear(e.target.value)}}/>
                </div>
                <div className="form-group col-lg-12 mt-3">
                    <label className="my-1">Launch date local</label>
                    <input required type="text" className="form-control" placeholder="Launch date local" value={launchDateLocal} onChange={e => { setLaunchDateLocal(e.target.value)}}/>
                </div>
                <div className="form-check mt-3">
                    <input required type="checkbox" className="form-check-input required" value={launchSuccess} onChange={e => { setLaunchSuccess(e.target.value)}}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Launch success</label>
                </div>
                <button type="submit" className="btn btn-primary col-lg-8 mt-5">Submit</button>
                </form>
        </div>
    )
}

export default NewLaunch
