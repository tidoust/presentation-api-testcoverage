var tests = [
  {
    url: 'controlling-ua/defaultRequest_success-manual.html',
    checks: [
      '#controlling-user-agent',
      '#starting-a-presentation-from-a-default-presentation-request',
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
    url: 'controlling-ua/getAvailability_sandboxing_success.html',
    checks: [
      '#getting-the-presentation-displays-availability-information',
      '#sandboxing-and-the-allow-presentation-keyword'
    ]
  },
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
      '#starting-a-presentation-connection',
      '#establishing-a-presentation-connection',
      '#event-handlers-1'
    ]
  },
  {
    url: 'controlling-ua/PresentationConnection_onmessage-manual.html',
    checks: [
      '#receiving-a-message-through-presentationconnection',
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
    url: 'controlling-ua/PresentationConnection_send-manual.html',
    checks: '#sending-a-message-through-presentationconnection'
  },
  {
    url: 'controlling-ua/PresentationRequest_error.html',
    checks: '#constructing-a-presentationrequest'
  },
  {
    url: 'controlling-ua/PresentationRequest_mixedcontent.https.html',
    checks: '#constructing-a-presentationrequest',
    comments: 'step 7'
  },
  {
    url: 'controlling-ua/PresentationRequest_mixedcontent_multiple.https.html',
    checks: '#constructing-a-presentationrequest',
    comments: 'step 7'
  },
  {
    url: 'controlling-ua/PresentationRequest_onconnectionavailable-manual.html',
    checks: [
      '#starting-a-presentation-connection',
      '#event-handlers',
      '#interface-presentationconnectionavailableevent'
    ],
    comments: 'step 9'
  },
  {
    url: 'controlling-ua/PresentationRequest_sandboxing_error.html',
    checks: '#constructing-a-presentationrequest',
    comments: 'step 1'
  },
  {
    url: 'controlling-ua/PresentationRequest_sandboxing_success.html',
    checks: '#constructing-a-presentationrequest',
    comments: 'step 1'
  },
  {
    url: 'controlling-ua/PresentationRequest_success.html',
    checks: '#constructing-a-presentationrequest'
  },
  {
    url: 'controlling-ua/reconnectToPresentation_notfound_error.html ',
    checks: '#reconnecting-to-a-presentation',
    comments: 'step 7'
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
    checks: '#selecting-a-presentation-display',
    comments: 'step 10'
  },
  {
    url: 'controlling-ua/startNewPresentation_displaynotfound-manual.html',
    checks: '#selecting-a-presentation-display',
    comments: 'step 9'
  },
  {
    url: 'controlling-ua/startNewPresentation_error.html',
    checks: '#selecting-a-presentation-display',
    comments: 'step 1'
  },
  {
    url: 'controlling-ua/startNewPresentation_sandboxing_success-manual.html',
    checks: [
      '#starting-a-presentation-connection',
      '#sandboxing-and-the-allow-presentation-keyword',
    ]
  },
  {
    url: 'controlling-ua/startNewPresentation_success-manual.html',
    checks: [
      '#selecting-a-presentation-display',
      '#starting-a-presentation-connection',
      '#event-handlers',
      '#interface-presentationconnectionavailableevent',
      '#establishing-a-presentation-connection'
    ]
  },
  {
    url: 'controlling-ua/startNewPresentation_unsettledpromise-manual.html',
    checks: '#selecting-a-presentation-display',
    comments: 'step 3'
  },
  {
    url: 'receiving-ua/PresentationReceiver_create-manual.html',
    checks: [
      '#receiving-user-agent',
      '#creating-a-receiving-browsing-context'
    ]
  }
];
