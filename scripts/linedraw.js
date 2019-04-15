//create div with style parameters
function _div(x, y, wi, hight, co, bwi, bcol,brad){
    var Node = document.createElement("div");

//position
    Node.style.position = "absolute";
    Node.style.top = y+"px";
    Node.style.left = x+"px";
//größe
    Node.style.width = wi+"px";
    Node.style.height = hight+"px";
//rand
    Node.style.borderStyle="solid";
    Node.style.borderWidth=bwi+"px";
    Node.style.borderRadius=brad+"px";
//farben
    Node.style.background = co;
    Node.style.bordercolor=bcol;

    this.Canvas.appendChild(Node);
    this.Nodes.push(Node); 
}

//draw a line (wip)
function _drawLine(th,col,dir){
}

//remove all items in the canvas
function _removeNodes(){
    for(var i = 0;i<this.Nodes.length;i++){
        this.Canvas.removeChild(this.Nodes[i]);
    }
    delete(this.Nodes)
    this.Nodes = new Array();
}
//Main Function
function Graphics(ev, DefaultColor){
    this.Nodes = new Array();
    this.div = _div;
    this.remove = _removeNodes;
    this.Canvas = document.getElementById(ev);
}

