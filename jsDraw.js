var _isMousePressed = false
var _CurrentNode = null;
var _CANVAS_OFFSET;
//starting position
var _xStart = 0;
var _yStart = 0;

//set starting position
function _startDraw(e){
    _xStart = e.PageX - _CANVAS_OFFSET.left;
    _yStart = e.PageY - _CANVAS_OFFSET.top;
    _startRect()
}
function _startRect(){
    _currentNode = document.createElement("div");

    //position
    _currentNode.style.position = "absolute";
    _currentNode.style.left = _xStart+"px";
    _currentNode.style.top = _yStart+"px";
    //rand
    _currentNode.style.borderStyle="solid";
    _currentNode.style.borderWidth=this.borderWidth+"px";
    _currentNode.style.borderRadius=brad+"px";
    //farben
    _currentNode.style.background = co;
    _currentNode.style.bordercolor=bcol;

    this.Canvas.appendChild(_currentNode);
}

//draw a circle
function _circle(x, y, rad, col, bwi,bcol){
    this.div(x, y, rad, rad, col, bwi, bcol, rad/2);
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
function Graphics(canvas, DefaultColor){
    this.borderRadius = 0;
    this.state = "Rectangle";
    this.color = DefaultColor;
    this.borderColor = DefaultColor;
    this.borderWidth = 0
    this.Nodes = new Array();
    this.remove = _removeNodes;
    this.Canvas = canvas;
    _CANVAS_OFFSET = canvas.offset();
}

