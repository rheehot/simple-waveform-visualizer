export class Track {
  constructor (context) {
    this.id = `track-${new Date().getTime()}`;
    this.name = this.id;
    this.audioContext = context;
    this.gainNode = this.audioContext.createGain();
    this.effects = [];
    this.sourceBuffer = this.audioContext.createBufferSource();
    this.effects = [];
  }

  setName (name) {
    this.name = name;
  }

  mute () {
    this.gainNode.gain.value = 0;
  }

  setGain (value) {
    this.gainNode.gain.value = value;
  }

  play () {
    this.sourceBuffer.loop = true;
    this.sourceBuffer.start();
  }

  addEffect (effect) {
    const lastNode = this.effects.length > 0
      ? this.effects[this.effects.length - 1].outputNode
      : this.sourceBuffer;

    lastNode.disconnect();
    lastNode.connect(effect.inputNode);
    effect.outputNode.connect(this.gainNode);

    this.effects.push(effect);
  }

  removeEffect (effect) {
    const index = this.effects(effect);
    if (!~index) {
      return;
    }

    const prevNode = index === 0
      ? this.sourceBuffer
      : this.effects[index - 1].outputNode;
    prevNode.disconnect();

    const effector = this.effects[index];
    effector.disconnect();
    this.effects.splice(index, 1);

    const targetNode = this.effects[index] || this.gainNode;
    prevNode.connect(targetNode);
  }
}