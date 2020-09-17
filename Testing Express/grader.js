function grader(arr){
	var total = 0;
	for (var i =0; i <arr.length; i++){
		total = total + arr[i];
	}
	console.log( total/arr.length); 
}

var avgscores = [90,92,92,90,92,90];
grader(avgscores);