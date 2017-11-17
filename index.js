function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue )
};

function driverNamesWithRevenueOver(drivers, revenue){
   let driverName = []
    drivers.filter(driver => {
      if (driver.revenue > revenue){
         driverName.push(driver.name)
         }
    }
  )
   return driverName;
};

function exactMatch(drivers, info ){
  let driverAttribute = [];
   drivers.map(driver => {
      if (driver.name === info.name){
          driverAttribute.push(driver)
      }else if ( driver.revenue === info.revenue ){
        driverAttribute.push(driver)
      }
    }
  )
  return driverAttribute;
}

function exactMatchToList(drivers, info){
  let driverName = [];
   drivers.map(driver =>{
    if (driver.name === info.name){
      driverName.push(driver.name)
    }else if (driver.revenue === info.revenue){
      driverName.push(driver.name)
    }
  })
    return driverName;

}
