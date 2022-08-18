// form submiter
// zestaw funkcji walidujący oraz przesyłający formularz po submicie
// input: 3 text inputy i przycisk submit
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

export default function createData() {
  const newData = document.createElement("p");

  newData.textContent = `new Data from ${input1.value}:${input2.value} ${input3.value}`;
  document.body.appendChild(newData);

  input2.value = "";
  input3.value = "";
}
export const dupa = console.log("dupa");
