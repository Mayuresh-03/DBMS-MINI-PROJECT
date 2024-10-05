const PercentageDecrease = ({originalValue, newValue}) => {
    // console.log(typeof(newValue))
    if (originalValue === 0) {
      return "0";
    }
    const decrease = originalValue - newValue;
    const percentageDecrease = (decrease / originalValue) * 100;
    return Math.round(percentageDecrease);
  }

export default PercentageDecrease;