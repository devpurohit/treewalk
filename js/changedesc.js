var changedesc= function() {
    selectValue = d3.select('select').property('value')

    
    d3.select('.pseudo')
        .select('p')
		.html(function(d) { 
            if(selectValue == "5") {
                resetTraversal();
                d3.select('p').remove();
                return null;
            }
            else if(selectValue == "1") {
                bft();
                return `Algorithm BreathFirst(tree)<br>
                1) Create an empty queue q<br>
                2) temp_node = root /*start from root*/<br>
                3) Loop while temp_node is not NULL<br>
                &nbsp;&nbsp;a) print temp_node->data.<br>
                &nbsp;&nbsp;b)&nbsp;Enqueue&nbsp;temp_node’s&nbsp;children&nbsp;(first&nbsp;left&nbsp;then&nbsp;right&nbsp;children)&nbsp;to&nbsp;q<br>
                &nbsp;&nbsp;c)&nbsp;Dequeue&nbsp;a&nbsp;node&nbsp;from&nbsp;q&nbsp;and&nbsp;assign&nbsp;it’s&nbsp;value&nbsp;to&nbsp;temp_node`;
            }
            else if(selectValue == "2") {
                return `Algorithm Preorder(tree)<br>
                1. Visit the root.<br>
                2.&nbsp;Traverse&nbsp;the&nbsp;left&nbsp;subtree,&nbsp;i.e.,&nbsp;call&nbsp;Preorder(leftSubtree)<br>
                3.&nbsp;Traverse&nbsp;the&nbsp;right&nbsp;subtree,&nbsp;i.e.,&nbsp;call&nbsp;Preorder(rightSubtree)<br>`;
            }
            else if(selectValue == "3") {
                return `Algorithm Postorder(tree)<br>
                1.&nbsp;Traverse&nbsp;the&nbsp;left&nbsp;subtree,&nbsp;i.e.,&nbsp;call&nbsp;Postorder(leftSubtree)<br>
                2.&nbsp;Traverse&nbsp;the&nbsp;right&nbsp;subtree,&nbsp;i.e.,&nbsp;call&nbsp;Postorder(rightSubtree)<br>
                3. Visit the root.`;
            }
            else if(selectValue="4") {
                return `Algorithm Inorder(tree)<br>
                1.&nbsp;Traverse&nbsp;the&nbsp;left&nbsp;subtree,&nbsp;i.e.,&nbsp;call&nbsp;Inorder(leftSubtree)<br>
                2. Visit the root.<br>
                3.&nbsp;Traverse&nbsp;the&nbsp;right&nbsp;subtree,&nbsp;i.e.,&nbsp;call&nbsp;Inorder(rightSubtree)<br>`;
            }
            
            }
        )

        
        d3.select('.pseudo')
        .select('p')
		.style("background-color","rgba(255, 255, 255, 0.63)")


};