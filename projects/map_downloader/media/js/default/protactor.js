var lizProtractor = function () {
    const svgMarkup = `
      <?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" width="505" height="505"
          viewBox="-252.5 -252.5 505 505"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle r="250" opacity=".05"/>
        <g id="scale" stroke="#000000" stroke-linecap="round">
          <path id="deg10" d="m0-250v40 m0,420v40 m-250-250h40 m420,0h40"/>
          <path id="deg5"  transform="rotate(5)"
                d="m0-250v20 m0,460v20 m-250-250h20 m460,0h20"/>
          <path id="deg1"  transform="rotate(1)"
                d="m0-250v10 m0,480v10 m-250-250h10 m480,0h10"/>
          <use xlink:href="#deg1" transform="rotate(1)"/>
          <use xlink:href="#deg1" transform="rotate(2)"/>
          <use xlink:href="#deg1" transform="rotate(3)"/>
          <use xlink:href="#deg1" transform="rotate(5)"/>
          <use xlink:href="#deg1" transform="rotate(6)"/>
          <use xlink:href="#deg1" transform="rotate(7)"/>
          <use xlink:href="#deg1" transform="rotate(8)"/>
        </g>
        <use xlink:href="#scale" transform="rotate(10)"/>
        <use xlink:href="#scale" transform="rotate(20)"/>
        <use xlink:href="#scale" transform="rotate(30)"/>
        <use xlink:href="#scale" transform="rotate(40)"/>
        <use xlink:href="#scale" transform="rotate(50)"/>
        <use xlink:href="#scale" transform="rotate(60)"/>
        <use xlink:href="#scale" transform="rotate(70)"/>
        <use xlink:href="#scale" transform="rotate(80)"/>
        <g fill="none" stroke="#808080">
          <path d="m-250,0h500 m-250-250v500" stroke="#008000"/>
          <path d="m-250,0h500 m-250-250v500" stroke="#f00" transform="rotate(45)"/>
          <circle r="200"/>
          <circle r="150"/>
          <circle r="100"/>
          <circle r="50"/>
          <circle r="250" stroke="#000"/>
        </g>
        <g id="labels"
          font-size="18"
          fill="#000"
          text-anchor="middle"
          dominant-baseline="middle">
          <text transform="translate(0,-200)">0</text>
          <text transform="rotate(10) translate(0,-200) rotate(-10)">10</text>
          <text transform="rotate(20) translate(0,-200) rotate(-20)">20</text>
          <text transform="rotate(30) translate(0,-200) rotate(-30)">30</text>
          <text transform="rotate(40) translate(0,-200) rotate(-40)">40</text>
          <text transform="rotate(50) translate(0,-200) rotate(-50)">50</text>
          <text transform="rotate(60) translate(0,-200) rotate(-60)">60</text>
          <text transform="rotate(70) translate(0,-200) rotate(-70)">70</text>
          <text transform="rotate(80) translate(0,-200) rotate(-80)">80</text>
          <text transform="rotate(90) translate(0,-200) rotate(-90)">90</text>
          <text transform="rotate(100) translate(0,-200) rotate(-100)">100</text>
          <text transform="rotate(110) translate(0,-200) rotate(-110)">110</text>
          <text transform="rotate(120) translate(0,-200) rotate(-120)">120</text>
          <text transform="rotate(130) translate(0,-200) rotate(-130)">130</text>
          <text transform="rotate(140) translate(0,-200) rotate(-140)">140</text>
          <text transform="rotate(150) translate(0,-200) rotate(-150)">150</text>
          <text transform="rotate(160) translate(0,-200) rotate(-160)">160</text>
          <text transform="rotate(170) translate(0,-200) rotate(-170)">170</text>
          <text transform="rotate(180) translate(0,-200) rotate(-180)">180</text>
          <text transform="rotate(190) translate(0,-200) rotate(-190)">190</text>
          <text transform="rotate(200) translate(0,-200) rotate(-200)">200</text>
          <text transform="rotate(210) translate(0,-200) rotate(-210)">210</text>
          <text transform="rotate(220) translate(0,-200) rotate(-220)">220</text>
          <text transform="rotate(230) translate(0,-200) rotate(-230)">230</text>
          <text transform="rotate(240) translate(0,-200) rotate(-240)">240</text>
          <text transform="rotate(250) translate(0,-200) rotate(-250)">250</text>
          <text transform="rotate(260) translate(0,-200) rotate(-260)">260</text>
          <text transform="rotate(270) translate(0,-200) rotate(-270)">270</text>
          <text transform="rotate(280) translate(0,-200) rotate(-280)">280</text>
          <text transform="rotate(290) translate(0,-200) rotate(-290)">290</text>
          <text transform="rotate(300) translate(0,-200) rotate(-300)">300</text>
          <text transform="rotate(310) translate(0,-200) rotate(-310)">310</text>
          <text transform="rotate(320) translate(0,-200) rotate(-320)">320</text>
          <text transform="rotate(330) translate(0,-200) rotate(-330)">330</text>
          <text transform="rotate(340) translate(0,-200) rotate(-340)">340</text>
          <text transform="rotate(350) translate(0,-200) rotate(-350)">350</text>
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