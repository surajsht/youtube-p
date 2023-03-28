const Test = ({ Totalviews }) => {
  if (Totalviews > 1000 && Totalviews < 999999) {
    return (Totalviews / 1000).toFixed(1) + "k";
  } else if (Totalviews > 100000) {
    return (Totalviews / 1000000).toFixed(1) + "m";
  } else {
    return Totalviews
  }
}

export default Test