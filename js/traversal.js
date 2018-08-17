
var i=0, animDuration=800,root;

var tree = d3.layout.tree()
  .size([640, 360]);


d3.selection.prototype.moveToFront = function() {  
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

var svg = d3.select("#tree-container").append("svg")
.attr("preserveAspectRatio", "xMinYMin meet")
.attr("viewBox", "0 0 1280 720")
.classed("svg-content-responsive", true)
.append("g")
.attr("transform", "translate(" + -40 + "," + 80 + ")");;
  
root= treeData[0];
update(treeData[0]);

function resetTraversal(root){
  //d3.selectAll(".node").classed("visited",false);
  d3.selectAll(".node")
    .transition().duration(animDuration)
    .style("fill","#fff")
    .style("stroke","steelblue");

}

function update(root) {

  resetTraversal(root);

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth *100; });

    // Declare and append the nodes
    var nodeWrapper = svg.append("g").attr("id","nodes").selectAll("g.node")
    .data(nodes, function(d) {return d.id || (d.id = ++i); })
    .enter();

    nodeWrapper.append("circle")
    .attr("class", "node")
    //Root is the highest ID
    .attr("id",function(d){return "node-"+d.id})
    .attr("cx",function(d){return d.x;})
    .attr("cy",function(d){return d.y;})
    .attr("r", 20);

    nodeWrapper.append("text")
    .attr("x", function(d) { 
      return d.children || d._children ? d.x+5 : d.x-5; })
    .attr("y",function(d){return d.y;})
    .attr("text-anchor", function(d) { 
      return d.children || d._children ? "end" : "start"; })
    .style('font-weight',400)
    .text(function(d) { return d.name; })
    
    ;

    
  // Declare and append the links
  var linkWrapper = svg.append("g").attr("id","links").selectAll("path.link")
    .data(links, function(d) { return d.target.id; })
    .enter()
    .append("line", "g")
    .attr("class", "link")
    .attr("id",function(d){
      return d.source.id +"->"+ d.target.id;
    })
    .attr('x1', function(d){return d.source.x;})
    .attr('x2',function(d){return d.target.x;})
    .attr('y1',function(d){return d.source.y;})
    .attr('y2',function(d){return d.target.y;});

  //Styling consideration
  d3.select("#nodes").moveToFront();

}
function visitElement(element,animX){
 // d3.select("#node-"+element.id).classed("visited",true);
  d3.select("#node-"+element.id)
    .transition().duration(animDuration).delay(animDuration*animX)
    .style("fill","red").style("stroke","red");

  d3.select("table")
    .append("td")
    .transition().duration(animDuration).delay(animDuration*animX)
    .style("background-color","#34495e")
    .text(element.name);
    
		
    
}

function post(){
  var stack=[];
  var animX=0;  
  
  if(root.children!==undefined){

        function postT(node) {
          if(node.children!==undefined) {
          if(node) { 
            postT(node.children[0])
            }
          
          if(node.children[1]!==undefined) {
            if(node) { 
              postT(node.children[1])
              }
            } }
          visitElement(node,animX);
          animX= animX+1;
          
        } 
}
  postT(root);
  
}
function pre(){
  var stack=[];
  var animX=0;  
  
  if(root.children!==undefined){

        function preT(node) {

          visitElement(node,animX);
          animX= animX+1;
          if(node.children!==undefined) {
          if(node) { 
            preT(node.children[0])
            }
          
          if(node.children[1]!==undefined) {
            if(node) { 
              preT(node.children[1])
              }
            } }
          
          
        } 
}
  preT(root);
  
}
function inO(){
  var stack=[];
  var animX=0;  
  
  if(root.children!==undefined){

        function inT(node) {

          
          if(node.children!==undefined) {
          if(node) { 
            inT(node.children[0])
            }
          }
            visitElement(node,animX);
            animX= animX+1;
            if(node.children!==undefined) {
          if(node.children[1]!==undefined) {
            if(node) { 
              inT(node.children[1])
              }
            } }
          
          
        } 
}
  inT(root);
  
}


function bft(){
  var queue=[];
  var animX=0;
  queue.push(root);
  while(queue.length!==0){
    var element = queue.shift();
    visitElement(element,animX);
    animX= animX+1;
    if(element.children!==undefined){
      for(var i=0; i<element.children.length; i++){
        queue.push(element.children[i]);
      }
    }
  }
}

