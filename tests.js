var tests = [
  {
    url: 'controlling-ua/PresentationAvailability_onchange-manual.html',
    checks: '#monitoring-the-list-of-available-presentation-displays'
  },
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
    ]
  },
  {
    url: 'controlling-ua/PresentationRequest_error.html',
    checks: '#constructing-a-presentationrequest'
  },
  {
    url: 'controlling-ua/PresentationRequest_onconnectionavailable-manual.html',
    checks: '#starting-a-presentation',
    comments: 'step 20'
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
    url: 'controlling-ua/reconnectToPresentation_mixedcontent.https.html',
    checks: '#reconnecting-to-a-presentation'
  },
  {
    url: 'controlling-ua/reconnectToPresentation_notfound_error.html ',
    checks: '#reconnecting-to-a-presentation',
    comments: [
      'step 10'
    ]
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
    url: 'controlling-ua/reconnectToPresentation_success-manual.html',
    checks: '#reconnecting-to-a-presentation'
  },
  {
    url: 'controlling-ua/startNewPresentation_displaynotallowed-manual.html',
    checks: '#starting-a-presentation',
    comments: 'step 11'
  },
  {
    url: 'controlling-ua/startNewPresentation_displaynotfound-manual.html',
    checks: '#starting-a-presentation',
    comments: 'step 10'
  },
  {
    url: 'controlling-ua/startNewPresentation_error.html',
    checks: '#starting-a-presentation',
    comments: 'step 1'
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
  },
  {
    url: 'controlling-ua/startNewPresentation_success-manual.html',
    checks: '#starting-a-presentation'
  },
  {
    url: 'controlling-ua/startNewPresentation_unsettledpromise-manual.html',
    checks: '#starting-a-presentation',
    comments: 'step 5'
  }
];
