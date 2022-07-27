function dragElement(terrariumElement) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);

        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
    terrariumElement.dblclick = moveElementToFront;
    function moveElementToFront() {
        console.log(`${terrariumElement} was double-clicked!`);
    }
}

const numPlants = 14;
let baseString = 'plant';
for (let i = 1; i <= numPlants; i++) {
    let tmp = baseString.concat(i);
    dragElement(document.getElementById(tmp));
}

/*
QUESTIONS:
1) Why do we reference elements by Id? Why not by their CSS class? You might refer to the previous lesson on CSS to answer this question.
we reference each element by id to distinguish them between all plants
if we would use getElementsByClassname we would get an HTMLCollection of all elements with the class attribute (plant)

2) The event handler onclick has much more support cross-browser; why wouldn't you use it here? Think about the exact type of screen interaction you're trying to create here.
because we want to implement an interactive terrarium, where the user can place plants from the sidebar in the terrarium (by drag and dropping)
the onclick-event only fires after mousedown followed by mouseup (i.e. by clicking) this is not sufficient for our drag and drop interface
the pointerdown-event fires when a button is pressed (e.g. mousedown, touching the element on a touch display) - this fits much better our needs
*/