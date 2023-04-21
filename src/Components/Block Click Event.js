handleClick = (index) => {    
    if (!this.state.isClickable) {    
      return;    
    }    
      
    if (this.refs["block" + index].className.length > 0) {    
      return;    
    }    
      
    if (this.state.isWinner) {    
      return;    
    }    
      
    this.refs["block" + index].className = "x";    
    this.refs["block" + index].classList.add('x');    
    this.checkForWinner();    
    this.setState({    
      userClick: parseInt(this.state.userClick) + 1,    
      isClickable: false    
    }, () => {    
      this.computerTurn(index);    
    });    
  }    