//Drawing object
var _currentNode = null;
//current Mode
var _state = "Rectangle";
function _setState(s){
    _state=s;
}
//current Image
var _img = null;
function _setImg(i){
    _img=i;
}
var _CANVAS_OFFSET;
//starting position
var _xStart = 0;
var _yStart = 0;
//Draw Rectanbgles
var _Nodes = new Array();
//current color
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
//content image

//set starting position
function _startDraw(e){
    _xStart = e.pageX - _CANVAS_OFFSET.left;
    _yStart = e.pageY - _CANVAS_OFFSET.top;
    switch(_state){
        case "Rectangle":
        case "Circle":
            _startRect();
            break;
        case "Image":
            _startImg();
            break;
    }

}
function _startImg(){
    _currentNode = document.createElement("img");
    //set Image
    _currentNode.src=_img;
    _currentNode.height="auto";
    //position
    _currentNode.style.position = "absolute";
    _currentNode.style.left= _xStart+"px";
    _currentNode.style.top= _yStart+"px";
    //border
    _currentNode.style.borderStyle="solid";
    _currentNode.style.borderWidth=_borderWidth+"px";
    _currentNode.style.borderRadius=_borderRadius+"px";
    //colors
    _currentNode.style.borderColor=_borderColor;

    _Canvas.append(_currentNode);
    _Nodes.push(_currentNode);
}
//create drawn element
function _startRect(){
    _currentNode = document.createElement("div");

    //position
    _currentNode.style.position = "absolute";
    _currentNode.style.left = _xStart+"px";
    _currentNode.style.top = _yStart+"px";
    //border
    _currentNode.style.borderStyle="solid";
    _currentNode.style.borderWidth=_borderWidth+"px";
    _currentNode.style.borderRadius=_borderRadius+"px";
    //colors
    _currentNode.style.background = _color;
    _currentNode.style.borderColor=_borderColor;

    _Canvas.append(_currentNode);
    _Nodes.push(_currentNode);
}
//called when moving over the canvas
function _drag(e){
    //filter out when not drawing
    if(_currentNode == null) {return;}
    //calculate height and width
    var width = e.pageX - _CANVAS_OFFSET.left - _xStart;
    var height = e.pageY -_CANVAS_OFFSET.top - _yStart;
    //call repensetive function
    switch(_state){
        case "Rectangle":
            _dragRectangle(width, height);
            break;
        case "Circle":
            _dragcircle(width);
            break;
        case "Image":
            _dragImg(width);
    }
}

function _dragRectangle(width, height){
    //chage with and height
    _currentNode.style.width= width+"px";
    _currentNode.style.height= height+"px";
}

function _dragcircle(width){
    _currentNode.style.width= width+"px";
    _currentNode.style.height = width+"px";
    _currentNode.style.borderRadius = width/2+"px";
}

function _dragImg(width){
    _currentNode.style.width= width+"px";
}

//end drawing
function _endDraw(){
    _currentNode=null
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
function Graphics(canvas, Color, borderRadius, borderColor, borderThickness){
    //initialize Variables
    this.state="Rectangle";
    this.setBorderRadius = _setBorderRadius;
    this.setBorderColor = _setBorderColor;
    this.setBorderWidth = _setBorderWidth;
    this.setColor = _setColor;
    this.setState = _setState;
    this.setImage = _setImg;
    _borderRadius = borderRadius;
    _color = Color;
    _borderColor = borderColor;
    _borderWidth = borderThickness;
    this.remove = _removeNodes;
    _Canvas = canvas;
    this.StartDraw = _startDraw;
    this.Drag = _drag;
    this.EndDraw = _endDraw;
    _CANVAS_OFFSET = canvas.offset();
    //create events
    canvas.mousedown(function(e) {_startDraw(e)});
    canvas.mousemove(function(e) {_drag(e)});
    canvas.mouseup(this.EndDraw);
}

