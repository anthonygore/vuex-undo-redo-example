export default {
  template: `<canvas id="canvas" @click="clicked"></canvas>`,
  mounted() {
    let canvas = this.$el;
    canvas.width = 400;
    canvas.height = 400;
    let context = canvas.getContext('2d');
    context.translate(0.5, 0.5);
  },
  methods: {
    drawLine(x1, y1, x2, y2) {
      let context = this.$el.getContext('2d');
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.stroke();
    },
    drawCircle(x, y) {
      let context = this.$el.getContext('2d');
      context.beginPath();
      context.arc(x, y, 5, 0, 2 * Math.PI, false);
      context.fillStyle = 'yellow';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.stroke();
    },
    getMousePos(event) {
      var canvas = this.$el;
      var rect = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
      };
    },
    clicked(event) {
      this.$store.commit('addCoords', this.getMousePos(event));
      this.draw();
      this.undone = [];
    },
    draw() {
      canvas.width = 400;
      this.$store.state.coords.forEach((coords, i) => {
        this.drawCircle(coords.x, coords.y);
        let lastCoords = this.$store.state.coords[i - 1];
        if (lastCoords) {
          this.drawLine(lastCoords.x, lastCoords.y, coords.x, coords.y)
        }
      });
    }
  }
}
