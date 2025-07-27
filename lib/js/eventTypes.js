
export const EventTypes = Object.freeze({
  // Mouse Events
  CLICK: "click",
  DBLCLICK: "dblclick",
  MOUSEDOWN: "mousedown",
  MOUSEUP: "mouseup",
  MOUSEMOVE: "mousemove",
  MOUSEENTER: "mouseenter",
  MOUSELEAVE: "mouseleave",
  MOUSEOVER: "mouseover",
  MOUSEOUT: "mouseout",
  CONTEXTMENU: "contextmenu",
  AUXCLICK: "auxclick",
  WHEEL: "wheel",

  // Touch Events
  TOUCHSTART: "touchstart",
  TOUCHMOVE: "touchmove",
  TOUCHEND: "touchend",
  TOUCHCANCEL: "touchcancel",

  // Pointer Events
  POINTEROVER: "pointerover",
  POINTERENTER: "pointerenter",
  POINTERDOWN: "pointerdown",
  POINTERMOVE: "pointermove",
  POINTERUP: "pointerup",
  POINTERCANCEL: "pointercancel",
  POINTEROUT: "pointerout",
  POINTERLEAVE: "pointerleave",
  GOTPOINTERCAPTURE: "gotpointercapture",
  LOSTPOINTERCAPTURE: "lostpointercapture",

  // Keyboard Events
  KEYDOWN: "keydown",
  KEYUP: "keyup",
  KEYPRESS: "keypress",

  // Composition Events
  COMPOSITIONSTART: "compositionstart",
  COMPOSITIONUPDATE: "compositionupdate",
  COMPOSITIONEND: "compositionend",

  // Clipboard Events
  COPY: "copy",
  CUT: "cut",
  PASTE: "paste",

  // Focus Events
  FOCUS: "focus",
  BLUR: "blur",
  FOCUSIN: "focusin",
  FOCUSOUT: "focusout",

  // Form & Input Events
  INPUT: "input",
  CHANGE: "change",
  SUBMIT: "submit",
  RESET: "reset",
  INVALID: "invalid",
  FORMDATA: "formdata",

  // UI Events
  LOAD: "load",
  UNLOAD: "unload",
  BEFOREUNLOAD: "beforeunload",
  RESIZE: "resize",
  SCROLL: "scroll",
  ERROR: "error",

  // Drag & Drop Events
  DRAG: "drag",
  DRAGSTART: "dragstart",
  DRAGEND: "dragend",
  DRAGENTER: "dragenter",
  DRAGLEAVE: "dragleave",
  DRAGOVER: "dragover",
  DROP: "drop",

  // Media Events
  PLAY: "play",
  PAUSE: "pause",
  ENDED: "ended",
  VOLUMECHANGE: "volumechange",
  TIMEUPDATE: "timeupdate",
  DURATIONCHANGE: "durationchange",
  LOADEDDATA: "loadeddata",
  LOADEDMETADATA: "loadedmetadata",
  PROGRESS: "progress",
  SEEKED: "seeked",
  SEEKING: "seeking",
  STALLED: "stalled",
  SUSPEND: "suspend",
  WAITING: "waiting",
  RATECHANGE: "ratechange",
  CANPLAY: "canplay",
  CANPLAYTHROUGH: "canplaythrough",

  // Animation Events
  ANIMATIONSTART: "animationstart",
  ANIMATIONEND: "animationend",
  ANIMATIONITERATION: "animationiteration",

  // Transition Events
  TRANSITIONSTART: "transitionstart",
  TRANSITIONEND: "transitionend",
  TRANSITIONCANCEL: "transitioncancel",
  TRANSITIONRUN: "transitionrun",

  // Network Events
  ONLINE: "online",
  OFFLINE: "offline",

  // Print Events
  BEFOREPRINT: "beforeprint",
  AFTERPRINT: "afterprint",

  // Misc Events
  MESSAGE: "message",
  OPEN: "open",
  CLOSE: "close",

  // Observer Events (Manual triggering)
  MUTATION_OBSERVER: "mutation",
  INTERSECTION_OBSERVER: "intersection",
});
