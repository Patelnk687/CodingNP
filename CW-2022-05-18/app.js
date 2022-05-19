// Surface Area and Volume of a Box
// DESCRIPTION:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(w, h, l){
  
    return [2*(l*w + l*h + w*h),w*h*l]
    
  }