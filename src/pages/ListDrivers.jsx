import F1Drivers from '../data/F1Drivers'; 

function ListDrivers() {
  return (
    <div className='main-content'>
      
      <ul>
      { F1Drivers.map((driver, index) => (
          <li   key = {index}> {index+1}<b>{driver.firstName}
          {driver.lastName} </b>  {driver.team} {driver.country} {driver.age}</li>
      ))}
      </ul>
    </div>
  );
}

export default ListDrivers;