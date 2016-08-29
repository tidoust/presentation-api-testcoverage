var coverage = {
  'receiving-user-agent': 0,
  'constructing-a-presentationrequest': 100,
  'starting-a-presentation': {
    coverage: 80,
    comments: [
      'TODO: fix existing tests',
      'TODO: step 5 - re-entrance, not sure this can be forced though',
      'TODO: step 10 - NotFoundError, somewhat implementation-specific though',
      'TODO: step 20 - done in defaultRequest_success-manual.html, move to own test?'
    ]
  },
  'reconnecting-to-a-presentation': {
    coverage: 70,
    comments: [
      'TODO: fix existing tests',
      'TODO: step 8 - different browsing context, may be hard to test',
      'TODO: step 9.7 - connectionavailable event'
    ]
  },
  'event-handlers': {
    coverage: 50,
    comments: 'TODO: test with addEventListener form'
  },
  'getting-the-presentation-displays-availability-information': {
    coverage: 70,
    comments: [
      'TODO: step 4 - implementation-specific though',
      'TODO: step 5 - NotSupportedError, implementation-specific though',
      'TODO: step 6 - Same PresentationAvailability returned',
      'TODO: step 7 - check on true/false attributes, context-specific though'
    ]
  },
  'monitoring-the-list-of-available-presentation-displays': 0,
  'interface-presentationconnectionavailableevent': 0,
  'establishing-a-presentation-connection': 0,
  'sending-a-message-through-presentationconnection': 0,
  'receiving-a-message-through-presentationconnection': 0,
  'closing-a-presentationconnection': {
    coverage: 70,
    comments: [
      'TODO: test with connection in connected state',
      'TODO: step 1 - test with terminated connection'
    ]
  },
  'terminating-a-presentation-in-a-controlling-browsing-context': {
    coverage: 50,
    comments: [
      'TODO: fix test',
      'TODO: no terminate event if not connected',
      'TODO: terminate event with multiple browsing contexts',
      'TODO: receiving context gets closed'
    ]
  },
  'terminating-a-presentation-in-a-receiving-browsing-context': 0,
  'handling-a-termination-confirmation-in-a-controlling-user-agent': 0,
  'event-handlers-1': {
    coverage: 50,
    comments: 'TODO: tests with addEventListener form'
  },
  'creating-a-receiving-browsing-context': 0,
  'monitoring-incoming-presentation-connections': 0,
  'event-handlers-2': 0,
  'sandboxing-and-the-allow-presentation-keyword': 100
};