# SVG stroke-dasharray Attribute

The stroke-dasharray attribute is used to create dashed lines.

The stroke-dasharray attribute can be used with the following SVG elements: <circle>, <ellipse>, <line>, <path>, <polygon>, <polyline>, <rect>, <text>, <textPath>, <tref> and <tspan>.

________________________________________________________________________________________
# run in w3school


<!DOCTYPE html>
<html>
<body>

<h2>SVG stroke-dasharray attribute</h2>

<svg height="100" width="400" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="red" stroke-width="6">
    <path stroke-dasharray="5,5" d="M5 20 l215 0" />
    <path stroke-dasharray="10,1" d="M5 40 l215 0" />
    <path stroke-dasharray="35,10" d="M5 60 l215 0" />
    <path stroke-dasharray="20,10,5,5,5,10" d="M5 80 l215 0" />
  </g>
  Sorry, your browser does not support inline SVG.
</svg>
 
</body>
</html>
________________________________________________________________________________________


The stroke-dashoffset property in CSS defines the location along an SVG path where the dash of a stroke will begin. The higher the number, the further along the path the dashes will begin.




.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 5s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
# ===========================================================================================================
