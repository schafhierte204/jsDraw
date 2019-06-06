var _currentNode = null;
var _CANVAS_OFFSET;
//starting position
var _xStart = 0;
var _yStart = 0;
//nodes
var _Nodes = new Array();
var _color;
function _setColor(c){
    _color = c;
}
//border Settings
var _borderWidth;
function _setBorderWidth(w){
    _borderWidth =w;
}
var _borderRadius;
function _setBorderRadius(r){
    _borderRadius =r;
}
var _borderColor;
function _setBorderColor(c){
    _borderColor =c;
}
//canvas
var _Canvas;

//set starting position
function _startDraw(e){
    _xStart = e.pageX - _CANVAS_OFFSET.left;
    _yStart = e.pageY - _CANVAS_OFFSET.top;
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
    _currentNode.style.borderWidth=_borderWidth+"px";
    _currentNode.style.borderRadius=_borderRadius+"px";
    //farben
    _currentNode.style.background = _color;
    _currentNode.style.borderColor=_borderColor;

    _Canvas.append(_currentNode);
    _Nodes.push(_currentNode);
}
function _drag(e){
    if(_currentNode == null) {return;}
    //chage with and height
    _currentNode.style.width= e.pageX - _CANVAS_OFFSET.left -_xStart
    _currentNode.style.height= e.pageY - _CANVAS_OFFSET.top -_yStart
}

//end drawing
function _endDraw(){
    _currentNode=null
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
    for(var i = 0;i<_Nodes.length;i++){
        _Canvas.empty();
    }
    delete(_Nodes)
    _Nodes = new Array();
}
//Main Function
function Graphics(canvas, DefaultColor){
    this.setBorderRadius = _setBorderRadius;
    this.setBorderColor = _setBorderColor;
    this.setBorderWidth = _setBorderWidth;
    this.setColor = _setColor;
    _borderRadius = 0;
    this.borderRadius = _borderRadius;
    this.state = "Rectangle";
    _color = DefaultColor;
    this.color = _color;
    _borderColor = DefaultColor;
    this.borderColor = _borderColor;
    _borderWidth = 0;
    this.borderWidth = _borderWidth;
    this.Nodes = _Nodes;
    this.remove = _removeNodes;
    _Canvas = canvas;
    this.StartDraw = _startDraw;
    this.Drag = _drag;
    this.EndDraw = _endDraw;
    canvas.mousedown(this.StartDraw);
    canvas.mousemove(this.Drag);
    canvas.mouseup(this.EndDraw);
    _CANVAS_OFFSET = canvas.offset();
}

