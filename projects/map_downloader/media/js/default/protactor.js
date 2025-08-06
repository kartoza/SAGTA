var lizProtractor = function () {
    const svgMarkup = `
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg
        version="1.1"
        width="505"
        height="505"
        viewBox="-252.5 -252.5 505 505"
        id="svg339"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <defs
          id="defs343" />
        <circle
          r="250"
          opacity="0.05"
          id="circle214"
          cx="0"
          cy="0" />
        <g
          id="scale"
          stroke="#000000"
          stroke-linecap="round"
          style="display:inline">
          <path
            id="deg10"
            d="m 0,-250 v 40 m 0,420 v 40 M -250,0 h 40 m 420,0 h 40" />
          <path
            id="deg5"
            transform="rotate(5)"
            d="m 0,-250 v 20 m 0,460 v 20 M -250,0 h 20 m 460,0 h 20" />
          <path
            id="deg1"
            transform="rotate(1)"
            d="m 0,-250 v 10 m 0,480 v 10 M -250,0 h 10 m 480,0 h 10" />
          <use
            xlink:href="#deg1"
            transform="rotate(1)"
            id="use219" />
          <use
            xlink:href="#deg1"
            transform="rotate(2)"
            id="use221" />
          <use
            xlink:href="#deg1"
            transform="rotate(3)"
            id="use223" />
          <use
            xlink:href="#deg1"
            transform="rotate(5)"
            id="use225" />
          <use
            xlink:href="#deg1"
            transform="rotate(6)"
            id="use227" />
          <use
            xlink:href="#deg1"
            transform="rotate(7)"
            id="use229" />
          <use
            xlink:href="#deg1"
            transform="rotate(8)"
            id="use231" />
        </g>
        <use
          xlink:href="#scale"
          transform="rotate(10)"
          id="use234" />
        <use
          xlink:href="#scale"
          transform="rotate(20)"
          id="use236" />
        <use
          xlink:href="#scale"
          transform="rotate(30)"
          id="use238" />
        <use
          xlink:href="#scale"
          transform="rotate(40)"
          id="use240" />
        <use
          xlink:href="#scale"
          transform="rotate(50)"
          id="use242" />
        <use
          xlink:href="#scale"
          transform="rotate(60)"
          id="use244" />
        <use
          xlink:href="#scale"
          transform="rotate(70)"
          id="use246" />
        <use
          xlink:href="#scale"
          transform="rotate(80)"
          id="use248"
          style="display:inline" />
        <g
          fill="none"
          stroke="#808080"
          id="g264"
          style="display:inline">
          <path
            d="M -250,0 H 250 M 0,-250 v 500"
            stroke="#008000"
            id="path250" />
          <path
            d="M -250,0 H 250 M 0,-250 v 500"
            stroke="#ff0000"
            transform="rotate(45)"
            id="path252" />
          <circle
            r="200"
            id="circle254"
            cx="0"
            cy="0" />
          <circle
            r="150"
            id="circle256"
            cx="0"
            cy="0" />
          <circle
            r="100"
            id="circle258"
            cx="0"
            cy="0" />
          <circle
            r="50"
            id="circle260"
            cx="0"
            cy="0" />
          <circle
            r="250"
            stroke="#000000"
            id="circle262"
            cx="0"
            cy="0" />
        </g>
        <g
          id="labels"
          font-size="18px"
          fill="#000000"
          text-anchor="middle"
          dominant-baseline="middle"
          style="display:inline">
          <text
            transform="translate(0,-200)"
            id="text266">0</text>
          <text
            transform="translate(34.729636,-196.96155)"
            id="text268">10</text>
          <text
            transform="translate(68.404029,-187.93852)"
            id="text270">20</text>
          <text
            transform="translate(100,-173.20508)"
            id="text272">30</text>
          <text
            transform="translate(128.55752,-153.20889)"
            id="text274">40</text>
          <text
            transform="translate(153.20889,-128.55752)"
            id="text276">50</text>
          <text
            transform="translate(173.20508,-100)"
            id="text278">60</text>
          <text
            transform="translate(187.93852,-68.404029)"
            id="text280">70</text>
          <text
            transform="translate(196.96155,-34.729636)"
            id="text282">80</text>
          <text
            transform="translate(200)"
            id="text284">90</text>
          <text
            transform="translate(196.96155,34.729636)"
            id="text286">100</text>
          <text
            transform="translate(187.93852,68.404029)"
            id="text288">110</text>
          <text
            transform="translate(173.20508,100)"
            id="text290">120</text>
          <text
            transform="translate(153.20889,128.55752)"
            id="text292">130</text>
          <text
            transform="translate(128.55752,153.20889)"
            id="text294">140</text>
          <text
            transform="translate(100,173.20508)"
            id="text296">150</text>
          <text
            transform="translate(68.404029,187.93852)"
            id="text298">160</text>
          <text
            transform="translate(34.729636,196.96155)"
            id="text300">170</text>
          <text
            transform="translate(0,200)"
            id="text302">180</text>
          <text
            transform="translate(-34.729636,196.96155)"
            id="text304">190</text>
          <text
            transform="translate(-68.404029,187.93852)"
            id="text306">200</text>
          <text
            transform="translate(-100,173.20508)"
            id="text308">210</text>
          <text
            transform="translate(-128.55752,153.20889)"
            id="text310">220</text>
          <text
            transform="translate(-153.20889,128.55752)"
            id="text312">230</text>
          <text
            transform="translate(-173.20508,100)"
            id="text314">240</text>
          <text
            transform="translate(-187.93852,68.404029)"
            id="text316">250</text>
          <text
            transform="translate(-196.96155,34.729636)"
            id="text318">260</text>
          <text
            transform="translate(-200)"
            id="text320">270</text>
          <text
            transform="translate(-196.96155,-34.729636)"
            id="text322">280</text>
          <text
            transform="translate(-187.93852,-68.404029)"
            id="text324">290</text>
          <text
            transform="translate(-173.20508,-100)"
            id="text326">300</text>
          <text
            transform="translate(-153.20889,-128.55752)"
            id="text328">310</text>
          <text
            transform="translate(-128.55752,-153.20889)"
            id="text330">320</text>
          <text
            transform="translate(-100,-173.20508)"
            id="text332">330</text>
          <text
            transform="translate(-68.404029,-187.93852)"
            id="text334">340</text>
          <text
            transform="translate(-34.729636,-196.96155)"
            id="text336">350</text>
        </g>
        <g
          id="g3037"
          style="display:inline">
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:29.3333px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-11.923986"
            y="-152.30023"
            id="text557"><tspan
              id="tspan555"
              x="-11.923986"
              y="-152.30023"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:29.3333px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">N</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:29.3333px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-8.1693239"
            y="173.27391"
            id="text557-1"><tspan
              id="tspan555-8"
              x="-8.1693239"
              y="173.27391"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:29.3333px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">S</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:29.3333px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="151.96748"
            y="10.471988"
            id="text557-7"><tspan
              id="tspan555-9"
              x="151.96748"
              y="10.471988"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:29.3333px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">E</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:29.3333px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-179.6172"
            y="10.471988"
            id="text557-2"><tspan
              id="tspan555-0"
              x="-179.6172"
              y="10.471988"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:29.3333px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">W</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:24px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-16.827648"
            y="-140.97096"
            id="text557-75"
            transform="rotate(45)"><tspan
              id="tspan555-92"
              x="-16.827648"
              y="-140.97096"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:24px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">NE</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:24px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-18.733904"
            y="158.45653"
            id="text557-75-9"
            transform="rotate(45)"><tspan
              id="tspan555-92-7"
              x="-18.733904"
              y="158.45653"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:24px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">SW</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:24px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-21.834599"
            y="-141.46111"
            id="text557-75-3"
            transform="rotate(-45)"><tspan
              id="tspan555-92-6"
              x="-21.834599"
              y="-141.46111"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:24px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">NW</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:24px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-12.942463"
            y="158.48698"
            id="text557-75-3-9"
            transform="rotate(-45)"><tspan
              id="tspan555-92-6-3"
              x="-12.942463"
              y="158.48698"
              style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:24px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">SE</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-19.222189"
            y="-64.659035"
            id="text557-75-3-1"
            transform="rotate(22.5)"><tspan
              id="tspan555-92-6-9"
              x="-19.222189"
              y="-64.659035"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">NNE</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-19.118078"
            y="81.280899"
            id="text557-75-3-1-2"
            transform="rotate(22.5)"><tspan
              id="tspan555-92-6-9-06"
              x="-19.118078"
              y="81.280899"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">SSW</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-14.318"
            y="-64.421745"
            id="text557-75-3-1-8"
            transform="rotate(67.5)"><tspan
              id="tspan555-92-6-9-4"
              x="-14.318"
              y="-64.421745"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">ENE</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-20.28611"
            y="83.040138"
            id="text557-75-3-1-8-1"
            transform="rotate(67.5)"><tspan
              id="tspan555-92-6-9-4-5"
              x="-20.28611"
              y="83.040138"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">WSW</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-22.28723"
            y="-65.29657"
            id="text557-75-3-1-5"
            transform="rotate(-22.5)"><tspan
              id="tspan555-92-6-9-0"
              x="-22.28723"
              y="-65.29657"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">NNW</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-16.947437"
            y="80.53949"
            id="text557-75-3-1-5-6"
            transform="rotate(-22.5)"><tspan
              id="tspan555-92-6-9-0-3"
              x="-16.947437"
              y="80.53949"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">SSE</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-25.768593"
            y="-67.319656"
            id="text557-75-3-1-3"
            transform="rotate(-67.5,2.463482e-6,-4.6348199e-7)"><tspan
              id="tspan555-92-6-9-6"
              x="-25.768593"
              y="-67.319656"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">WNW</tspan></text>
          <text
            xml:space="preserve"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;fill:#020202;fill-opacity:1;fill-rule:evenodd;stroke-width:1.44;stroke-linecap:round;stroke-linejoin:round"
            x="-15.374779"
            y="80.248352"
            id="text557-75-3-1-3-1"
            transform="rotate(-67.5,2.463482e-6,-4.6348199e-7)"><tspan
              id="tspan555-92-6-9-6-0"
              x="-15.374779"
              y="80.248352"
              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;font-family:'Arial Black';-inkscape-font-specification:'Arial Black, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">ESE</tspan></text>
        </g>
      </svg>`;

    const $overlay = $('<div/>', {
      id  : 'liz-protractor',
      html: svgMarkup,
      css : {
          position      : 'absolute',
          left          : 0,
          top           : 0,
          display       : 'none',
          zIndex        : 999,
          cursor        : 'move',
          userSelect    : 'none',
          pointerEvents : 'auto'
      }
    }).appendTo('#map') 
      .draggable({ containment : '#map' });

    function addProtractorMenuItem () {
        const $menuList = $('#mapmenu ul.nav.nav-list').first();
        if (!$menuList.length) {
            console.warn('lizProtractor: #mapmenu not found');
            return;
        }
        if ($('#btn-protractor').length) {
            return;
        }
        const $li = $('<li/>', { class: 'protractor nav-dock' });
        const $a  = $('<a/>', {
            id:                'btn-protractor',
            href:              '#',
            rel:               'tooltip',
            style:          'padding-left: 8px; padding-right: 1px;',
            'data-original-title' : 'Toggle protractor',
            'data-placement'   : 'right',
            'data-container'   : '#content',
            html : '<span class="icon-play-circle icon-white" style="display:inline-block; transform: scale(1.5); transform-origin: center;"></span><span class="menu-title" style="margin-left: 5px;">Protractor</span>',
            click : function (e) {
                e.preventDefault();
                $('#liz-protractor').toggle();
            }
        });
        $li.append($a);
        $menuList.append($li);
        $a.tooltip();
    }
    if (typeof lizMap !== 'undefined' && lizMap.events) {
        lizMap.events.on({
            'mapcreated': function () { addProtractorMenuItem(); }
        });
    } else {
        $(document).ready(addProtractorMenuItem);
    }
}();