for(var numberofdrum=document.querySelectorAll(".drum").length,birth=new Audio("sounds/Birthday.mp3"),crash=new Audio("sounds/crash.mp3"),snare=new Audio("sounds/snare.mp3"),kickbass=new Audio("sounds/kick-bass.mp3"),tom1=new Audio("sounds/tom-1.mp3"),tom2=new Audio("sounds/tom-2.mp3"),tom3=new Audio("sounds/tom-3.mp3"),tom4=new Audio("sounds/tom-4.mp3"),i=0;i<numberofdrum;i++)document.querySelectorAll(".drum")[i].addEventListener("click",function(){var e=this.innerHTML;makesound(e),buttonAnimation(e)});function makesound(e){switch(e){case"w":birth.pause(),crash.play();break;case"a":birth.pause(),snare.play();break;case"s":birth.pause(),kickbass.play();break;case"d":birth.pause(),tom1.play();break;case"j":birth.pause(),tom2.play();break;case"k":birth.pause(),tom3.play();break;case"l":birth.pause(),tom4.play();break;case"i":birth.pause(),birth.play();break;default:console.log(e)}}function buttonAnimation(e){var s=document.querySelector("."+e);s.classList.add("pressed"),setTimeout(function(){s.classList.remove("pressed")},100)}document.addEventListener("keydown",function(e){makesound(e.key),buttonAnimation(e.key)});
