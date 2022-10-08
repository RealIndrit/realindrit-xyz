
/* ACCESS CSS */
const r = document.querySelector(':root');
const rs = getComputedStyle(r);

function getCSSVariable(key) {
  return rs.getPropertyValue(key);
}

function setCSSVariable(key, value) {
  r.style.setProperty(key, value);
}


/* Do the actual colour stuff*/
const waves_collection = document.getElementsByClassName("wave-third")

for(let i = 0; i < waves_collection.length; i++) {
    waves_collection[i].firstElementChild.setAttribute("fill", getCSSVariable('--primary-content-color'))
}    