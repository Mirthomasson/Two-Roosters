import React from 'react';
import '../App.css';
import locations from '../images/tr-locations.jpeg';
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";



export default function Locations() {
  return (
    <div className='locations'>
        <img className="retail-pic" src={locations} alt="locations" />
        <div>
            <h4 className='locationTitle'>
                Kroger Locations
            </h4>
            <Dropdown title="Pick a location">
                <Dropdown.Item as="a" href=
                "https://www.google.com/maps/place/Kroger/@37.2331308,-79.9791529,17z/data=!3m1!4b1!4m5!3m4!1s0x884d0cdcdb09a20b:0x693a2d17a3499042!8m2!3d37.2331308!4d-79.976578" 
                target="_blank">
                Tanglewood- 4488 Electric Rd 24018
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://www.google.com/maps/place/Kroger/@37.3454226,-79.9570509,17z/data=!4m13!1m7!3m6!1s0x884d0fae41167a6d:0x46420c73272f8897!2s7223+Williamson+Rd,+Hollins,+VA+24019!3b1!8m2!3d37.3454226!4d-79.954476!3m4!1s0x884d0fae516aa4cb:0xf7bce7c9e036e7b5!8m2!3d37.3453264!4d-79.9549459" 
                target="_blank">
                    Hollins- 7223 Williamson Rd 24019
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://www.google.com/maps/place/Kroger/@37.2906689,-80.0856625,17z/data=!4m13!1m7!3m6!1s0x884d0a13dcb69d67:0x6cb546a504bf7f78!2s1477+W+Main+St,+Salem,+VA+24153!3b1!8m2!3d37.2906689!4d-80.0830876!3m4!1s0x884d0a138989baf1:0x3f68effd284fc264!8m2!3d37.2904479!4d-80.0829391"
                target="_blank">
                    Salem- 1477 W Main St Salem 24153
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://www.google.com/maps/place/Kroger/@37.2643691,-80.0366915,17z/data=!4m13!1m7!3m6!1s0x884d0ba11484a729:0x6e07fc2aada736ef!2s1925+Electric+Rd,+Salem,+VA+24153!3b1!8m2!3d37.2643691!4d-80.0341166!3m4!1s0x884d0ba19838cf99:0xe4d9a33cb455397a!8m2!3d37.2644656!4d-80.0349271"
                target="_blank">
                    Electric Rd- 1925 Electric Rd 24153
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://www.google.com/maps/place/Lake+Drive+Plaza/@37.2728391,-79.8900289,17z/data=!4m13!1m7!3m6!1s0x884d1239bbcfbd43:0x5bdadb4a490f429f!2s915+Hardy+Rd,+Vinton,+VA+24179!3b1!8m2!3d37.2728391!4d-79.887454!3m4!1s0x884d1239cea8cdc5:0xbc515af4f5922a6!8m2!3d37.2723368!4d-79.8870302"
                target="_blank">
                    Vinton- 915 Hardy Rd 24179
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://www.google.com/maps/place/Kroger/@37.2728391,-79.8900289,17z/data=!4m13!1m7!3m6!1s0x884d1239bbcfbd43:0x5bdadb4a490f429f!2s915+Hardy+Rd,+Vinton,+VA+24179!3b1!8m2!3d37.2728391!4d-79.887454!3m4!1s0x884d1239a12a3e19:0xfa2e59a1266d1a61!8m2!3d37.2718324!4d-79.8870775"
                target="_blank">
                    Rutgers- 5050 Rutgers St NW 24179
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://www.google.com/maps/place/Kroger/@37.2969098,-80.0311137,17z/data=!4m13!1m7!3m6!1s0x884d0be72926e821:0xdc4d3a40809e1973!2s161+S+Electric+Rd,+Salem,+VA+24153!3b1!8m2!3d37.2969098!4d-80.0285388!3m4!1s0x884d0be6c6706db5:0x99d1033fd63f13d1!8m2!3d37.2967547!4d-80.0290784"
                target="_blank">
                    Lakeside- 161 S Electric Rd 24153
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://www.google.com/maps/place/Kroger/@37.3971901,-79.9138575,17z/data=!4m13!1m7!3m6!1s0x884d1ab63454326d:0x25179253a01e450f!2s72+Kingston+Dr,+Daleville,+VA+24083!3b1!8m2!3d37.3971901!4d-79.9112826!3m4!1s0x884d1ab7c27b6ef9:0x486c88fe23e3de84!8m2!3d37.3965187!4d-79.9104477"
                target="_blank">
                    Daleville- 72 Kingston Dr 24083
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://www.google.com/maps/place/Kroger/@37.2240486,-80.0142448,17z/data=!4m13!1m7!3m6!1s0x884d0b56ff040c93:0x98d742f6035539b2!2s4404+Brambleton+Ave,+Roanoke,+VA+24018!3b1!8m2!3d37.2240486!4d-80.0116699!3m4!1s0x884d0b570190e843:0x3002696bb46f0b4a!8m2!3d37.2240411!4d-80.0121786"
                target="_blank">
                    Cave Spring- 4404 Brambleton Ave 24018
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://goo.gl/maps/p9PHxLE2pbXjryRa6"
                target="_blank">
                    Brambleton- 3971 Brambleton Ave 24018
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://goo.gl/maps/Fsu5mr4bqK17qJnv6"
                target="_blank">
                    Towers- 614 Brandon Ave 24015
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://goo.gl/maps/nLDNDkLF5hcELSFG8"
                target="_blank">
                    Bonsack- 3970 Valley Gateway Blvd 24012
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://goo.gl/maps/QGEBCjF61KNjQyKi9"
                target="_blank">
                    Blacksburg- 1322 S Main St 24060
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://goo.gl/maps/LGCPYs8rgVGv1tRs8"
                target="_blank">
                    Blacksburg- 903 University City Blvd 24060
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://goo.gl/maps/2GTGZkh2a5ZDspEx6"
                target="_blank">
                    Christiansburg- 555 N Franklin St 24073
                </Dropdown.Item>
                </Dropdown>

                {/* ------------------------------------- */}
            
            <h4 className='locationTitle'>
                Earth Fare Locations
            </h4>
            <Dropdown title="Pick a location">
            <Dropdown.Item as="a" href=
                "https://g.page/earth-fare-roanoke?share"
                target="_blank">
                    Roanoke- 2203 Franklin Rd SW #1 24014
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://goo.gl/maps/UanYGLmNf6c5A2QD8"
                target="_blank">
                    Christiansburg- 2625 Market St 24073
                </Dropdown.Item>
            </Dropdown>

                {/* ------------------------------------- */}
            
                <h4 className='locationTitle'>
                Roanoke Natural Foods</h4> 
                <h4> Co-op Locations</h4>
            <Dropdown title="Pick a location">
            <Dropdown.Item as="a" href=
                "https://goo.gl/maps/V3G8VNZwNxvMESzm8"
                target="_blank">
                    Grandin- 1319 Grandin Rd 24015
                </Dropdown.Item>
                <Dropdown.Item as="a" href=
                "https://g.page/RoanokeCoopDowntown?share"
                target="_blank">
                    Roanoke- 1 Market Square SE #115 24011
                </Dropdown.Item>
            </Dropdown>
        </div>
    </div>
  )
}


