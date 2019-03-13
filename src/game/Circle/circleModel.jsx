import { Model } from "../mvc/Model.jsx";

export class CircleModel extends Model {
  setDefaultValues() {
    this.type = 'Orange';
    this.position = { x: this.HEIGH / 2, y: this.WIDTH / 2 };
    this.text = "GameOver"
  }


  moveUp() {
    this.position.y -= 1;
  }

  moveDown() {
    this.position.y += 1;
  }
  moveLeft() {
    this.position.x -= 1;
  }
  moveRight() {
    this.position.x += 1;
  }
  isWin() {
    return (
      this.position.y < 0 ||
      this.position.y > this.HEIGH ||
      this.position.x < 0 ||
      this.position.x > this.WIDTH
    );
  }
}
