checkForWinner = () => {    
    const combinationCollection = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];    
    combinationCollection.map((data) => {    
      if ((this.refs["block" + data[0]].className && this.refs["block" + data[1]].className && this.refs["block" + data[2]].className)    
        && (this.refs["block" + data[0]].className.toLowerCase() === this.refs["block" + data[1]].className.toLowerCase() && this.refs["block" + data[1]].className.toLowerCase() === this.refs["block" + data[2]].className.toLowerCase() && this.refs["block" + data[2]].className.toLowerCase() === this.refs["block" + data[0]].className.toLowerCase())) {    
        {    
          this.setState({    
            isWinner: true,    
            isUserWinnder: (this.refs["block" + data[0]].className === "x"),    
            playerWin: (this.refs["block" + data[0]].className === "x") ? (parseInt(this.state.playerWin) + 1) : this.state.playerWin,    
            computerWin: (this.refs["block" + data[0]].className === "o") ? (parseInt(this.state.computerWin) + 1) : this.state.computerWin    
          }, () => {    
            this.refs["block" + data[0]].classList.add('blink');    
            this.refs["block" + data[1]].classList.add('blink');    
            this.refs["block" + data[2]].classList.add('blink');    
            setTimeout(() => {    
              this.resetGame();    
            }, 2000);    
          });    
        }    
      }    
    });    
  }   