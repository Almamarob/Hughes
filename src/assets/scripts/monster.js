"use strict";
const label = document.getElementById("label");
const backgroundcolor = document.getElementById("backgroundcolor");
const type = document.getElementById("type");
const width = document.getElementById("width");
const height = document.getElementById("height");
const positionx = document.getElementById("positionx");
const positiony = document.getElementById("positiony");
const target = document.getElementById("target");
document.getElementById("tool_button").addEventListener("click", addbutton);
class CustomElement {
    elementLabel = "";
    elementBG = "";
    elementType = "";
    elementW = "";
    elementH = "";
    elementX = "";
    elementY = "";
    elementTarget = "";
    render() {
        document.getElementById(this.elementTarget).innerHTML += `<${this.elementType} style="background-color:${this.elementBG}; width:${this.elementW}; height:${this.elementW}; position:absolute; left:${this.elementX}; top:${this.elementY};" >${this.elementLabel}</${this.elementTarget} >`;
    }
}
function addbutton() {
    const element = new CustomElement();
    element.elementLabel = label.value;
    element.elementBG = backgroundcolor.value;
    element.elementType = type.value;
    element.elementW = width.value;
    element.elementH = height.value;
    element.elementX = positionx.value;
    element.elementY = positiony.value;
    element.elementTarget = target.value;
    element.render();
}
