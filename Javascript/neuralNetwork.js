function NeuralNetwork(inputNodes, hiddenNodes, output){

     this.inputNodes = inputNodes;
     this.hiddenNodes = hiddenNodes;
     this.outputNodes = output;
    // no of hidden nodes = no of rows in weight matrix
    //no of input nodes = no of cols in  weight matrix
    this.weights_ih = new Matrix(this.hiddenNodes, this.inputNodes);
    this.biases_h = new Matrix(this.hiddenNodes,1);


    this.weights_ho = new Matrix(this.outputNodes,this.hiddenNodes);
    this.biases_o = new Matrix(this.outputNodes,1);


    this.weights_ih.randomize();
    this.biases_h.randomize();


    this.weights_ho.randomize()
    this.biases_o.randomize()

  }



  function sigmoid(input){
      return 1/(1+Math.exp(-input));
  }

  function sigmoidDerivate(y){
    // sigmoid should already be applied on y
       return y*(1-y);
  }

NeuralNetwork.prototype.feedforward = function (input_arr){
     let inputs = Matrix.fromArray(input_arr);
     let outputHidden = Matrix.multiply(this.weights_ih,inputs);
     let outputHiddenBiases = Matrix.add(outputHidden,this.biases_h);
     //activation function
     let outputHiddenBiasesSigmoid = Matrix.map(outputHiddenBiases,sigmoid);
     let outputFinal = Matrix.multiply(this.weights_ho,outputHiddenBiasesSigmoid);
     let outPutFinalBiases = Matrix.add(outputFinal,this.biases_o);
     let outPutFinalBiasesSigmoid = Matrix.map(outPutFinalBiases,sigmoid);
     return outPutFinalBiasesSigmoid;
}

NeuralNetwork.prototype.train = function(inputs_arr, target_arr){
        let learningRate = 0.2;
        let targets = Matrix.fromArray(target_arr);
        let inputs = Matrix.fromArray(inputs_arr);

        let outputHidden = Matrix.multiply(this.weights_ih,inputs);
        let outputHiddenBiases = Matrix.add(outputHidden,this.biases_h);
        let outputHiddenBiasesSigmoid = Matrix.map(outputHiddenBiases,sigmoid);


        let outputFinal = Matrix.multiply(this.weights_ho,outputHiddenBiasesSigmoid);
        let outPutFinalBiases = Matrix.add(outputFinal,this.biases_o);
        let outPutFinalBiasesSigmoid = Matrix.map(outPutFinalBiases,sigmoid);

        let outputErrors = Matrix.subtract(targets,outPutFinalBiasesSigmoid);






        let weight_ho_t = Matrix.transpose(this.weights_ho);
        let hiddenErrors = Matrix.multiply(weight_ho_t,outputErrors);


        let gradientOfOutputs = Matrix.map(outPutFinalBiasesSigmoid,sigmoidDerivate);
        let outputHiddenBiasesSigmoidTranspose = Matrix.transpose(outputHiddenBiasesSigmoid);




        let temp1 = Matrix.elementWiseMultiplication(outputErrors,gradientOfOutputs);
        // need to check from here
        let temp2 = Matrix.scalarMultiply(temp1,learningRate);
        let deltaWeights_ho = Matrix.multiply(temp2,outputHiddenBiasesSigmoidTranspose);

        // console.table(targets.matrix);
        // console.table(outPutFinalBiasesSigmoid.matrix);
        // console.table(outputErrors.matrix)
        //
        // console.table(this.weights_ho.matrix)

        this.weights_ho = Matrix.add(deltaWeights_ho,this.weights_ho);

       //  console.table(this.weights_ho.matrix)
       //
       // console.log('===================================')


         let temp11 = Matrix.elementWiseMultiplication(outputErrors,gradientOfOutputs);
         let temp12 = Matrix.scalarMultiply(temp11,learningRate);



        this.biases_o = Matrix.add(temp12,this.biases_o);


        let hiddenOutputsGradient = Matrix.map(outputHiddenBiasesSigmoid,sigmoidDerivate);
        let inputsTranspose = Matrix.transpose(inputs);

        let temp3 = Matrix.elementWiseMultiplication(hiddenErrors,hiddenOutputsGradient);
        let temp4 = Matrix.scalarMultiply(temp3,learningRate);
        let deltaWeights_ih = Matrix.multiply(temp4,inputsTranspose);


        this.weights_ih = Matrix.add(deltaWeights_ih,this.weights_ih);
        let temp21 = Matrix.elementWiseMultiplication(hiddenErrors,hiddenOutputsGradient);
        let deltaBiases_ih = Matrix.scalarMultiply(temp21,learningRate);


        this.biases_h = Matrix.add(deltaBiases_ih,this.biases_h);



}



function setup1(){


//
// //console.table(nn.feedforward([0,1]).matrix);
// console.table(nn.feedforward([1,0]).matrix);
// console.table(nn.feedforward([1,1]).matrix);
// console.table(nn.feedforward([0,0]).matrix);
// console.table(nn.feedforward([1,1]).matrix);
// console.table(nn.feedforward([1,0]).matrix);
// console.table(nn.feedforward([0,1]).matrix);


}
