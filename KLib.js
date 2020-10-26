function bounceOff(object1, object2) {

    if(object1.x- object2.x < object1.width/2+ object2.width/2
      &&object2.x- object1.x < object1.width/2+ object2.width/2){
        object1.velocityX= object1.velocityX*-1;
        object2.velocityX= object2.velocityX* -1;
     
      }
    
  }
  
  function isTouching(object3, object4) {
  
    if (object3.x - object4.x < object4.width/2 + object3.width/2
      && object4.x - object3.x < object4.width/2 + object3.width/2
      && object3.y - object4.y < object4.height/2 + object3.height/2
      && object4.y - object3.y < object4.height/2 + object3.height/2) {
      return true;
  
    }
  
  else {
  return false;
  }
  
  }
  
  
  