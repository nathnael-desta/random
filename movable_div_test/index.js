const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

function getDragAfterElement(container, x, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const yOffset = y - box.top - box.height / 2;
    const xOffset = x - box.left - box.width / 2;
    const offset = Math.sqrt((yOffset * yOffset) + (xOffset * xOffset));
    // console.log(offset);
    if (offset < closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.POSITIVE_INFINITY }).element;
}

containers.forEach((container) => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    // container.removeChild(dragging);
    const afterElement = getDragAfterElement(container, e.clientX, e.clientY);
    afterElement.textContent = dragging.textContent;

    // console.log(afterElement);

    // console.log(afterElement);

    if (afterElement == null) {
      container.appendChild(dragging);
    } else {
      container.insertBefore(dragging, afterElement);
    }
  });
});

// containers.forEach((container) => {
//   container.addEventListener('dragover', (e) => {
//     let draggables = container.querySelectorAll('.draggable');
//     draggables.forEach((draggable) => {
//       if (!draggable.classList.contains('.dragging')) {
//         const dragging = document.querySelector('.dragging');
//         console.log("b")
//         if (checkIfCenterOfDivAInDivB(dragging, draggable)) {
//             console.log(draggable)
//           draggable.textContent = dragging.textContent;
//         } else {
//           draggable.textContent = '';
//         }
//       }
//     });
//   });
// });

// function checkIfCenterOfDivAInDivB(divA, divB) {
//   const rectA = divA.getBoundingClientRect();
//   const rectB = divB.getBoundingClientRect();

//   const centerOfDivA_x = rectA.left + rectA.width / 2;
//   const centerOfDivA_y = rectA.top + rectA.height / 2;

//   if (
//     centerOfDivA_x >= rectB.left
//       && centerOfDivA_x <= rectB.right
//       && centerOfDivA_y >= rectB.top
//       && centerOfDivA_y <= rectB.bottom
//   ) {
//     return true;
//   }
//   return false;
// }
