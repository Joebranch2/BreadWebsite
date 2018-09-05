window.onload = initAll;

function initAll(){
  document.getElementById("Breads").onclick = saySomething;
  document.getElementById("Dairy").onclick = saySomething;
  document.getElementById("Meats").onclick = saySomething;
  document.getElementById("Vegetables").onclick = saySomething;
  document.getElementById("Fruits").onclick = saySomething;
}

function saySomething(){
  switch(this.id){
    case "Breads":
      alert("Stale Bread for Sale Soon!");
      break;
    case "Dairy":
      alert("Rotten Dairy for Sale Soon!");
      break;
    case "Meats":
      alert("Rotten Meat for Sale Soon!");
      break;
    case "Vegetables":
      alert("Rotten Vegetables for Sale Soon!");
      break;
    case "Fruits":
      alert("Rotten Fruits for Sale Soon!");
      break;
      default:
  }

}
