var boxes = {
  color: "blue",
  changeColor: function(element) {
    if (this.color == "blue") {
      this.color = "red";
    }
    else {
      this.color = "blue";
    }
    
    element.style.backgroundColor = this.color;
  }
}