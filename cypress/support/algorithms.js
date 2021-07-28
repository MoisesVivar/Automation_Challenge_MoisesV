export default class algorithms{
    static sorting2DArray(array,option){
        //Cloning the original array
        const data = []
        array.slice(1,array.length).forEach( row => data.push([...row]) )
        //Convert values of column 1 into numbers
        data.forEach( row => row[1]=parseFloat(row[1].slice(1,row[1].length)) )
        //Sorting
        let column = option.split(" ")[0]
        let columnIndex = array[0].indexOf(column)
        if(option.includes("(A to Z)") || option.includes("(low to high)")){
            data.sort(function(a,b){
                if(a[columnIndex] < b[columnIndex]) return -1
                if(a[columnIndex] > b[columnIndex]) return 1
                return 0
            })
        }else if(option.includes("(Z to A)") || option.includes("(high to low)")){
            data.sort(function(a,b){
                if(a[columnIndex] > b[columnIndex]) return -1
                if(a[columnIndex] < b[columnIndex]) return 1
                return 0
            })  
        }
        //Return column 1 to its original state
        data.forEach( row => {
            for (let index = 0; index < array.length; index++) {
                if(row[0] === array[index][0]) row[1] = array[index][1]
            }
        })
        return data
      }
}