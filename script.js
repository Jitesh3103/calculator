const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Button clicks
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "C") {
      display.value = "";
    } else if (btn.textContent === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += btn.textContent;
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (
    (e.key >= "0" && e.key <= "9") || 
    ["+", "-", "*", "/", ".", "%"].includes(e.key)
  ) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === "c") {
    display.value = "";
  }
});
