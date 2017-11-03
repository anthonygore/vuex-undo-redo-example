import store from './store.js';
import CanvasComponent from './canvas.js';

Vue.use(VuexUndoRedo);

new Vue({
  el: '#app',
  store,
  methods: {
    undoDraw() {
      this.undo();
      this.$refs.canvas.draw();
    },
    redoDraw() {
      this.redo();
      this.$refs.canvas.draw();
    },
  },
  components: {
    CanvasComponent
  }
});
