let statusBox = document.getElementById("status");
let inputOne = document.getElementById("input1");
let selectOne = document.getElementById("select_element");
let click_me = document.getElementById("click_me");
let mouse_area = document.getElementById("mouse_area");

function high(text){
    return `<span class="highlight">${text}</span>`;
}


inputOne.addEventListener("focus", function () {
    statusBox.innerHTML = 
    `
        You ${high("focussed")} on the element. Focus is a state of input box when you can make changes.
        The '${high("Focus")}' event occured
    `;
});

inputOne.addEventListener("blur", function () {
    statusBox.innerHTML = 
    `
        You ${high("removed focus")} from the element. The '${high("Blur")}' event occured
    `;
});

inputOne.addEventListener("input", function () {
    statusBox.innerHTML = 
    `
        You are ${high("giving the input")} in the element. The '${high("Input")}' event occured
    `;
});

selectOne.addEventListener("focus", function () {
    statusBox.innerHTML = 
    `
        You ${high("focussed")} on the element. Focus is a state of input box when you can make changes.
        The '${high("Focus")}' event occured
    `;
});

selectOne.addEventListener("blur", function () {
    statusBox.innerHTML = 
    `
        You ${high("removed focus")} from the element. The '${high("Blur")}' event occured
    `;
});

selectOne.addEventListener("change", function () {
    statusBox.innerHTML = 
    `
        You ${high("changed")} something in the input. The '${high("Change")}' event occured
    `;
});

click_me.addEventListener("click", function(e){
    e.preventDefault();
    statusBox.innerHTML = 
    `
        You ${high("Clicked")} on the button. The '${high("Click")}' event occured
    `;
});

click_me.addEventListener("dblclick", function(e){
    e.preventDefault();
    statusBox.innerHTML = 
    `
        You ${high("Double Clicked")} on the button. The '${high("Dblclick")}' event occured
    `;
});

click_me.addEventListener("dblclick", function(e){
    e.preventDefault();
    statusBox.innerHTML = 
    `
        You ${high("Double Clicked")} on the button. The '${high("Dblclick")}' event occured
    `;
});

mouse_area.addEventListener("mouseover", function(){
    statusBox.innerHTML = 
    `
        Your ${high("mouse entered")} in the mouse area. The '${high("mouseover")}' event occured.
    `;
});

mouse_area.addEventListener("mouseout", function(){
    statusBox.innerHTML = 
    `
        Your ${high("mouse left")} from the mouse area. The '${high("mouseleave")}' or '${high("mouseout")}' event occured.
    `;
});
 