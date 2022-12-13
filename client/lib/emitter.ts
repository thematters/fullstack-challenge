import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

const Emitter = {
  on: (event: any, fn: any) => eventEmitter.on(event, fn),
  off: (event: any, fn: any) => eventEmitter.off(event, fn),
  once: (event: any, fn: any) => eventEmitter.once(event, fn),
  emit: (event: any, payload: any) => eventEmitter.emit(event, payload),
}

Object.freeze(Emitter);

export default Emitter;
