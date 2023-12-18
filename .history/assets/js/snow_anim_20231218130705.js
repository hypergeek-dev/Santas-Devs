let _snowCanvas = function(obj) {
    var canvas = document.createElement("canvas");
    var betweenWrapper = document.getElementById('between_wrapper');

    if (!betweenWrapper) {
      console.error("between_wrapper element not found");
      return;
    }

    betweenWrapper.appendChild(canvas);

    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.backgroundColor = obj.background || "transparent";
    
    var fillStyle = obj.snowColor || "#a6a6a6";
    var ctx = canvas.getContext("2d");

    var maxSpeed = obj.maxSpeed || 3.5,
        minSpeed = obj.minSpeed || 0.3,
        count = obj.amount || 150,
        rMax = obj.rMax || 4,
        rMin = obj.rMin || 1,
        W, H;

    function setHeightWidth() {
        W = betweenWrapper.clientWidth;
        H = betweenWrapper.clientHeight;
        canvas.width = W;
        canvas.height = H;
    }

    setHeightWidth();
    window.onresize = setHeightWidth;

    var snowGroup = [];
    for (var i = 0; i < count; i++) {
        snowGroup.push(initialEverySnow());
    }

    function initialEverySnow() {
        return {
            x: Math.random() * W - rMax,
            y: Math.random() * H - rMax,
            r: Math.random() * (rMax - rMin) + rMin,
            s: Math.random() * (maxSpeed - minSpeed) + minSpeed,
            xChangeRate: Math.random() * 1.6 - 0.8
        };
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        ctx.beginPath();

        var p;
        for (var i = 0; i < snowGroup.length; i++) {
            p = snowGroup[i];
            ctx.fillStyle = fillStyle;
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        update();
    }

    var delta = 0;
    function update() {
        delta += 0.01;
        var p;
        for (var i = 0; i < snowGroup.length; i++) {
            p = snowGroup[i];
            p.y += p.s;
            p.x += Math.sin(delta + p.xChangeRate) * p.xChangeRate;
            if (p.x > W + p.r || p.y > H + p.r || p.x < -p.r) {
                snowGroup[i] = initialEverySnow();
                snowGroup[i].y = -rMax;
            }
        }
    }
    setInterval(draw, 1000 / 60);
  };

  window.onload = function() {
    _snowCanvas({
      el: document.getElementById('between_wrapper'),
      snowColor: "#ffffff"
    });
  };