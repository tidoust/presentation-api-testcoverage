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
    coverage: 50,
    comments: [
      'TODO: fix existing tests',
      'TODO: step 2 - mixed content test',
      'TODO: step 3 - sandboxing',
      'TODO: step 8 - different browsing context, may be hard to test',
      'TODO: step 9.7 - connectionavailable event'
    ]
  },
  'event-handlers': {
    coverage: 50,
    comments: 'TODO: test with addEventListener form'
  },
  'sending-a-message-through-presentationconnection': 0,
  'receiving-a-message-through-presentationconnection': 0,
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