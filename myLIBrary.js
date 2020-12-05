function bounceOFF(obj1,obj2){
    //Xaxis
    if ( obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      &&  obj2.x -  obj1.x <  obj2.width/2 +  obj1.width/2) {
     obj1.velocityX =  obj1.velocityX * (-1);
     obj2.velocityX =  obj2.velocityX * (-1);
    }
    //Yaxis
    if (obj1.y - obj2.y < obj1.height/2 +  obj2.height/2
    &&  obj2.y -  obj1.y <  obj1.height/2 +  obj2.height/2){
     obj1.velocityY =  obj1.velocityY * (-1);
     obj2.velocityY =  obj2.velocityY * (-1);
    }
    
    
    }

    function isTOUCHIng(ob1,ob2){
      if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
        && ob2.x - ob1.x < ob1.width/2 + ob2.width/2
        && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
        && ob2.y - ob2.y < ob1.height/2 + ob2.height/2) {
     return true;
    }
    else {
      return false;
    }

    }