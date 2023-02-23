export enum AppEvents {
  RESET,
  HTTP_STATUS_401,
}

export type EventListener = () => void;
export type EventSubscription = { remove: () => void };

export class EventDispatcher {
  private listeners: { [event in AppEvents]: EventListener[] } = {
    [AppEvents.RESET]: [],
    [AppEvents.HTTP_STATUS_401]: [],
  };

  static readonly instance = new EventDispatcher();

  constructor() {
    return EventDispatcher.instance;
  }

  dispatchEvent(event: AppEvents) {
    this.listeners[event].forEach(listener => listener());
  }

  on(event: AppEvents, listener: EventListener): EventSubscription {
    this.listeners[event].push(listener);
    return { remove: () => this.removeListener(event, listener) };
  }

  removeListener(event: AppEvents, listener: EventListener) {
    const index = this.listeners[event].indexOf(listener);
    if (index !== -1) {
      this.listeners[event].splice(index, 1);
    }
  }

  removeAllEventListeners(event: AppEvents) {
    this.listeners[event] = [];
  }
}
