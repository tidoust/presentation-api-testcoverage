var tests = [
  {
    url: 'controlling-ua/defaultRequest_success-manual.https.html',
    checks: [
      '#controlling-user-agent',
      '#starting-a-presentation-from-a-default-presentation-request',
      '#event-handlers'
    ]
  },
  {
    url: 'controlling-ua/getAvailability.https.html',
    checks: [
      '#getting-the-presentation-displays-availability-information',
      '#the-list-of-available-presentation-displays'
    ]
  },
  {
    url: 'controlling-ua/getAvailability_sandboxing_success.https.html',
    checks: [
      '#getting-the-presentation-displays-availability-information',
      '#sandboxing-and-the-allow-presentation-keyword'
    ]
  },
  {
    url: 'controlling-ua/PresentationAvailability_onchange-manual.https.html',
    checks: '#monitoring-the-list-of-available-presentation-displays'
  },
  {
    url: 'controlling-ua/PresentationConnection_onclosed-manual.https.html',
    checks: [
      '#closing-a-presentationconnection',
      '#event-handlers-1'
    ]
  },
  {
    url: 'controlling-ua/PresentationConnection_onconnected-manual.https.html',
    checks: [
      '#starting-a-presentation-connection',
      '#establishing-a-presentation-connection',
      '#event-handlers-1'
    ]
  },
  {
    url: 'controlling-ua/PresentationConnection_onmessage-manual.https.html',
    checks: [
      '#receiving-a-message-through-presentationconnection',
      '#event-handlers-1'
    ]
  },
  {
    url: 'controlling-ua/PresentationConnection_onterminated-manual.https.html',
    checks: [
      '#terminating-a-presentation-in-a-controlling-browsing-context',
      '#event-handlers-1'
    ]
  },
  {
    url: 'controlling-ua/PresentationConnection_send-manual.https.html',
    checks: '#sending-a-message-through-presentationconnection'
  },
  {
    url: 'controlling-ua/PresentationRequest_error.https.html',
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
    url: 'controlling-ua/PresentationRequest_onconnectionavailable-manual.https.html',
    checks: [
      '#starting-a-presentation-connection',
      '#event-handlers',
      '#interface-presentationconnectionavailableevent'
    ],
    comments: 'step 9'
  },
  {
    url: 'controlling-ua/PresentationRequest_sandboxing_error.https.html',
    checks: '#constructing-a-presentationrequest',
    comments: 'step 1'
  },
  {
    url: 'controlling-ua/PresentationRequest_sandboxing_success.https.html',
    checks: '#constructing-a-presentationrequest',
    comments: 'step 1'
  },
  {
    url: 'controlling-ua/PresentationRequest_success.https.html',
    checks: '#constructing-a-presentationrequest'
  },
  {
    url: 'controlling-ua/reconnectToPresentation_notfound_error.https.html ',
    checks: '#reconnecting-to-a-presentation',
    comments: 'step 7'
  },
  {
    url: 'controlling-ua/reconnectToPresentation_sandboxing_success.https.html',
    checks: [
      '#reconnecting-to-a-presentation',
      '#sandboxing-and-the-allow-presentation-keyword'
    ]
  },
  {
    url: 'controlling-ua/reconnectToPresentation_success-manual.https.html',
    checks: '#reconnecting-to-a-presentation'
  },
  {
    url: 'controlling-ua/startNewPresentation_displaynotallowed-manual.https.html',
    checks: '#selecting-a-presentation-display',
    comments: 'step 10'
  },
  {
    url: 'controlling-ua/startNewPresentation_displaynotfound-manual.https.html',
    checks: '#selecting-a-presentation-display',
    comments: 'step 9'
  },
  {
    url: 'controlling-ua/startNewPresentation_error.https.html',
    checks: '#selecting-a-presentation-display',
    comments: 'step 1'
  },
  {
    url: 'controlling-ua/startNewPresentation_sandboxing_success-manual.https.html',
    checks: [
      '#starting-a-presentation-connection',
      '#sandboxing-and-the-allow-presentation-keyword',
    ]
  },
  {
    url: 'controlling-ua/startNewPresentation_success-manual.https.html',
    checks: [
      '#selecting-a-presentation-display',
      '#starting-a-presentation-connection',
      '#event-handlers',
      '#interface-presentationconnectionavailableevent',
      '#establishing-a-presentation-connection'
    ]
  },
  {
    url: 'controlling-ua/startNewPresentation_unsettledpromise-manual.https.html',
    checks: '#selecting-a-presentation-display',
    comments: 'step 3'
  },
  {
    url: 'receiving-ua/PresentationConnectionList_onconnectionavailable-manual.https.html',
    checks: [
      '#monitoring-incoming-presentation-connections',
      '#event-handlers-2'
    ]
  },
  {
    url: 'receiving-ua/PresentationConnection_onclose-manual.https.html',
    checks: '#closing-a-presentationconnection'
  },
  {
    url: 'receiving-ua/PresentationConnection_onmessage-manual.https.html',
    checks: [
      '#receiving-a-message-through-presentationconnection',
      '#event-handlers-1'
    ]
  },
  {
    url: 'receiving-ua/PresentationConnection_send-manual.https.html',
    checks: '#sending-a-message-through-presentationconnection'
  },
  {
    url: 'receiving-ua/PresentationConnection_terminate-manual.https.html',
    checks: [
      '#terminating-a-presentation-in-a-receiving-browsing-context',
      '#handling-a-termination-confirmation-in-a-controlling-user-agent'
    ]
  },
  {
    url: 'receiving-ua/PresentationReceiver_create-manual.https.html',
    checks: [
      '#receiving-user-agent',
      '#creating-a-receiving-browsing-context'
    ]
  }
];
