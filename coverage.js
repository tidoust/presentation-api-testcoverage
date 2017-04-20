var coverage = {
  'controlling-user-agent': {
    coverage: 50,
    comments: [
      'TODO: check initial default value is null',
      'TODO: check attribute holds given PresentationRequest instance when set'
    ]
  },
  'receiving-user-agent': 100,
  'constructing-a-presentationrequest': 100,
  'selecting-a-presentation-display': 100,
  'starting-a-presentation-from-a-default-presentation-request': 100,
  'starting-a-presentation-connection': 100,
  'reconnecting-to-a-presentation': {
    coverage: 80,
    comments: [
      'TODO: step 4.5 - check that connection gets established',
      'TODO: step 6 - different browsing context, connectionavailable, and connection establishment (may be hard to test)'
    ]
  },
  'event-handlers': {
    coverage: 80,
    comments: 'TODO: some tests use "onxxx" form, others use "addEventListener" through EventWatcher, make sure we cover both forms'
  },
  'getting-the-presentation-displays-availability-information': 100,
  'monitoring-the-list-of-available-presentation-displays': {
    coverage: 70,
    comments: [
      'TODO: test with multiple availability URLs in the set of availability objects',
      'TODO: test with multiple presentation displays (test user may not have multiple displays at hand though)'
    ]
  },
  'interface-presentationconnectionavailableevent': 100,
  'establishing-a-presentation-connection': {
    coverage: 90,
    comments: [
      'TODO: step 4 - but probably impossible as there is no way to force an error',
      'Note algorithm will also be checked in reconnect scenarios once steps 4.5 and 6 of reconnect algorithms get checked'
    ]
  },
  'sending-a-message-through-presentationconnection': 100,
  'receiving-a-message-through-presentationconnection': 100,
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
  'terminating-a-presentation-in-a-receiving-browsing-context': 100,
  'handling-a-termination-confirmation-in-a-controlling-user-agent': 100,
  'event-handlers-1': {
    coverage: 90,
    comments: 'TODO: make sure tests cover addEventListener and onxxx form'
  },
  'creating-a-receiving-browsing-context': 100,
  'monitoring-incoming-presentation-connections': 100,
  'event-handlers-2': {
    coverage: 90,
    comments: 'TODO: make sure tests cover addEventListener and onxxx form'
  },
  'sandboxing-and-the-allow-presentation-keyword': 100
};