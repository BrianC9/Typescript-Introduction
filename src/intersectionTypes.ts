type Draggable = {
    drag: ()=>void
}
type Resizable = {
    resize: ()=>void
}
type WidgetUI = Draggable & Resizable;

let textBox: WidgetUI = {
    drag: ()=> {},
    resize: ()=>{}
}