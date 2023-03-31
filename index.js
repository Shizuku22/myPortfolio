  // Get the H1 element by its ID
  const nameElement = document.getElementById("name");

  // Define the text to be typed
  const nameText = "Cha Arellano";

  // Set the initial text of the H1 element
  nameElement.textContent = "";

  // Start the typing animation
  let i = 0;
  function type() {
    if (i < nameText.length) {
      nameElement.textContent += nameText.charAt(i);
      i++;
      setTimeout(type, 100); // Change the typing speed by adjusting this value
    }
  }
  type();


