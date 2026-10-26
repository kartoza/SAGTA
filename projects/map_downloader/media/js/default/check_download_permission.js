lizMap.events.on({
  'uicreated': function (e) {
    // uicreated can fire more than once and clicking #button-print toggles the panel
    if (window.__printPatchInit) {
      return;
    }
    window.__printPatchInit = true;

    // Lizmap >= 3.9: <lizmap-print> only renders #print-launch once it is defined
    // and the print panel is opened afterwards, so wait for it and retry.
    customElements.whenDefined('lizmap-print').then(function () {
      const $button = $('#button-print');
      let attempts = 0;

      const ensurePrintPanel = function () {
        if ($('#print-launch').length > 0) {
          setup();
          return;
        }
        if (++attempts > 20) {
          console.warn('#print-launch button not found even after clicking #button-print');
          return;
        }
        // On the 1st and every 5th attempt (re)open the panel; if it is marked
        // open but empty, close it first so it triggers a fresh open.
        if (attempts === 1 || attempts % 5 === 0) {
          if ($button.parent().hasClass('active')) {
            $button.click();
          }
          $button.click();
        }
        setTimeout(ensurePrintPanel, 250);
      };

      ensurePrintPanel();
    });

    function setup() {
      const $original = $('#print-launch');

    const $clone = $original.clone().attr('id', 'print-launch-clone');
    $original.parent().append($clone);
    $original.hide();
    $clone.css('margin-top', 0);

    $clone.on('click', function () {
      $clone.prop('disabled', true);

      $.get('/index.php/lizmap/member')
        .then(function (data) {
          try {
            const allowed = data?.allowed;
            // SAGTA answers with this message when the token is missing, invalid or expired
            const sessionExpired = data?.detail === "Authentication credentials were not provided.";

            if (allowed) {
              $clone.hide();
              $original.show().trigger('click');

              const checkExist = setInterval(function () {
                if (!$original.hasClass('spinner')) {
                  clearInterval(checkExist);
                  $clone.show();
                  $original.hide();
                }
              }, 100);
            } else {
              if (sessionExpired) {
                alert("Your SAGTA session has expired. Please log in again.");
              } else {
                alert("You are not allowed to download maps anymore. Please upgrade to a membership.");
              }
            }
          } catch (err) {
            console.error('Error processing member response:', err);
          }
          $clone.prop('disabled', false);
        })
        .fail(function () {
          console.error('Failed to contact /index.php/lizmap/member');
          $clone.prop('disabled', false);
        });
    });
    }
  }
});
