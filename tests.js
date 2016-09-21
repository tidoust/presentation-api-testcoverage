var tests = [
  {
    url: 'controlling-ua/PresentationConnection_onclosed-manual.html',
    checks: [
      '#closing-a-presentationconnection',
      '#event-handlers-1'
    ]
  },
  {
    url: 'controlling-ua/PresentationConnection_onconnected-manual.html',
    checks: [
      '#starting-a-presentation',
      '#establishing-a-presentation-connection',
      '#event-handlers-1'
    ]
  },
  {
    url: 'controlling-ua/PresentationConnection_onterminated-manual.html',
    checks: [
      '#terminating-a-presentation-in-a-controlling-browsing-context',
      '#event-handlers-1'
    ],
    comments: 'Test invalid, see: https://github.com/w3c/web-platform-tests/issues/3522'
  },
  {
    url: 'controlling-ua/PresentationRequest_error.html',
    checks: '#constructing-a-presentationrequest'
  },
  {
    url: 'controlling-ua/PresentationRequest_success.html',
    checks: '#constructing-a-presentationrequest'
  },
  {
    url: 'controlling-ua/defaultRequest_success-manual.html',
    checks: [
      '#controlling-user-agent',
      '#starting-a-presentation',
      '#event-handlers'
    ]
  },
  {
    url: 'controlling-ua/getAvailability.html',
    checks: [
      '#getting-the-presentation-displays-availability-information',
      '#the-list-of-available-presentation-displays'
    ]
  },
  {
    url: 'controlling-ua/getAvailability_mixedcontent.https.html',
    checks: '#getting-the-presentation-displays-availability-information'
  },
  {
    url: 'controlling-ua/getAvailability_sandboxing_error.html',
    checks: [
      '#getting-the-presentation-displays-availability-information',
      '#sandboxing-and-the-allow-presentation-keyword'
    ]
  },
  {
    url: 'controlling-ua/getAvailability_sandboxing_success.html',
    checks: [
      '#getting-the-presentation-displays-availability-information',
      '#sandboxing-and-the-allow-presentation-keyword'
    ]
  },
  {
    url: 'controlling-ua/reconnectToPresentation_error-manual.html',
    checks: '#reconnecting-to-a-presentation',
    comments: [
      'step 10',
      'could be automated, see: https://github.com/w3c/web-platform-tests/issues/3524'
    ]
  },
  {
    url: 'controlling-ua/reconnectToPresentation_success-manual.html',
    checks: '#reconnecting-to-a-presentation'
  },
  {
    url: 'controlling-ua/reconnectToPresentation_mixedcontent.https.html',
    checks: '#reconnecting-to-a-presentation'
  },
  {
    url: 'controlling-ua/reconnectToPresentation_sandboxing_error.html',
    checks: [
      '#reconnecting-to-a-presentation',
      '#sandboxing-and-the-allow-presentation-keyword'
    ]
  },
  {
    url: 'controlling-ua/reconnectToPresentation_sandboxing_success.html',
    checks: [
      '#reconnecting-to-a-presentation',
      '#sandboxing-and-the-allow-presentation-keyword'
    ]
  },
  {
    url: 'controlling-ua/startNewPresentation_error-manual.html',
    checks: '#starting-a-presentation',
    comments: [
      'step 11',
      'test invalid, see: https://github.com/w3c/web-platform-tests/issues/3527'
    ]
  },
  {
    url: 'controlling-ua/startNewPresentation_error.html',
    checks: '#starting-a-presentation',
    comments: 'step 1'
  },
  {
    url: 'controlling-ua/startNewPresentation_success-manual.html',
    checks: '#starting-a-presentation',
    comments: 'Test invalid, see: https://github.com/w3c/web-platform-tests/issues/3521'
  },
  {
    url: 'controlling-ua/startNewPresentation_mixedcontent-manual.https.html',
    checks: '#starting-a-presentation'
  },
  {
    url: 'controlling-ua/startNewPresentation_mixedcontent_multiple-manual.https.html',
    checks: '#starting-a-presentation'
  },
  {
    url: 'controlling-ua/startNewPresentation_sandboxing_error-manual.html',
    checks: [
      '#starting-a-presentation',
      '#sandboxing-and-the-allow-presentation-keyword'
    ]
  },
  {
    url: 'controlling-ua/startNewPresentation_sandboxing_success-manual.html',
    checks: [
      '#starting-a-presentation',
      '#sandboxing-and-the-allow-presentation-keyword',
    ]
  }
];
