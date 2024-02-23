export const Balloons = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "W",
    "x",
    "y",
    "z",
    "å",
    "ä",
    "ö",
  ];
  return alphabet.map((bokstav) => {
    return <div className="flex"><div>{bokstav}</div></div>
  })
};
