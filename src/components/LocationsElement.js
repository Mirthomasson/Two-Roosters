import React from 'react';
import '../App.css';
import locations from '../images/tr-locations.jpeg';


export default function Locations() {
  return (
    <div className='locations'>
        <img className="retail-pic" src={locations} alt="locations" />
        <div className='options'>
        <label for="kroger">Kroger Locations: </label>
        <select>
        <option>Tanglewood- 4488 Electric Rd </option>
        <option>Hollins- 7223 Williamson Rd</option>
        <option>Salem- 1477 W Main St Salem </option>
        <option>Electric Rd- 1925 Electric Rd</option>
        <option>Vinton- 915 Hardy Rd</option>
        <option>Rutgers- 5050 Rutgers St NW</option>
        <option>Lakeside- 161 S Electric Rd</option>
        <option>Daleville- 72 Kingston Dr</option>
        <option>Cave Spring- 4404 Brambleton Ave</option>
        <option>Brambleton- 3971 Brambleton Ave</option>
        <option>Towers- 614 Brandon Ave</option>
        <option>Bonsack- 3970 Valley Gateway Blvd</option>
        <option>Blacksburg- 13222 S Main St </option>
        <option>Blacksburg- 902 University City Blvd </option>
        <option>Christiansburg: 555 N Franklin St </option>
        </select>
        <label for="earth">Earth Fare Locations: </label>
        <select>
        <option>Roanoke- 2203 Franklin Rd</option>
        <option>Hollins- 7223 Williamson Rd</option>
        </select>
        <label for="co-op">Roanoke Natural Foods Co-Op: </label>
        <select>
        <option>Grandin- 1319 Grandin Rd </option>
        <option>Roanoke- 1 Market Square SE</option>
        </select>
        </div>
    </div>
  )
}
