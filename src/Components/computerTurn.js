computerTurn = () => {    
    if (this.state.isWinner) {    
      return;    
    }    
      
    let notBlueOrRed = [];    
    let isAvailable = false;    
    for (let i = 1; i <= 9; i++) {    
      if (this.refs["block" + i].className.length === 0) {    
        notBlueOrRed.push(i);    
        isAvailable = true;    
      }    
    }    
      
    if (isAvailable) {    
      setTimeout(() => {    
        var randomItem = notBlueOrRed[Math.floor(Math.random() * notBlueOrRed.length)];    
        this.refs["block" + randomItem].className = "o";    
        this.refs["block" + randomItem].classList.add('o');    
        this.checkForWinner();    
        this.setState({    
          computerClick: parseInt(this.state.computerClick) + 1,    
          isClickable: true    
        });    
      }, 1000);    
    } else {    
      if (!this.state.isWinner) {    
        this.setState({    
          tieGames: parseInt(this.state.tieGames) + 1    
        }, () => {    
          setTimeout(() => {    
            this.resetGame();    
          }, 2000);    
        });    
      }    
    }    
  }   