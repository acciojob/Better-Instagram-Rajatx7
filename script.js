//your code here

  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var targetElement = event.currentTarget; // Use currentTarget instead of target

    // Swap the background images
    var tempImage = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
    targetElement.style.backgroundImage = tempImage;
  }

