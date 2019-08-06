def drivers_with_revenue_over(drivers, revenue)
  drivers.select do |driver|
    driver[:revenue] > revenue
  end
end


def driver_names_with_revenue_over(drivers, revenue)
  drivers_with_revenue_over(drivers,revenue).map { |driver| driver[:name] }
end

def exact_match(drivers, matcher)
  drivers.select do |driver|
    matches = false
    matcher.each do |key, value|
      matches = (value == driver[key])
    end
    matches
  end
end

def exact_match_to_list(drivers, matcher)
  exact_match(drivers, matcher).map { |driver| driver[:name] }
end
