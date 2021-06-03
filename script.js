let dataPlace = document.querySelector('.dataPlace');

// Function to intiate data on load
let url = 'https://api.spaceXdata.com/v3/launches?limit=100';

let rows = '';

getData = () => {
    fetch(url)
    .then( res => res.json() )    
    .then( data => {
            data.map( spacex => {
                htmlStructure = `<div class="card">
                    <div class="image">
                        <img src=${spacex.links.mission_patch} width="150">
                    </div>
                    <p><strong>Mission Name ID:</strong> ${spacex.mission_name} #${spacex.flight_number}</p>
                    <p><strong>Mission ID:</strong> ${spacex.mission_id}</p>
                    <p><strong>Launch Year:</strong> ${spacex.launch_year}</p>
                    <p><strong>Successful Launch:</strong> ${spacex.launch_success}</p>
                    <p>
                    <strong>Successful Landings:</strong> ${spacex.rocket.first_stage.cores.map(a => a.land_success)}
                    </p>
                </div>`;
                rows += htmlStructure;
                return dataPlace.innerHTML = rows;
            })
        }
    )
    .catch(
        error => console.log('Error is : ' + error )
    )
}
getData();


// Function for Filtering yearwise

filterYear = year => {
    var rows1 = '';
    fetch(url)
        .then( res => res.json() )
        .then( data => {        
            let result = data.filter( item => item.launch_year == year )
            result.map( x => {
                htmlStructure = `<div class="card">
                    <div class="image">
                        <img src=${x.links.mission_patch} width="150">
                    </div>
                    <p><strong>Mission Name ID:</strong> ${x.mission_name} #${x.flight_number}</p>
                    <p><strong>Mission ID:</strong> ${x.mission_id}</p>
                    <p><strong>Launch Year:</strong> ${x.launch_year}</p>
                    <p><strong>Successful Launch:</strong> ${x.launch_success}</p>
                    <p>
                    <strong>Successful Landings:</strong> ${x.rocket.first_stage.cores.map(a => a.land_success)}
                    </p>          
                </div>`;
                rows1 += htmlStructure;                
                return dataPlace.innerHTML = rows1;
                }
            )}
        )
        .catch(
            error => console.log('Error is : ' + error )
        )    
}


// Function for Filtering with Successfully Launch

sccessfulLaunch = b => {
    var rows1 = '';
    fetch(url)
        .then( res => res.json() )
        .then( data => {        
            let result = data.filter( item => item.launch_success == b )            
            result.map( x => {
                htmlStructure = `<div class="card">
                    <div class="image">
                        <img src=${x.links.mission_patch} width="150">
                    </div>
                    <p><strong>Mission Name ID:</strong> ${x.mission_name} #${x.flight_number}</p>
                    <p><strong>Mission ID:</strong> ${x.mission_id}</p>
                    <p><strong>Launch Year:</strong> ${x.launch_year}</p>
                    <p><strong>Successful Launch:</strong> ${x.launch_success}</p>
                    <p>
                    <strong>Successful Landings:</strong> ${x.rocket.first_stage.cores.map(a => a.land_success)}
                    </p>          
                </div>`;
                rows1 += htmlStructure;                
                return dataPlace.innerHTML = rows1;
                }
            )}
        )
        .catch(
            error => console.log('Error is : ' + error )
        )    
}


// Function for Filtering with Successfully Landing

sccessfulLanding = b => {
    var rows1 = '';
    fetch(url)
        .then( res => res.json() )
        .then( data => {            
            let result  = data.filter( item => item.rocket.first_stage.cores.map( z => z.land_success) == b );
            console.log(result);
            result.map( x => {
                htmlStructure = `<div class="card">
                    <div class="image">
                        <img src=${x.links.mission_patch} width="150">
                    </div>
                    <p><strong>Mission Name ID:</strong> ${x.mission_name} #${x.flight_number}</p>
                    <p><strong>Mission ID:</strong> ${x.mission_id}</p>
                    <p><strong>Launch Year:</strong> ${x.launch_year}</p>
                    <p><strong>Successful Launch:</strong> ${x.launch_success}</p>
                    <p>
                    <strong>Successful Landings:</strong> ${x.rocket.first_stage.cores.map(a => a.land_success)}
                    </p>          
                </div>`;
                rows1 += htmlStructure;                
                return dataPlace.innerHTML = rows1;
                })

        })        
        .catch(
            error => console.log('Error is : ' + error )
        )    
}

