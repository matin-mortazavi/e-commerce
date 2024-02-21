import event from "./event.utils";

const eventBus = {
  publish(channelName, payload) {
    event.emit(channelName, payload);
    return this;
  },

  subscribe(channelName, fn) {
    event.on(channelName, fn);
    return this;
  },

  destroy(channelName, fn) {
    event.off(channelName, fn);
    return this;
  },
};

export default eventBus;
