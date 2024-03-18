const root = document.createElement("root");
root.style.width = `100%`;
root.style.minHeight = `100vh`;
root.style.padding = `20px 0`;
root.style.backgroundColor = `#F5F5DC`;
root.style.display = `flex`;
root.style.alignItems = `center`;
root.style.justifyContent = `center`;
root.style.flexDirection = `column`;
root.style.gap = `30px`;

const page_heading = document.createElement("h1");
page_heading.innerHTML = `Everything that you can SEE is being Rendered through JavaScript`;
page_heading.style.color = `#27bee0`;
page_heading.style.margin = `0`;
page_heading.style.textAlign = `center`;
root.appendChild(page_heading);

const calci = document.createElement("div");
calci.style.backgroundColor = `#DAEA49`;
calci.style.padding = `20px 10px`;
calci.style.border = `1px solid black`;
calci.style.borderRadius = `10px`;
calci.style.display = `flex`;
calci.style.alignItems = `center`;
calci.style.justifyContent = `center`;
calci.style.flexDirection = `column`;
calci.style.gap = `10px`;
calci.style.boxShadow = `5px 7px 7px #0000005e`;

const display = document.createElement("input");
display.placeholder = `0`;

display.style.width = `90%`;
display.style.padding = `13px`;
display.style.textAlign = `end`;
display.style.border = `1px solid black`;
display.style.borderRadius = `7px`;
display.style.outline = `unset`;
display.style.fontSize = `15px`;
display.style.letterSpacing = `1px`;
display.style.color = `#121212`;
display.style.boxShadow = `5px 7px 7px #0000005e`;
calci.appendChild(display);

const delete_button_holder = document.createElement("div");
delete_button_holder.style.width = `100%`;
delete_button_holder.style.marginTop = `20px`;
delete_button_holder.style.display = `flex`;
delete_button_holder.style.justifyContent = `end`;
calci.appendChild(delete_button_holder);

const delete_buttonValue = ["Del", "AC"];
delete_buttonValue.map((delete_value) => {
  const delete_button = document.createElement("button");
  delete_button.innerHTML = delete_value;
  delete_button.style.cursor = `pointer`;
  delete_button.style.display = `grid`;
  delete_button.style.borderRadius = `7px`;
  delete_button.style.placeContent = `center`;
  delete_button.style.margin = `7px`;
  delete_button.style.width = `50px`;
  delete_button.style.height = `50px`;
  // delete_button.style.padding = `30px`;
  delete_button.style.color = `#ffffff`;
  delete_button.style.fontSize = `17px`;
  delete_button.style.fontWeight = `500`;
  delete_button.style.backgroundColor = `red`;
  delete_button.style.boxShadow = `5px 7px 7px #0000005e`;
  delete_button.style.transition = `all 0.2s ease`;

  // hover effect
  delete_button.addEventListener("mouseover", () => {
    delete_button.style.backgroundColor = `#44E320`;
  });

  // hover effect
  delete_button.addEventListener("mouseout", () => {
    delete_button.style.backgroundColor = `red`;
  });

  // dleteOne function which deletes one value from the diaplay input
  if (delete_value === "Del") {
    delete_button.onclick = () => deleteOne();
  }

  // clearAll function which clears the diaplay input
  if (delete_value === "AC") {
    delete_button.onclick = () => allClear();
  }

  delete_button_holder.appendChild(delete_button);
});

const button_holder = document.createElement("div");
button_holder.style.display = `grid`;
button_holder.style.gridTemplateColumns = `repeat(4, 1fr)`;
calci.appendChild(button_holder);

const calciValues = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "x",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
  "-",
];
calciValues.map((value) => {
  const button = document.createElement("button");
  button.innerHTML = value;
  button.value = value;
  button.style.cursor = `pointer`;
  button.style.display = `grid`;
  button.style.borderRadius = `7px`;
  button.style.placeContent = `center`;
  button.style.margin = `7px`;
  button.style.width = `50px`;
  button.style.height = `50px`;
  // button.style.padding = `30px`;
  button.style.color = `#111111`;
  button.style.backgroundColor = `#27bee0`;
  button.style.boxShadow = `5px 7px 7px #0000005e`;
  button.style.fontSize = `17px`;
  button.style.fontWeight = `500`;
  button.style.transition = `all 0.2s ease`;

  // hover effect
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = `#44E320`;
  });

  // hover effect
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = `#27bee0`;
  });

  button.onclick = () => displayValues(value);

  // changes the bg-color
  if (value === "/" || value === "x" || value === "+" || value === "-") {
    button.style.backgroundColor = `#ec10a3`;
    button.style.color = `#ffffff`;

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = `#ec10a3`;
    });
  }

  // changes the bg-color and onClicj function
  if (value === "x") {
    button.onclick = () => displayValues("*");
  }

  if (value === "=") {
    button.style.color = `#ffffff`;
    button.style.backgroundColor = `red`;
    button.onclick = () => calculate();

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = `red`;
    });
  }

  button_holder.appendChild(button);
});

root.appendChild(calci);

const deleteOne = () => {
  display.value = display.value.slice(0, -1);
};

const allClear = () => {
  display.value = "";
};

const displayValues = (value) => {
  display.value += value;
};

const calculate = () => {
  try {
    const currentValue = display.value;
    const result = eval(currentValue);
    if (isNaN(result)) {
      display.value = "";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
};

document.body.appendChild(root);
document.body.style.padding = `0`;
document.body.style.margin = `0`;
document.body.style.boxSizing = `border-box`;
