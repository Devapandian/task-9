const mySpan = document.getElementById('my-span');

mySpan.addEventListener('mouseover', () => {
    const userInput = prompt('Enter some text:');

  mySpan.style.color = 'red';
});

mySpan.addEventListener('mouseout', () => {
  mySpan.style.color = '';
});
