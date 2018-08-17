//Dummy tree structure
var treeData = [{
    name: 60,
    children:
     [{ name: 55,
        children:[{name: 23},{name: 58}]
      },
    {
    name: 73,    
    children:[{
        name: 61,
        children: [{name:69}]
     },
     {name: 89}
    ]
    }
    ]}
];


    var index = [];

    // build the index
    for (var x in treeData) {
       index.push(x);
    }

