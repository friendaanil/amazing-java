function Matrix(rows,cols){
     this.rows = rows;
     this.cols = cols;
     this.matrix = [];
     for(let i=0; i < this.rows; i++){
              this.matrix[i] = [];
              for(let j=0; j < this.cols; j++){
                 this.matrix[i][j] = 0;
              }
     }
}

//randomize the matrix between 0 and 1(inclusive of 0 and exclusive of 1)
Matrix.prototype.randomize = function(){
for(let i=0; i<this.rows;i++){
      for(let j=0;j<this.cols;j++){
         this.matrix[i][j] = Math.random();
      }
   }
 }


// returns a new matrix
Matrix.scalarAdd = function(matrix,n){
let result = new Matrix(matrix.rows, matrix.cols);
 for(let j=0;j<matrix.rows;j++){
   for(let k = 0; k<matrix.cols;k++){
      result.matrix[j][k] += matrix.matrix[j][k] + n;
   }
 }
  return result;
}

// scalar multiplication by a number
Matrix.scalarMultiply = function(matrix,n){

  let result = new Matrix(matrix.rows, matrix.cols);

       for(var i=0; i<matrix.rows; i++){
         for(var j=0;j<matrix.cols;j++){
           result.matrix[i][j] = matrix.matrix[i][j] * n;
         }
       }
       return result;
}

//adding two matrix element wise and returning a new matrix
Matrix.add = function(matrix1, matrix2){

  if(!(matrix1.rows == matrix2.rows && matrix1.cols == matrix2.cols)){
      console.log('errr')
      return "cannot add these two matrixes. Rows and columns should match for both matrixes"
   }
  else{
    let result = new Matrix(matrix1.rows, matrix1.cols);

     for (let i=0; i<matrix2.rows;i++){
       for(let j=0; j<matrix2.cols;j++){
         result.matrix[i][j] = matrix1.matrix[i][j] + matrix2.matrix[i][j];
       }
     }
     return result;
  }
}



//adding two matrix element wise and returning a new matrix
Matrix.subtract = function(matrix1, matrix2){
  if(!(matrix1.rows == matrix2.rows && matrix1.cols == matrix2.cols)){
      console.log('errr')
      return "cannot add these two matrixes. Rows and columns should match for both matrixes"
   }
  else{
    let result = new Matrix(matrix1.rows, matrix1.cols);

     for (let i=0; i<matrix2.rows;i++){
       for(let j=0; j<matrix2.cols;j++){
         result.matrix[i][j] = matrix1.matrix[i][j] - matrix2.matrix[i][j];
       }
     }
     return result;
  }
}





// matrix multiplication is done (dot product)
Matrix.multiply = function(matrix1, matrix2){
if(matrix1.cols != matrix2.rows){
  return "cannot multiply given tow matrixes"
}
 let result = new Matrix(matrix1.rows,matrix2.cols);
 let a = matrix1.matrix;
 let b = matrix2.matrix;
 for(let i = 0;i < result.rows;i++){
   for(let j = 0; j < result.cols;j++){
      for(let k = 0; k < matrix2.rows; k++)
      result.matrix[i][j] += a[i][k] * b[k][j];
   }
 }

  return result;
}

// matrix multiplication is done (dot product)
Matrix.elementWiseMultiplication = function(matrix1, matrix2){
if(matrix1.cols != matrix2.cols && matrix1.rows != matrix2.rows){
  return "cannot multiply element wise for given two matrixes"
}
 let result = new Matrix(matrix1.rows,matrix1.cols);
 let a = matrix1.matrix;
 let b = matrix2.matrix;
 for(let i = 0;i < result.rows;i++){
   for(let j = 0; j < result.cols;j++){
      result.matrix[i][j] += a[i][j] * b[i][j];
   }
 }

  return result;
}






// transposing the matrix
Matrix.transpose = function(matrix){
   let rows = matrix.rows;
   let cols = matrix.cols;
   let result = new Matrix(cols,rows);
   for(let i = 0;i < result.rows;i++){
     for(let j = 0;j < result.cols;j++){
               result.matrix[i][j] = matrix.matrix[j][i];
     }
   }
   return result;
}



Matrix.map = function(matrix,func){
   let result = new Matrix(matrix.rows,matrix.cols);
    for(let i=0; i < matrix.rows; i++){
      for(let j=0; j < matrix.cols; j++){
         let val = matrix.matrix[i][j];
         result.matrix[i][j] =  func(val);
    }
}
  return result;
}


Matrix.fromArray = function(arr){
   let matrix = new Matrix(arr.length,1);
   for(let i=0;i<arr.length;i++){
     matrix.matrix[i][0] = arr[i];
   }
   return matrix;
}


Matrix.toArray = function(matrix){
  let arr = [];
   for(let i=0;i<matrix.rows;i++){
        for(let j=0;j<matrix.cols;j++){
      arr.push(matrix.matrix[i][j]);
    }
   }
   return arr;
}
