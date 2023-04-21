resetGame = () => {    
    for (let i = 1; i <= 9; i++) {    
      this.refs["block" + i].classList = "";    
    }    
      
    this.setState({    
      userClick: 0,    
      computerClick: 0,    
      isWinner: false,    
      isClickable: true    
    });    
  }     