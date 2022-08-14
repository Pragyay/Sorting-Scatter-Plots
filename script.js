let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let btn = document.getElementById('btn');
let a = [];
let no_of_iterations = width;
    // add elements to array
function generateArray(){
    for(let i=0;i<no_of_iterations;i+=2){
        a.push({
            x: i,
            y: Math.random()*height,
            color: "white"
        })
    }
}

function displayElements(j){
    context.clearRect(0,0,width,height);

    for(let i=0;i<a.length-1;i++){
        let ele = a[i];
        // console.log(ele.x, ele.y);

        context.beginPath();
        context.arc(ele.x,ele.y,2,0,Math.PI*2);
        context.fillStyle = ele.color;
        context.fill();
        // context.moveTo(ele.x,ele.y);
        // context.lineTo(ele.x,height);
        // context.strokeStyle = ele.color;
        // context.stroke();
    }
    context.beginPath();
    context.moveTo(a[j].x,0);
    context.lineTo(a[j].x,height);
    context.strokeStyle = "white";
    context.lineWidth = 1;
    context.stroke();
}

function bubbleSort(arr, j){
           
    // let j;
    // for(j=0;j<a.length-i-1;j++){
        arr[j].color = "black";
        arr[j+1].color = "black";
        if(arr[j].x > arr[j+1].x){
            console.log(arr[j].x, arr[j+1].x);

            let temp_x = arr[j].x
            arr[j].x = arr[j + 1].x
            arr[j+1].x = temp_x;
            
            console.log(arr[j].x, arr[j+1].x);
            // let temp_y = arr[j].y
            // arr[j].y = arr[j + 1].y
            // arr[j+1].y= temp_y;
        }
    // }   
    
}
let i=0;
let j=0;

// flipping canvas
context.translate(width,0);
context.scale(-1,1);

generateArray();
// let a = arr
//   .map(value => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value)
// console.log(a);

// update();
console.log(a.length);

// function update(){
    
//     if(i<height){
//         bubbleSort(a, i);

//         displayElements();  

//         i+=1;

//         console.log(i);
//     }
//     requestAnimationFrame(update);
// }

function update(){

    for(let x=0;x<10;x++){
        if(i<(no_of_iterations)/2 + 10){
            if(j<a.length-i-1){
                // a[j].color = "black";
                // a[j+1].color = "black";
                // console.log(a[j].y > a[j+1].y);
                if(a[j].y > a[j+1].y){
                    // console.log(a[j].x, a[j+1].x);
                
                    let temp_y = a[j].y
                    a[j].y = a[j + 1].y
                    a[j+1].y = temp_y;
            
                    // console.log(a[j].x, a[j+1].x);
                }
                // a[j].color = "white";
                // a[j+1].color = "white";
                j+=1;
            }else{
                a[j].y = a[j].x/2;
                a[j].color = "red";
                j=0;
                i+=1;
            }
        }

    }
    
    
    displayElements(j);  

    // console.log(i,j);
    
    requestAnimationFrame(update);
}

