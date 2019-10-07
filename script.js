
    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

    container.appendChild(content);

    //  a <p> with red text that says “Hey I’m red!”

    const paragraph = document.querySelector('#container');
    const textOne = document.createElement ('p');
    textOne.classList.add('textOne');
    textOne.textContent = "Hey I’m red!";
    textOne.style.color = 'red';

    container.appendChild(textOne);

    // an <h3> with blue text that says “I’m a blue h3!”

    const titleThree = document.getElementById('container');
    const textThree = document.createElement('h3');
    textThree.classList.add('textThree');
    textThree.textContent = "I’m a blue h3!";
    textThree.style.color = 'blue';

    container.appendChild(textThree);

    // a <div> with a black border and pink background color with the following elements inside of it:
      
    const newDiv = document.getElementById('container');
    const divTwo = document.createElement('div');
    //divTwo.classList.add('divTwo');
    divTwo.setAttribute('id', 'exercise');
    divTwo.style.borderStyle = 'solid';
    divTwo.style.borderColor= '#FFC0CB';
    
    container.appendChild(divTwo);
    
        // another <h1> that says “I’m in a div”
        const newTittle = document.getElementById('exercise');
        const textExe = document.createElement('h1');
        textExe.textContent = "I’m in a div"

        exercise.appendChild(textExe);
        
        // a <p> that says “ME TOO!”
        const newPara = document.getElementById('exercise');
        const newP = document.createElement('p');
        newP.textContent = "ME TOO!";

        exercise.appendChild(newP);

        // Hint for this one: after creating the div with createElement, 
        //append the <h1> and <p> to it before adding it to the container.

    
    let btn = document.querySelector('#btn');
    btn.onclick = () => alert("Hello World");
