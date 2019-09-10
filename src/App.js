import React, { Component } from 'react';
import Container from './components/Container';
import Row from './components/Row';
import Column from './components/Column';
import Card from './components/Card';
import Jumbotron from './components/Jumbotron';
import Image from './components/Image';
import choices from './choices.json';

class App extends Component {
  state = {
    choices,
    clicked: [],
    highScore: 0
  };

  componentDidMount() {
    this.setState({ choices: this.randomize(this.state.choices) });
  }

  randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  // resetGame but not the high score

  resetGame = () => {
    const randomizedChoices = this.randomize(this.state.choices);

    this.setState({
      clicked: [],
      choices: randomizedChoices
    });
  };

  // handle click on image function

  handleClickOnImage = id => {
    // this is loss condition
    if (this.state.clicked.includes(id)) {
      this.resetGame();
    } else {
      // if they haven't clicked the image yet...
      // we add the id to clicked array
      // clicked: [0, 4, 2, 9]
      // clicked: [0, 4, 2, 9, 3]
      this.setState(
        prevState => ({
          clicked: [...prevState.clicked, id],
          choices: this.randomize(this.state.choices)
        }),
        () => {
          this.checkHighScore();
          this.handleWin();
        }
      );
    }
  };

  // check high score

  checkHighScore = () => {
    if (this.state.clicked.length > this.state.highScore) {
      this.setState({ highScore: this.state.clicked.length });
    }
  };

  // handle win function

  handleWin = () => {
    if (this.state.clicked.length === this.state.choices.length) {
      alert('You won!');
      this.resetGame();
    }
  };

  render() {
    console.log(this.state);
    const { clicked, choices, highScore } = this.state;
    return (
      <Container>
        <Jumbotron score={clicked.length} highScore={highScore} dark />
        <Row helper={`justify-content-center`}>
          {choices.map(({ id, name, image }) => {
            return (
              <Column key={id} md={2}>
                <Card header={name} dark>
                  <Image
                    id={id}
                    name={name}
                    image={image}
                    handleClickOnImage={this.handleClickOnImage}
                  />
                </Card>
              </Column>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
