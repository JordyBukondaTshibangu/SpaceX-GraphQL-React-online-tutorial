import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LAUNCH } from '../../GraphQL/Mutations';


const NewLaunch = () => {

    const [ flightNumber, setFlightNumber ] = useState(0);
    const [ missionName, setMissionName ] = useState("");
    const [ launchYear, setLaunchYear ] = useState(0);
    const [ launch_date_local, setLaunch_date_local ] = useState("");
    const [ launchSuccess, setLaunchSuccess ] = useState(false);

    const [createLaunch, { data }] = useMutation(ADD_LAUNCH);

    const handleLaunch = event => {

        event.preventDefault();

        const flight_number = parseInt(flightNumber);
        const launch_year = parseInt(launchYear);
        const launch_success = false;

        createLaunch({ variables : { 
            flight_number,
            mission_name : missionName,
            launch_year,
            launch_date_local,
            launch_success
        }})

        console.log(data);
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
                    <input required type="text" className="form-control" placeholder="Launch date local" value={launch_date_local} onChange={e => { setLaunch_date_local(e.target.value)}}/>
                </div>
                <div className="form-check mt-3">
                    <input required type="checkbox" className="form-check-input required" value={launchSuccess} onChange={e => { setLaunchSuccess(e.target.value)}}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Launch success</label>
                </div>
                <button type="submit" className="btn btn-primary col-lg-8 mt-5">Add launch</button>
                </form>
        </div>
    )
}

export default NewLaunch
