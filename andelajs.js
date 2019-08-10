var input=['a1','a2','a3','a4','a5','a6','a7','a8']
var add=4
var minus=3
output=[]

//output.push(input[0])
//
//for(i=1;i<input.length;i++){
//	if(i%2!=0){
//		output.push('a'+(parseInt(output[i-1].substr(1))+add))
//	}else{
//		output.push('a'+(parseInt(output[i-1].substr(1))-minus))
//	}
//}


input.map(function(item,index){
	if(index==0){
		 output.push(item)
	}else if(index%2!=0){
		output.push('a'+(parseInt(output[index-1].substr(1))+add))
	}else{
		output.push('a'+(parseInt(output[index-1].substr(1))-minus))
	}
})
console.log(output)
