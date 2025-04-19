function twoDecimalPlaces(n) {
    // Convert to string with 2 decimal places
    const result = n.toFixed(2);
    // Remove leading plus sign if present
    return result.replace(/^\+/, '');
  }

  console.log(twoDecimalPlaces(123.456458));
  console.log(twoDecimalPlaces(0)); // Should output '0.00'


  function integrate(coefficient, exponent) {
    return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
  }
  function slope(points)
  {  
    if (points[2] - points[0] === 0) {
        return undefined;
    }
    else if(points[3] - points[1] === 0) {
        return 0;
    }
  return String((points[3] - points[1]) / (points[2] - points[0]));

  }