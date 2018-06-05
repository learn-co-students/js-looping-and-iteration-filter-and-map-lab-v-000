function driversWithRevenueOver(drivers, amount){
  return drivers.filter(
    function (entry){
      if (entry[`revenue`] > amount){
        return entry;
      }
    }
  );
}

function driverNamesWithRevenueOver(drivers, amount){
  let driversWhoQaulify = drivers.filter(
    function (entry){
      if (entry[`revenue`] > amount){
        return entry;
      }
    }
  );
  return driversWhoQaulify.map(
    function (entry){
      return entry[`name`];
    }
  );
}

function exactMatch(drivers, object){
    return drivers.filter(
      function (entry){
        if (object.name === entry.name || object.revenue === entry.revenue){
          return entry;
        }
      }
    );
}

function exactMatchToList(drivers, object){
  let driversArray = exactMatch(drivers, object);
  return driversArray.map(
    function (entry){
      return entry.name;
    }
  );
}
