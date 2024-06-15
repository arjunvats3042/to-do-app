// Function to add a new goal
function add_goal() {
  const inputsContainer = document.querySelector(".inputs");

  // Create a new goal container
  const newGoal = document.createElement("div");
  newGoal.classList.add("goal");

  // Create a custom checkbox for the new goal
  const customCheckbox = document.createElement("div");
  customCheckbox.classList.add("custom_checkbox");

  const checkIcon = document.createElement("img");
  checkIcon.classList.add("check_icon");
  checkIcon.src = "check-icon.svg";
  checkIcon.alt = "Check Icon";

  customCheckbox.appendChild(checkIcon);

  // Create an input field for the new goal
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Write your goal...";

  // Append the custom checkbox and input field to the new goal container
  newGoal.appendChild(customCheckbox);
  newGoal.appendChild(inputField);

  // Append the new goal container to the inputs container
  inputsContainer.appendChild(newGoal);

  // Reapply the event listener to all custom checkboxes
  applyCheckboxListeners();
  bar_result();
}

// Function to remove the most recently added goal
function sub_goal() {
  const inputsContainer = document.querySelector(".inputs");
  const goals = inputsContainer.getElementsByClassName("goal");

  // Check if there is at least one goal to remove
  if (goals.length > 1) {
    const lastGoal = goals[goals.length - 1];
    inputsContainer.removeChild(lastGoal);
  }
  bar_result();
}

// Function to apply event listeners to all custom checkboxes
function applyCheckboxListeners() {
  const checkboxlist = document.querySelectorAll(".custom_checkbox");

  checkboxlist.forEach((checkbox) => {
    // Remove any existing event listeners to prevent duplicates
    checkbox.replaceWith(checkbox.cloneNode(true));
  });

  // Re-select checkboxes to get the clones with no event listeners
  const newCheckboxlist = document.querySelectorAll(".custom_checkbox");

  newCheckboxlist.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {

      checkbox.parentElement.classList.toggle("completed");
      
      bar_result();
    });
  });
}

// Initial application of event listeners
applyCheckboxListeners();

function bar_result() {
  let bars = document.querySelectorAll(".goal");
  let i = 0;
  let j = 0;
  bars.forEach((bar) => {
    i++;
  });
  let comp_bars = document.querySelectorAll(".completed");
  comp_bars.forEach((comp_bar) => {
    j++;
  });
  let perc = j/i*100;
  document.querySelector(".spn").textContent = `${j}/${i}__completed`;
  const prog_val = document.querySelector(".progress_value");
  prog_val.style.width = `${perc}%`;
}
