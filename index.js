function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(d => d.revenue > revenue);   
}

function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue).map(d => d.name);
}

function exactMatch(drivers, requirements){
    return drivers.filter(d => {
        for(const key in requirements){
            if(d[key] != requirements[key]){
                return false;
            }
        }
        return true;
    })
}

function exactMatchToList(drivers, requirements){
    return exactMatch(drivers, requirements).map(d => d.name);
}