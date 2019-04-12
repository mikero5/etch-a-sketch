const gridContainer = document.querySelector('.grid-container');
gridContainer.style.cssText = 'background-color: khaki';

const default_grid_height = 16;
const default_grid_bg_color = 'white';

let current_grid_height = 0;
let current_div_array_size = current_grid_height * current_grid_height;

let colorDots = false;
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function(){
  let newHeight = prompt('Enter new size: ');
  if(newHeight === null) newHeight = current_grid_height;
  if(newHeight > 255) newHeight = 255;
  if(newHeight < 1) newHeight = 1;
  setup_grid_container(newHeight, default_grid_bg_color);
});

const styleButton = document.querySelector('#style');
styleButton.addEventListener('click', function(){
  if(colorDots === true) {
    this.textContent = 'Color';
    colorDots = false;
  }
  else {
    this.textContent = 'Black';
    colorDots = true;
  }
});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){
  reset_grid();
});

//==============================================================================
function reset_grid() {
  let node = gridContainer.firstElementChild;
  node.style.cssText = 'background-color: default_grid_bg_color';
  for(i=0; i<current_div_array_size; i++) {
    node = node.nextSibling;
    if(node !== null)
      node.style.cssText = 'background-color: default_grid_bg_color';
  }
}

//==============================================================================
function clear_grid() {
  for(i=0; i<current_div_array_size; i++) {
    gridContainer.removeChild(gridContainer.firstElementChild);
  }
}

//==============================================================================
function setup_grid_container(height_in_elements, color) {
  clear_grid();
  current_grid_height = height_in_elements;
  current_div_array_size = current_grid_height * current_grid_height;
  let cssString = 'background-color: ' + color + '; grid-template-columns: ';
  let autoString = '';

  for(i=0; i<height_in_elements; i++) {
    autoString += 'auto ';
    for(j=0; j<height_in_elements; j++) {
      var element = document.createElement('div');
      element.addEventListener('mouseover', function(){
        let index = Math.floor(Math.random() * 7);
        let colorUsed = colorArray[index];
        if(colorDots === true)
          this.style.cssText = 'background-color: ' + colorUsed + ';';
        else
          this.style.cssText = 'background-color: black; ';
      });
      gridContainer.appendChild(element);
    }
  }
  cssString += autoString + '; ';
  gridContainer.style.cssText = cssString;
}

//==============================================================================
function default_grid() {
  setup_grid_container(default_grid_height, default_grid_bg_color);
}


//==============================================================================
//==============================================================================
default_grid();
