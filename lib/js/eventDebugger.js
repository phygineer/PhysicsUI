

import { EventTypes } from './eventTypes.js';

export const EventDebugger = (() => {
  const attachedEvents = new Map();

  function listenToAll(target = document.body, filter = () => true) {
    if (!target || typeof target.addEventListener !== 'function') return;

    for (const eventType of Object.values(EventTypes)) {
      if (!filter(eventType)) continue;

      const handler = (event) => {
        console.group(`[${eventType}]`);
        console.log("Target:", event.target);
        console.log("Type:", event.type);
        console.log("Timestamp:", event.timeStamp);
        console.log("Event Object:", event);
        console.groupEnd();
      };

      target.addEventListener(eventType, handler, true);
      attachedEvents.set(eventType, { target, handler });
    }

    console.info(`[EventDebugger] Listening to ${attachedEvents.size} events on`, target);
  }

  function stopListening() {
    for (const [eventType, { target, handler }] of attachedEvents.entries()) {
      target.removeEventListener(eventType, handler, true);
    }
    const count = attachedEvents.size;
    attachedEvents.clear();
    console.info(`[EventDebugger] Stopped listening to ${count} events.`);
  }

  return {
    listenToAll,
    stopListening,
  };
})();
