var bali = 0;
var alps = 0;
var nyc = 0;

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

    var q1 = $("#activities").val();
    var q2 = $("#accommodations").val();
    var q3 = $("#food").val();
    var q4 = $("#pace").val();
    var q5 = $("#transportation").val();

    if (q1 === "relax") {
      bali += 1;
    } else if (q1 === "explore") {
      alps += 1;
    } else if (q1 === "shop") {
      nyc += 1;
    }

    if (q2 === "cozy") {
      alps += 1;
    } else if (q2 === "balmy") {
      bali += 1;
    } else if (q2 === "busy") {
      nyc += 1;
    }

    if (q3 === "fruit") {
      bali += 1;
    } else if (q3 === "meat") {
      alps += 1;
    } else if (q3 === "grease") {
      nyc += 1;
    }

    if (q4 === "slow") {
      bali += 1;
    } else if (q4 === "medium") {
      alps += 1;
    } else if (q4 === "fast") {
      nyc += 1;
    }

    if (q5 === "subway") {
      nyc += 1;
    } else if (q5 === "scooter") {
      bali += 1;
    } else if (q5 === "skis") {
      alps += 1;
    }

    if (nyc > bali && nyc > alps) {
      $("#alps").hide();
      $("#bali").hide();
      $("#nyc").show();
    } else if (bali > nyc && bali > alps) {
      $("#alps").hide();
      $("#nyc").hide();
      $("#bali").show();
    } else if (alps > bali && alps > nyc) {
      $("#nyc").hide();
      $("#bali").hide();
      $("#alps").show();
    }

    if (nyc > 0 && nyc === bali) {
      $("#alps").hide();
      $("#nyc").show();
      $("#bali").show();
    } else if (alps > 0 && alps === nyc) {
      $("#bali").hide();
      $("#nyc").show();
      $("#alps").show();
    } else if (bali > 0 && bali === alps) {
      $("#nyc").hide();
      $("#alps").show();
      $("#bali").show();
    }

  });
});
