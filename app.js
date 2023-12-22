const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [
  {
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "v",
    marker: { color: "rgba(0,0,255,0.6)" },
  },
];

const layout = { title: "World Wide Wine Production" };

const aArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const bArray = [55, 49, 44, 24, 15];

const layout2 = { title: "World Wide Wine Production" };

const data2 = [{ labels: aArray, values: bArray, hole: 0.4, type: "pie" }];
